export default async function getem(ename, hostname) {
    const chinfo = localStorage.getItem(`e_{ename}`);
    if (chinfo) {
        const iconinfo = JSON.parse(chinfo);
        const dtime = new Date().getTime();
        if (dtime - iconinfo.time < 1000 * 60 * 60 * 24 * 7) {
            return iconinfo.iconurl;
        }
    }
    const resdog = await fetch(`https://${hostname}/emojis/${ename}`);
    if (resdog.status !== 200) {
        return null;
    }
    const dogdata = await resdog.json();
    const iurl = dogdata.icon.url;
    const icon = { iconurl: iurl, time: new Date().getTime() };
    localStorage.setItem(`e_${ename}`, JSON.stringify(icon));
    return iurl;
}

