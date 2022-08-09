<template>
  <div class="">
    <Header />
    <div class="flex">
      <Sidebar />
      <div class="flex">
        <div class="flex border-r-[1px] border-[rgba(0, 0, 0, 0.25)]">
          <div class="">
            <Infouser />
            <Icon />
            <Profile />
          </div>
        </div>
        <div class="">
          <Usertable v-bind:users="users"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Sidebar from "../layout/Sidebar.vue";
import Header from "../layout/Header.vue";
import Infouser from "../components/Infouser.vue";
import Icon from "../components/Icon.vue";
import Profile from "../components/Profile.vue";
import Usertable from "../components/Usertable.vue";
export default {
  name: "ChatCompoent",
  components: {
    Infouser,
    Icon,
    Profile,
    Usertable,
    Sidebar,
    Header,
  },
  data () {
    return{
        users:[],
    }    
  },
  async created() {
    await this.getUser();
  },
  methods:{
    async getUser() {
        axios.get("https://api.npoint.io/ce5a9841d94205ae34f9?fbclid=IwAR3RqTgUtSUINGUzXMtcn4u9Dt16bZw9RB71SW3zHy6-rO6CPow1mxYZwKw").then((respon)=>{
            console.log(respon.data)
            this.users = respon.data;
        })
    }
  }
};
</script>

<style>
</style>