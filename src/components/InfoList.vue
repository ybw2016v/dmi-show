<template>
    <div v-if="Infodog != null" class="container-sm">
        <Acard :di="Infodog.author" :avatar="Infodog.icon" :alif="Infodog" :uname="sname" :hname="hostname" />
    </div>
    <div v-if="err">
        <div class="card edog">
            <div class="card-body">
                <div class=" alert alert-danger ct" role="alert">
                    <img src="../assets/404.png">

                </div>
                <h3 class="ct">这里什么也没有</h3>
                <h6 v-if="etime" class="ct">{{etime}}</h6>
            </div>

        </div>

    </div>


</template>
<script setup>
import { onMounted, ref, watchEffect } from 'vue';
import { getdoginfo } from '../spt/getdoginfo.js';
import Acard from './Acard.vue';
import gbs from '../settings.json';


const Infodog = ref(null);
const err = ref(false);
const etime = ref(null);
const sname = ref(null);
const hostname = ref(null);
// getdoginfo().then(data => {
//     Infodog.value = data;
// });
const pathlist = location.pathname.split("/");
const uname = pathlist[1] ? pathlist[1] : gbs.default_user;
if (uname && gbs.myhost) {
    const resi = await getdoginfo(gbs.myhost, uname);
    if (resi) {
        Infodog.value = resi;
        sname.value = uname;
        hostname.value = gbs.myhost;
    } else {
        console.log("Error");
        err.value = true;
        const ntime = new Date().toLocaleString();
        etime.value=ntime;
        setInterval(() => {
            etime.value=new Date().toLocaleString();
        }, 1000);
        
    }
}





</script>

<style lang="scss">
.dogtitle {
    background-color: aqua;
    display: none;
}

.edog {
    max-width: 650px;
    margin: 30px auto;
    border-radius: 20px;
}

.ct {
    text-align: center;
}
</style>