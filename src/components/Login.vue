<template>
  <div class=" flex py-[120px] pl-[60px]">
    <div class=" pl-[140px] rounded-[30px] bg-[#FFFCFC] shadow-[0px_6px_15px_rgba(0,0,0,0.5)] p-[80px] relative left-[170px] z-10">
      <div class="">
        <h1 class="title text-[#F57212] text-[43px] font-normal	">
          Customer Care
        </h1>
      </div>
      <div class="flex flex-col pt-[30px]">
        <label class="user_name text-[#0070D2] text-[28px] pb-[20px] " for="">Tên đăng nhập</label>
        <input placeholder="example@gmail.com" class="rounded-[15px] border-[1px] border-[#CECDCD] w-[431px] h-[72px] p-[20px] placeholder-[#CECDCD] " type="text">
      </div>
      <div class="flex flex-col">
        <label class="user_pass text-[#0070D2] text-[28px] pb-[20px] pt-[20px]" for="">Mật khẩu</label>
        <input placeholder="*************************" class="rounded-[15px] border-[1px] border-[#CECDCD] w-[431px] h-[72px] pt-[35px] p-[20px] placeholder-[#CECDCD]" type="text">
      </div>
      <div class="flex pt-[20px] pb-[20px] justify-between w-[420px] text-[#0070D2]">
        <div class="flex  items-center">
          <input type="checkbok" class="w-[30px] h-[30px] border-[2px] border-[#CECDCD] rounded-[7px] mr-[20px] ">
        <p>Ghi nhớ ?</p>
        </div>
        <p>Quên mật khẩu</p>
      </div>
      <div class="bg-[#0070D2] w-[431px] h-[72px] rounded-[20px] text-center p-[10px]">
        <button class="text-[#FFFCFC] text-[33px] font-normal ">Đăng Nhập</button>
      </div>
    </div>

    <div class="w-[1082px] h-[807px] relative right-[160px]">
      <img class="w-full h-full" src="../assets/Image.png">
    </div>
  </div>
</template>

<script>

export default {
  name: "LoginComponent",
};
</script>

<style>
::placeholder {
  font-weight: 400;
  font-size: 28px;
  line-height: 33px;
}
.title{
  font-family: 'Poppins';
}
.user_name .user_pass{
  font-family: 'Roboto';
}
</style>