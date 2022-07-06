<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
import InfoListVue from "./components/InfoList.vue";
import "./assets/main.scss";
// var HI=0;
function hightchange() {
  const Hig = window.document.body.scrollHeight;
  const Hig2 = window.document.documentElement.scrollHeight;
  const High = Math.max(Hig, Hig2);
  if (window.HI != High) {
    window.HI = High;
    console.log(High);
    window.parent.postMessage(High, "*");
  }
}
setInterval(() => {
  hightchange();
}, 1000);

</script>

<template>
  <div class="p-5 mb-4 bg-light rounded-3 gui">
    <h1>
      <p>dog</p>
    </h1>
  </div>
  <Suspense>
    <InfoListVue />
    <template #fallback> Loading…… </template>
    <!-- <InfoListVue/> -->
  </Suspense>

  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" /> -->
</template>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #a89809c4;
  margin-top: 0px;
}

.gui {
  background-color: #f5f5f5;
  border-radius: 3px;
  padding: 20px;
  margin-bottom: 20px;
  display: none;
}
</style>
