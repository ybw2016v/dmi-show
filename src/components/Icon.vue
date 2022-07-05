<template>
<template v-if="imgurl">
    <div class="mkicons">
        <img class="mkiconimg" :src="imgurl">
    </div>
</template>

<div v-else class="mkicons">
      <div class="spinner-border text-primary"></div>
</div>

</template>

<script setup>
import { ref } from 'vue';
import getem  from '../spt/getem.js';
import gbs from '../settings.json';
const props = defineProps(['dame']);
const imgurl = ref(null);
getem(props.dame,gbs.myhost).then(data => {
    console.log(data);
    imgurl.value = data;
});
</script>

<style lang="scss" scoped>
.mkiconimg {
    height: 1.75em;
}

.mkicons {
    display: inline-block;
}

.mkiconimg:hover {  
    transform: scale(1.5);
    transition: all 0.5s;
}


</style>