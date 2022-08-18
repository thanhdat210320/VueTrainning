<template>
<div class="flex border-b-2 border-[#DF6106] ">
    <div  class="info__user py-[25px] px-[50px] lg:px-[10px] lg:py-[15px] xl:px-[50px] xl:py-[25px]">
        <p class="text-[#DF6106] lg:text-[16px] xl:text-[20px] text-[20px]">Thông tin khách hàng</p>
    </div>
    <div class="py-[25px] px-[30px] lg:px-[10px] lg:py-[15px] xl:px-[30px] xl:py-[25px]">
        <p @click="Search()" class="text-[20px] xl:text-[20px] lg:text-[16px]">Tìm kiếm</p>
    </div>
</div>

</template>

<script>
export default {
    name: "InfouserComponent",
    data () {
        return{
            search:""
        }
    },
    methods: {
        Search(){
            alert("tìm kiếm")
        }
    }
    
}
</script>

<style>
.info__user{
    background: linear-gradient(180deg, rgba(250, 200, 164, 0.296) 0%, rgba(255, 182, 33, 0) 100%);
}
</style>