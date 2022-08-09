<template>
  <div class="">
    <Header />
    <div class="flex">
      <Sidebar/>
      <div class="flex">
        <div class="">
          <Infouser />
          <Chatinfo />
        </div>
        <div class="">
          <Message />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../layout/Sidebar.vue";
import Header from "../layout/Header.vue";
import Infouser from "../components/Infouser.vue";
import Chatinfo from "../components/Chatinfo.vue";
import Message from "../components/Message.vue";
export default {
  name: "ChatCompoent",
  components: {
    Infouser,
    Chatinfo,
    Message,
    Sidebar,
    Header,
  },
};
</script>

<style>
</style>