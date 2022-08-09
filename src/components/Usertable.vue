<template>
  <div class="form w-[1200px]">
    <div class="pt-[35px] pl-[5px] ">
        <div class="flex">
            <font-awesome-icon class="text-[40px] text-[#1858A4]" icon="fa-solid fa-user-tie" />
            <p class="p-[10px] ml-[10px] text-[20px] text-[#000000] leading-[28px] font-normal">Đặng Long - 0956 456 45 - LongD@gmail.com</p>
        </div>
    </div>
    <div class="text-[#FFFFFF] pt-[42px] pr-[20px] flex justify-end">
        <button class="text-[22px] bg-[#0070D2] rounded-[6px] px-[35px] py-[7px] justify-end">New Ticket <font-awesome-icon class="text-[15px] ml-[10px]" icon="fa-solid fa-bolt" /></button>        
    </div>
    <div class="flex">
        <div class="pl-[40px]">
            <p  class="Option__table text-[22px] px-[20px] py-[12px]  leading-[26px] font-normal text-[#DD7A01]">Lịch sử tương tác</p>
        </div>
        <div class="Option__table1 text-[22px] px-[20px] py-[12px]  leading-[26px]  font-normal">
            <p>Sản phẩm dịch vụ</p>
        </div>
        <div class="Option__table2 text-[22px] px-[70px] py-[12px]  leading-[26px]  font-normal">
            <p>Ghi chú</p>
        </div>
        <div class="option">
        </div>
    </div>
    <div class="pl-[40px] pt-[20px]">
        <table>
            <tr >
                <th  >
                    <input  type="checkbox">
                </th>
                <th class="text-start">
                    Name
                </th>
                <th class="text-start px-[100px]">
                    Phone
                </th>
                <th class="text-start">
                    Email
                </th>
                <th class="text-start px-[50px]">
                    Date
                </th>
                <th class="text-start">
                    Score
                </th>
            </tr>
            <tr v-for="item in users" :key="item.id">
                <td class="text-center">
                    <input  type="checkbox">
                </td>
                <td>
                    {{item.name}}
                </td>
                 <td>
                    {{item.phone}}
                </td>
                 <td>
                    {{item.email}}
                </td>
                 <td>
                    {{item.date}}
                </td>
                 <td>
                    {{item.score}}
                </td>
            </tr>
        </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "UserTableComponnent",
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
.Option__table{
    border-top: 4px solid #DD7A01;
    border-bottom: 4px solid #DD7A01;
    border-left: 2px solid #A4A4A4;
    border-right: 1px solid #A4A4A4;
}
.Option__table1{
    border-top: 3px solid #CFCFCF;
    border-bottom: 4px solid #DD7A01;
    border-left: 1px solid #A4A4A4;
    border-right: 1px solid #A4A4A4;
}
.Option__table2{
    border-top: 3px solid #CFCFCF;
    border-bottom: 4px solid #DD7A01;
    border-left: 1px solid #A4A4A4;
    border-right: 2px solid #A4A4A4;
}
.option{
    border-bottom: 4px solid #DD7A01;
    width: 40%;
}
table, td, th {
  border-top: 1px solid #CFCFCF;
  border-right: 1px solid #CFCFCF;
  border-bottom: 1px solid #CFCFCF;
}
table{
    width:75%
}
th{
    padding:12px 20px ;
    background: rgba(240, 242, 244, 0.5);
/* Table/1-Right */

box-shadow: inset -1px 0px 0px rgba(198, 209, 221, 0.5);

}
td{
    padding: 7px 20px;
}
</style>