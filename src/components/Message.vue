<template>
  <div class="pt-[90px] pl-[50px] w-[1300px] pr-[20px]">
    <div class="flex border-b-[1px] justify-between">
      <div class="flex">
        <div class="relative">
          <img src="../assets/chat6.png" alt="" />
          <div class="absolute right-[0] z-10 top-[50px]">
            <img src="../assets/Ellipse 7.png" alt="" />
          </div>
        </div>
        <div class="pl-[30px] pt-[10px]">
          <div class="text-[#000000] font-semibold text-[24px]">
            <p>Swathy</p>
          </div>
          <div class="text-[14px] font-normal text-[rgba(0, 0, 0, 0.85)]">
            Online
          </div>
        </div>
      </div>
      <div class="flex pr-[50px] pt-[20px] text-[#0D82E9]">
        <div class="">
          <font-awesome-icon icon="fa-solid fa-phone" />
        </div>
        <div class="px-[40px]">
          <font-awesome-icon icon="fa-solid fa-video" />
        </div>
        <div class="">
          <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" />
        </div>
      </div>
    </div>
    <div class="border-b-[1px]">
      <div class="flex">
        <div class="pt-[40px]">
          <div class="relative">
            <p
              class="
                text-[#000000] text-[16px]
                font-medium
                px-[55px]
                py-[12px]
                bg-[#CFCFCF]
                rounded-[10px]
              "
            >
              Hey Three !
            </p>
            <div
              class="
                arrow-up
                absolute
                mt-[-5px]
                rounded-[2px]
                mt-[-12px]
                ml-[-9px]
              "
            ></div>
          </div>
          <p class="font-medium text-[12px] chat__time">Today 2:01pm</p>
        </div>
      </div>
      <div class="flex">
        <div class="pt-[40px]">
          <div class="relative">
            <p
              class="
                text-[#000000] text-[16px]
                font-medium
                px-[55px]
                py-[12px]
                bg-[#CFCFCF]
                rounded-[10px]
              "
            >
              How are you doing ?
            </p>
            <div
              class="
                arrow-up
                absolute
                mt-[-5px]
                rounded-[2px]
                mt-[-12px]
                ml-[-9px]
              "
            ></div>
          </div>
          <p class="font-medium text-[12px] chat__time">Today 2:02pm</p>
        </div>
      </div>
      <div class="flex justify-end">
        <div class="pt-[40px]">
          <div class="relative">
            <p
              class="
                text-[#000000] text-[16px]
                font-medium
                px-[55px]
                py-[12px]
                bg-[#0070D2]
                rounded-[10px]
              "
            >
              Hello...
            </p>
            <div
              class="
                arrow-up-left
                absolute
                mt-[-5px]
                rounded-[2px]
                mt-[-12px]
                mr-[-9px]
                right-0
              "
            ></div>
          </div>
          <p class="font-medium text-[12px] chat__time">Today 2:12pm</p>
        </div>
      </div>
      <div class="flex justify-end">
        <div class="pt-[40px]">
          <div class="relative">
            <p
              class="
                text-[#000000] text-[16px]
                font-medium
                px-[55px]
                py-[12px]
                bg-[#0070D2]
                rounded-[10px]
              "
            >
              I am good and how about you ?
            </p>
            <div
              class="
                arrow-up-left
                absolute
                mt-[-5px]
                rounded-[2px]
                mt-[-12px]
                mr-[-9px]
                right-0
              "
            ></div>
          </div>
          <p class="font-medium text-[12px] chat__time">Today 2:12pm</p>
        </div>
      </div>
      <div class="flex">
        <div class="pt-[40px]">
          <div class="relative">
            <p
              class="
                text-[#000000] text-[16px]
                font-medium
                px-[55px]
                py-[12px]
                bg-[#CFCFCF]
                rounded-[10px]
              "
            >
              I am doing well. Can we meet up tomorrow ?
            </p>
            <div
              class="
                arrow-up
                absolute
                mt-[-5px]
                rounded-[2px]
                mt-[-12px]
                ml-[-9px]
              "
            ></div>
          </div>
          <p class="font-medium text-[12px] chat__time">Today 2:13pm</p>
        </div>
      </div>
      <div class="flex justify-end">
        <div class="pt-[40px]">
          <div class="relative">
            <p
              class="
                text-[#000000] text-[16px]
                font-medium
                px-[55px]
                py-[12px]
                bg-[#0070D2]
                rounded-[10px]
              "
            >
              Sure !
            </p>
            <div
              class="
                arrow-up-left
                absolute
                mt-[-5px]
                rounded-[2px]
                mt-[-12px]
                mr-[-9px]
                right-0
              "
            ></div>
          </div>
          <p class="font-medium text-[12px] chat__time">Today 2:14pm</p>
        </div>
      </div>
    </div>
    <div class="flex pt-[20px]">
      <div class="flex px-[20px] py-[5px] bg-[#0070D2] rounded-[10px] text-[#FFFFFF] mr-[20px]">
        <font-awesome-icon class="p-[4px]" icon="fa-solid fa-reply" />
        <p>Reply</p>
      </div>
      <div class="flex px-[20px] py-[5px] bg-[#0070D2] rounded-[10px] text-[#FFFFFF] mr-[20px]">
        <font-awesome-icon class="p-[4px]" icon="fa-solid fa-circle-arrow-up" />
        <p>Escalate</p>
      </div>
      <div class="flex px-[20px] py-[5px] bg-[#0070D2] rounded-[10px] text-[#FFFFFF] mr-[20px]">
        <font-awesome-icon class="p-[4px]" icon="fa-solid fa-circle-plus" />
        <p>Add agest</p>
      </div>
      <div class="flex px-[20px] py-[5px] bg-[#FFFFFF] rounded-[10px] border-[#0070D2] border-[1px] text-[#0070D2] mr-[20px]">
        <font-awesome-icon class="p-[4px]" icon="fa-solid fa-pen" />
        <p>Create ticket</p>
      </div>
    </div>
    <div class="">
      <input type="text">
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageComponent",
};
</script>

<style>
.arrow-up {
  width: 0px;
  height: 0px;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 12px solid #cfcfcf; /* Tam giác phía dưới được đổ màu */
}
.arrow-up-left {
  width: 0px;
  height: 0px;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 12px solid #0070d2; /* Tam giác phía dưới được đổ màu */
}
.chat__time {
  color: rgba(0, 0, 0, 0.25);
}
</style>