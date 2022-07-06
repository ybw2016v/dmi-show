<template>
  <div class="card cdog card-1">
    <!--                 <div class="card-header">About</div> -->
    <div class="card-body">
      <div class="avatar">
        <img class="pic" :src="avatar">
      </div>
      <a :href="di.url">
        <div class="nameplace">{{ di.name }}</div>
      </a>
      <div class="bg">
        <span class="badge bg-info">{{ `@${uname}@${hname}` }}</span>
      </div>
      <div class="bif">
        <ul class="list-group">
          <li class="list-group-item">
            <div class="bios">
              <M :cont="bio" />
            </div>
          </li>
          <li class="list-group-item ">
            <a :href="di.url"><span>{{ floo }}</span></a>
          </li>
        </ul>

      </div>
    </div>
    <div class="card-footer"></div>
  </div>
  <div class="card card-1 cdog">
    <div class="card-header">
      <span class="card-title">动态:</span>
    </div>
    <div class="card-body">
      <!-- <Item :item="alif.items[1]"/> -->
      <div v-for="(itemd, index) in alif.items" :key="index">
        <Item :item="itemd" />
      </div>
      <div class="ctf">
        <a :href="di.url" >
          <span>点击查看更多</span>
        </a>
      </div>
    </div>

  </div>


</template>

<script setup>
import { ref, watch } from 'vue';
import Item from './Itemdog.vue';
import Icon from './Icon.vue';
import M from './mfm.js';
// import { defineProps } from 'vue';

const props = defineProps(['di', 'avatar', 'alif','uname','hname']);
const dp = props.alif.description.split(" · ");
const floo = ref(dp[0]);
const bio = ref(dp[1]);
// const avatarurl = ref(null);






</script>

<style lang="scss" scoped>


.cdog {
  max-width: 650px;
  margin: 30px auto;
  border-radius: 20px;
}

.nameplace {
  position: absolute;
  top: 40px;
  left: 135px;
  font-size: 25px;
  font-weight: bold;
  color: #2979ff;
}

.card-1 {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.card-1:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.cdog {
  margin: 20px auto;
}

.avatar {
  position: absolute;
  border-radius: 50%;
  top: 35px;
  left: 30px;
}

.pic {
  border-radius: 100%;
  border: 1px solid;
  border-color: rgba(24, 24, 200, 0.5);
  width: 80px;
}

.bg {
  position: absolute;
  top: 80px;
  left: 135px;
  font-size: 14px;
}

.bif {
  border: 1px;
  font-size: 16px;
  /*   position: absolute; */
  margin: 140px 20px 10px 10px;
  /*   top:140px; */
  /*   left:30px; */
  /*   right:30px; */
  li:hover {
    background-color: #f5f5f5;
    transition: all 0.5s;
  }
}

.bios {
  white-space: pre-wrap;
  margin: 0;

  .ctd {
    margin-top: 0.5em;
  }
}

.ctf {
  text-align: center;
  margin-bottom: 0.5em;
  a {
    text-decoration: none;
    color: cadetblue;
  }
  a:hover{
    text-decoration: underline;
    font-size: 1.15em;
    transition: all 0.5s;
  }
}


</style>