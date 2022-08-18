<template>
  <div class=" flex py-[120px] w-[100%]  ">
    <div class=" px-[120px] w-[40%] rounded-[30px] bg-[#FFFCFC] shadow-[0px_6px_15px_rgba(0,0,0,0.5)] p-[80px] relative left-[220px] z-10 xl:px-[100px] xl:w-[40%] lg:px-[50px] lg:w-[50%] md:w-[70%] md:left-[150px] sm:w-[80%] sm:left-[80px] sm:px-[50px] s:w-[80%] s:left-[50px] s:px-[40px]">
      <div class="">
        <h1 class="title text-[#F57212] text-[43px] font-normal	s:text-[40px] sm:text-[43px]">
          Customer Care
        </h1>
      </div>
      <div class="flex flex-col pt-[30px]">
        <label class="user_name text-[#0070D2] text-[28px] pb-[20px] " for="">Tên đăng nhập</label>
        <input placeholder="example@gmail.com" class="rounded-[15px] border-[1px] border-[#CECDCD]  p-[20px] placeholder-[#CECDCD] " type="text">
      </div>
      <div class="flex flex-col">
        <label class="user_pass text-[#0070D2] text-[28px] pb-[20px] pt-[20px]" for="">Mật khẩu</label>
        <input placeholder="*************************" class="rounded-[15px] border-[1px] border-[#CECDCD] pt-[35px] p-[20px] placeholder-[#CECDCD]" type="text">
      </div>
      <div class="flex pt-[20px] pb-[20px] justify-between  text-[#0070D2]">
        <div class="flex  items-center">
          <input type="checkbok" class="w-[30px] h-[30px] border-[2px] border-[#CECDCD] rounded-[7px] mr-[20px] ">
        <p class="user__mk">Ghi nhớ ?</p>
        </div>
        <p class="user__mk">Quên mật khẩu</p>
      </div>
      <div class="bg-[#0070D2] rounded-[20px] text-center p-[10px]">
        <button class="login text-[#FFFCFC] text-[33px] font-normal ">Đăng Nhập</button>
      </div>
    </div>

    <div class="relative right-[160px] w-50% s:hidden lg:block ">
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
.user_name {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  line-height: 33px;
}
.user_pass {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  line-height: 33px;
}
.user__mk{
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
}
.login{
  font-family: 'Roboto';
font-style: normal;
font-weight: 400;
}
</style>