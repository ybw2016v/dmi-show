import { h } from 'vue';
import gbs from '../settings.json';
import Icon from './Icon.vue'
import * as mfm from 'mfm-js';
import { isArray } from '@vue/shared';


function validTime(t) {
    if (t == null) return null;
    return t.match(/^[0-9.]+s$/) ? t : null;
}


function rd(itm) {
    console.log(itm);
    if (isArray(itm)) {
        return itm.map(rd);
    }
    // const resa = [];

    if (!itm) {
        return [];
    }
    switch (itm.type) {
        case 'text':
            const text = itm.props.text.replace(/(\r\n|\n|\r)/g, '\n');
            const res = [];
            for (const t of text.split('\n')) {
                res.push(h('br'));
                res.push(t);
            }
            res.shift();
            return res;
        // resa.push(res);
        case 'bold':
            return h('b', rd(itm.children));
        // resa.push(h('b', rd(itm.children)));

        case 'italic':
            return h('i', { 'style': "'font-style: oblique;'" }, rd(itm.children));
        // resa.push(h('i', { 'style': "'font-style: oblique;'" }, rd(itm.children)));


        //#region 
        case 'fn': {
            // TODO: CSSを文字列で組み立てていくと itm.props.args.~~~ 経由でCSSインジェクションできるのでよしなにやる
            let style;
            switch (itm.props.name) {
                case 'tada': {
                    const speed = validTime(itm.props.args.speed) || '1s';
                    style = 'font-size: 150%;';
                    break;
                }
                case 'jelly': {
                    const speed = validTime(itm.props.args.speed) || '1s';
                    style = '';
                    break;
                }
                case 'twitch': {
                    const speed = validTime(itm.props.args.speed) || '0.5s';
                    style = this.$store.state.animatedMfm ? `animation: mfm-twitch ${speed} ease infinite;` : '';
                    break;
                }
                case 'shake': {
                    const speed = validTime(itm.props.args.speed) || '0.5s';
                    style = this.$store.state.animatedMfm ? `animation: mfm-shake ${speed} ease infinite;` : '';
                    break;
                }
                case 'spin': {
                    const direction =
                        itm.props.args.left ? 'reverse' :
                            itm.props.args.alternate ? 'alternate' :
                                'normal';
                    const anime =
                        itm.props.args.x ? 'mfm-spinX' :
                            itm.props.args.y ? 'mfm-spinY' :
                                'mfm-spin';
                    const speed = validTime(itm.props.args.speed) || '1.5s';
                    style = `animation: ${anime} ${speed} linear infinite; animation-direction: ${direction};`;
                    break;
                }
                case 'jump': {
                    const speed = validTime(itm.props.args.speed) || '0.75s';
                    style = `animation: mfm-jump ${speed} linear infinite;`;
                    break;
                }
                case 'bounce': {
                    const speed = validTime(itm.props.args.speed) || '0.75s';
                    style = `animation: mfm-bounce ${speed} linear infinite; transform-origin: center bottom;`;
                    break;
                }
                case 'flip': {
                    const transform =
                        (itm.props.args.h && itm.props.args.v) ? 'scale(-1, -1)' :
                            itm.props.args.v ? 'scaleY(-1)' :
                                'scaleX(-1)';
                    style = `transform: ${transform};`;
                    break;
                }
                case 'x2': {
                    return h('span', {
                        class: 'mfm-x2',
                    }, genEl(itm.children));
                }
                case 'x3': {
                    return h('span', {
                        class: 'mfm-x3',
                    }, genEl(itm.children));
                }
                case 'x4': {
                    return h('span', {
                        class: 'mfm-x4',
                    }, genEl(itm.children));
                }
                case 'font': {
                    const family =
                        itm.props.args.serif ? 'serif' :
                            itm.props.args.monospace ? 'monospace' :
                                itm.props.args.cursive ? 'cursive' :
                                    itm.props.args.fantasy ? 'fantasy' :
                                        itm.props.args.emoji ? 'emoji' :
                                            itm.props.args.math ? 'math' :
                                                null;
                    if (family) style = `font-family: ${family};`;
                    break;
                }
                case 'blur': {
                    return h('span', {
                        //     class: '_mfm_blur_',
                        // }, genEl(itm.children));
                        // resa.push(h('span', {
                        class: '_mfm_blur_',
                    }, rd(itm.children));
                }
                case 'rainbow': {
                    const speed = validTime(itm.props.args.speed) || '1s';
                    style = this.$store.state.animatedMfm ? `animation: mfm-rainbow ${speed} linear infinite;` : '';
                    break;
                }
                case 'sparkle': {
                    if (!this.$store.state.animatedMfm) {
                        // return genEl(itm.children);
                        // resa.push(rd(itm.children));
                    }
                    return h(MkSparkle, {}, genEl(itm.children));
                    // resa.push(h(MkSparkle, {}, rd(itm.children)));
                }
                case 'rotate': {
                    const degrees = parseInt(itm.props.args.deg) || '90';
                    style = `transform: rotate(${degrees}deg); transform-origin: center center;`;
                    break;
                }
            }
            if (style == null) {
                return h('span', {}, ['$[', itm.props.name, ' ', ...genEl(itm.children), ']']);
                // resa.push(h('span', {}, ['$[', itm.props.name, ' ', ...rd(itm.children), ']']));
            } else {
                return h('span', { style: 'display: inline-block;' + style, }, genEl(itm.children));
                // resa.push(h('span', { style: 'display: inline-block;' + style, }, rd(itm.children)));
            }
        }
        //#region 

        case 'small': {
            return h('small', { style: 'opacity:0.7' }, rd(itm.children));
            // resa.push(h('small', { style: 'opacity:0.7' }, rd(itm.children)));
        }

        case 'center': {
            return h('div', { style: 'text-align:center' }, rd(itm.children));
            // resa.push(h('div', { style: 'text-align:center' }, rd(itm.children)));
        }

        case 'url': {
            return h('a', { class: 'mfm-url', href: itm.props.url, rel: 'nofollow noopener' }, itm.props.url);
            // resa.push(h('a', { class: 'mfm-url', href: itm.props.url, rel: 'nofollow noopener' }, itm.props.url));
        }

        case 'link': {
            return h('a', { class: 'mfm-link', href: itm.props.url, rel: 'nofollow noopener' }, rd(itm.children));
            // resa.push(h('a', { class: 'mfm-link', href: itm.props.url, rel: 'nofollow noopener' }, rd(itm.children)));
        }

        case 'mention': {
            let linkdog = '';
            let dog;
            if (itm.props.host) {
                linkdog = `https://${itm.props.host}/@${itm.props.username}`;
                dog = [h('spin', { class: 'uname' }, `@${itm.props.username}`), h('span', { class: 'uhost' }, `@${itm.props.host}`)];
            } else {
                linkdog = `https://${gbs.myhost}/@${itm.props.username}`;
                dog = [h('spin', { class: 'uname' }, `@${itm.props.username}`)];
            }
            return h('a', { class: 'mfm-mention', href: linkdog, rel: itm.props.host ? 'nofollow noopener' : '' }, dog);
            // resa.push(h('a', { class: 'mfm-mention', href: linkdog, rel: itm.props.host ? 'nofollow noopener' : '' }, dog));

        }

        case 'hashtag': {
            return h('a', { class: 'mfm-hashtag', href: `https://${gbs.myhost}/tags/${encodeURIComponent(itm.props.hashtag)}` }, `#${itm.props.hashtag}`);
            // resa.push(h('a', { class: 'mfm-hashtag', href: `https://${gbs.myhost}/tags/${encodeURIComponent(itm.props.hashtag)}` }, `#${itm.props.hashtag}`));
        }

        case 'blockCode': {
            return h('div', { class: 'mfm-blockCode' }, rd(itm.props.code));
            // resa.push(h('div', { class: 'mfm-blockCode' }, rd(itm.props.code)));
        }

        case 'inlineCode': {
            return h('span', { class: 'mfm-inlineCode' }, rd(itm.props.code));
            // resa.push(h('span', { class: 'mfm-inlineCode' }, rd(itm.props.code)));
        }

        case 'quote': {
            return h('div', { class: 'mfm-quote' }, rd(itm.children));
            // resa.push(h('div', { class: 'mfm-quote' }, rd(itm.children)));
        }

        case 'emojiCode': {
            return h(Icon, { dame: itm.props.name });
            // resa.push(h(Icon, { dame: itm.props.name }));
        }

        case 'unicodeEmoji': {
            return h('spin', { class: 'mfm-unicodeEmoji' }, itm.props.emoji);
            // resa.push(h('spin', { class: 'mfm-unicodeEmoji' }, itm.props.emoji));
        }

        case 'mathInline': {
            return h('div', { class: 'mfm-mathInline' }, rd(itm.props.formula));
            // resa.push(h('div', { class: 'mfm-mathInline' }, rd(itm.props.formula)));
        }

        case 'mathBlock': {
            return h('div', { class: 'mfm-mathBlock' }, rd(itm.props.formula));
            // resa.push(h('div', { class: 'mfm-mathBlock' }, rd(itm.props.formula)));
        }

        case 'search': {
            return h('a', { class: 'mfm-search', href: `https://${gbs.myhost}/search?q=${encodeURIComponent(itm.props.query)}` }, itm.props.query);
            // resa.push(h('a', { class: 'mfm-search', href: `https://${gbs.myhost}/search?q=${encodeURIComponent(itm.props.query)}` }, itm.props.query));
        }



        default: {
            console.error('unrecognized ast type:', itm.type);

            return [];
            // resa.push([]);
        }
    }
}
// return resa;

export default {
    props: {
        cont: {
            type: String,

        }
    },
    setup(props) {
        return () => {
            const mv = mfm.parse(props.cont);
            const uo = [];
            for (const ds of mv) {
                const wi = rd(ds);
                uo.push(wi);
            }
            return h('div', { class: "ctd",'rawtext':props.cont }, uo);
        }
    }

}
