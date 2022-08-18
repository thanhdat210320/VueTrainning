<template>
  <div class="w-[auto]">
    <Header />

    <div class="flex w-[100%] s:m-0 s:w-[10%]">
      <Sidebar />

      <div class="flex s:block lg:flex">
        <div class="">
          <font-awesome-icon
            @click="viewUser = !viewUser"
            class="text-[40px] text-[#1858A4] lg:hidden p-[10px]"
            icon="fa-solid fa-user-tie"
          />
        </div>
        <div class="flex">
          <div
            class="
              border-r-[1px] border-[rgba(0,
              0, 0,
              0.25)]
              s:hidden
              lg:block
            "
          >
            <Infouser />
            <Icon />
            <Profile />
          </div>
        </div>
        <div v-if="viewUser === true" class="flex relative">
          <div
            class="
              border-r-[1px] border-[rgba(0,
              0, 0,
              0.25)]
              overflow-x-scroll
              fixed
              top-[25%]
              z-[1000]
              h-[auto]
              bg-[#FFFFFF]
              rounded-[6px]
              shadow-[0px_6px_15px_rgba(0,0,0,0.25)
              md:top-[12%] md:left-[10%]
              lg:hidden
            "
          >
            <Infouser />
            <Icon />
            <Profile />
          </div>
        </div>
        <div class="">
          <Usertable :users="users" @add-user="Adduser" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
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
  data() {
    return {
      users: [],
      viewUser: false,
    };
  },
  async created() {
    await this.getUser();
  },
  methods: {
    async getUser() {
      try {
        const repos = await axios.get(
          "https://api.npoint.io/15ac3d1a6b87c7bab6fa"
        );
        console.log(repos.data);
        this.users = repos.data;
      } catch (error) {
        console.log(error);
      }
    },
    async Adduser(user) {
      this.users.push(user);
      if (this.users) {
        await axios
          .post("https://api.npoint.io/15ac3d1a6b87c7bab6fa", this.users)
          .then()
          .catch((error) => console.log(error));
        console.log(this.users);
      }
    },
  },
};
</script>

<style>
</style>