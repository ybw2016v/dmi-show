<template>
    <div>
        <template v-if="item.content_html">
            <M :cont="item.content_html" />
        </template>
        <template v-if="item.image">
            <div class="ipic">
                <img :src="item.image">
            </div>
        </template>
        <div class="timelink"><a :href="item.url">{{ timedog }}</a></div>

    <hr>
    </div>
</template>
<script setup>
import { ref } from 'vue';
// import * as mfm from 'mfm-js';
import M from './mfm.js';
const props = defineProps(['item']);
const timedog = ref(null);
timedog.value = new Date(props.item.date_modified).toLocaleString();
const qui = ref(null);
qui.value = props.item.content_html;



</script>

<style lang="scss" scoped>
.ipic {
    max-width: 100%;
}

.ipic img {
    max-width: inherit;
}

.contentdog {
    max-width: 100%;
    white-space: pre-wrap;
}
</style>