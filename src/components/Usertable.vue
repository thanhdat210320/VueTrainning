<template>
  <div class="">
    <div class="" v-if="showTable === true">
      <div class="form pb-[20px]">
        <div class="pl-[5px] pt-[10px]">
          <div class="flex">
            <font-awesome-icon
              class="text-[40px] text-[#1858A4] s:hidden lg:block"
              icon="fa-solid fa-user-tie"
            />
            <p
              class="
                p-[10px]
                ml-[10px]
                text-[20px] text-[#000000]
                leading-[28px]
                font-normal
              "
            >
              Đặng Long - 0956 456 45 - LongD@gmail.com
            </p>
          </div>
        </div>
        <div
          class="
            add__ticket
            text-[#FFFFFF]
            flex
            justify-end
            pr-[50px]
            py-[20px]
            w-[100%]
          "
        >
          <button
            @click="newTicket()"
            class="
              text-[22px]
              bg-[#0070D2]
              rounded-[6px]
              px-[35px]
              py-[7px]
              justify-end
            "
          >
            New Ticket
            <font-awesome-icon
              class="text-[15px] ml-[10px]"
              icon="fa-solid fa-bolt"
            />
          </button>
        </div>
        <div class="tab__content flex w-[100%] pr-[50px]">
          <div class="pl-[20px] tab__pane">
            <p
              class="
                Option__table
                text-[22px]
                px-[18px]
                py-[12px]
                leading-[26px]
                font-normal
                text-[#DD7A01]
              "
            >
              Lịch sử tương tác
            </p>
          </div>
          <div
            class="
              Option__table1
              text-[22px]
              px-[10px]
              py-[12px]
              leading-[26px]
              font-normal
            "
          >
            <p>Sản phẩm dịch vụ</p>
          </div>
          <div
            class="
              Option__table2
              text-[22px]
              px-[50px]
              py-[12px]
              leading-[26px]
              font-normal
            "
          >
            <p>Ghi chú</p>
          </div>
          <div class="option s:hidden md:block"></div>
        </div>
      </div>
      <div class="table_user s:h-[600px]">
        <table class="">
          <thead>
            <tr class="">
              <th>
                <input type="checkbox" />
              </th>
              <th class="text-[12px] text-[#7B8395]">ID</th>
              <th class="text-[12px] text-[#7B8395]">Name</th>
              <th class="text-[12px] text-[#7B8395]">Phone</th>
              <th class="text-[12px] text-[#7B8395]">Email</th>
              <th class="text-[12px] text-[#7B8395]">Date</th>
              <th class="text-[12px] text-[#7B8395]">Score</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in users" :key="item.id">
              <td class="text-center">
                <input type="checkbox" />
              </td>
              <td class="text-[13px] text-[#1F232E]">
                {{ item.id }}
              </td>
              <td class="text-[13px] text-[#1F232E]">
                {{ item.name }}
              </td>
              <td class="text-[13px] text-[#1F232E]">
                {{ item.phone }}
              </td>
              <td class="text-[13px] text-[#1F232E]">
                {{ item.email }}
              </td>
              <td class="text-[13px] text-[#1F232E]">
                {{ item.date }}
              </td>
              <td class="text-[13px] text-[#1F232E]">
                {{ item.score }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div
      v-if="isShow === true"
      class="
        Addticket
     
        lg:w-[90%]
        md:w-[100%]
        h-[900px]
        bg-[#FFFFFF]
        rounded-[6px]
        shadow-[0px_6px_15px_rgba(0,0,0,0.25)]
        ml-[20px]
      "
    >
      <div class="flex justify-between py-[10px] border-b-[1px] border-[#cfcfcf]">
        <p class="text-[20px] font-medium pl-[10px]">Tạo ticket</p>
        <div @click="viewTable()" class="exit pr-[10px] text-[20px]">
          x
        </div>
      </div>
      <div class="flex border-b-[1px] border-[#0078D4] w-[98%] ml-[10px] pl-[10px] pt-[30px]">
        <p class="family-[roboto] text-[18px] text-[#201F1E] font-bold leading-5">User:</p>
        <p class="text-[14px] text-[#201F1E] family-[Segoe UI] leading-5 pb-[5px]">Placeholder</p>
      </div>
      <div class="">
        
        <div class="flex justify-center pt-[50px] text-[20px] pl-[50px] font-medium">
          <div class="input1 lg:pr-[100px] pb-[20px] s:pr-[0px]">
            <p>ID</p>
            <input
              v-model.number="user.id"
              class="rounded-[6px] border-[1px] border-[#0070D2]"
              type="text"
              placeholder="name"
              @blur="validate()"
              v-bind:class="{ 'is-invalid': errors.id }"
            />
            <div class="invalid-feedback text-[red]">{{ errors.id }}</div>
          </div>
          <div class="input2">
            <p>name</p>
            <input
              v-model="user.name"
              class="rounded-[6px] border-[1px] border-[#0070D2]"
              type="text"
              placeholder="name"
              @blur="validate()"
              v-bind:class="{ 'is-invalid': errors.name }"
            />
            <div class="invalid-feedback text-[red]">{{ errors.name }}</div>
          </div>
        </div>
        
        <div class="flex justify-center pt-[20px] text-[20px] pl-[50px] font-medium">
          <div class="input1 lg:pr-[100px] s:pr-[0px] pb-[20px]">
            <p>email</p>
            <input
              v-model="user.email"
              class="rounded-[6px] border-[1px] border-[#0070D2]"
              type="text"
              placeholder="email"
              @blur="validate()"
              v-bind:class="{ 'is-invalid': errors.email }"
            />
            <div class="invalid-feedback text-[red]">{{ errors.email }}</div>
          </div>
          <div class="input2">
            <p>Phone</p>
            <input
              v-model="user.phone"
              class="rounded-[6px] border-[1px] border-[#0070D2]"
              type="text"
              placeholder="Phone"
              @blur="validate()"
              v-bind:class="{ 'is-invalid': errors.phone }"
            />
            <div class="invalid-feedback text-[red]">{{ errors.phone }}</div>
          </div>
        </div>
         <div class="flex justify-center pt-[20px] text-[20px] pl-[50px] font-medium">
          <div class="input1 lg:pr-[100px] s:pr-[0px]">
            <p>Date</p>
            <input
              v-model="user.date"
              class="rounded-[6px] border-[1px] border-[#0070D2]"
              type="text"
              placeholder="date"
              @blur="validate()"
              v-bind:class="{ 'is-invalid': errors.date }"
            />
            <div class="invalid-feedback text-[red]">{{ errors.date }}</div>
          </div>
          <div class="input2">
            <p>Score</p>
            <input
              v-model="user.score"
              class="rounded-[6px] border-[1px] border-[#0070D2]"
              type="text"
              placeholder="score"
              @blur="validate()"
              v-bind:class="{ 'is-invalid': errors.score }"
            />
            <div class="invalid-feedback text-[red]">{{ errors.score }}</div>
          </div>
        </div>
      </div>
      <div class="pt-[100px] md:flex s:text-center md:float-right">
        <div class="action__delete px-[20px]">
          <button
            class="
            btn_delete
              bg-[#DD7A01]
              text-[28px] text-[#FFFFFF]
              rounded-[10px]
              px-[95px]
              py-[5px]
              family-[roboto]
            "
          >
            Hủy
          </button>
        </div>
        <div class="pr-[20px]">
          <button
            @click="Adduser()"
            class="
            btn_add
              bg-[#04844B]
              text-[28px] text-[#FFFFFF]
              rounded-[10px]
              px-[40px]
              py-[5px]
              family-[roboto]
            "
          >
            Tạo Ticket <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserTableComponnent",
  props: {
    users: {
      type: Array,
      default: () => {},
    },
  },
  data() {
    return {
      isShow: false,
      showTable:true,
      errors: {
        id: "",
        name: "",
        phone: "",
        email: "",
        date: "",
        score: "",
      },
      user: {
        id: "",
        name: "",
        phone: "",
        email: "",
        date: "",
        score: "",
      },
    };
  },
  methods: {
    validate() {
      let isValid = true;
      this.errors = {
        id: "",
        name: "",
        phone: "",
        email: "",
        date: "",
        score: "",
      };
      if (!this.user.id) {
        this.errors.id = "ID is required";
        isValid = false;
      }
      if (!this.user.name) {
        this.errors.name = "Name is required";
        isValid = false;
      }
      if (!this.user.phone) {
        this.errors.phone = "phone is required";
        isValid = false;
      }
      if (!this.user.email) {
        this.errors.email = "email is required";
        isValid = false;
      }
      if (!this.user.date) {
        this.errors.date = "date is  required";
        isValid = false;
      }
      if (!this.user.score) {
        this.errors.score = "score is  required";
        isValid = false;
      } else if (!this.isNumber(this.user.score)) {
        this.errors.score = "score is must be number";
        isValid = false;
      }
      return isValid;
    },
    isNumber(value) {
      return /^\d*$/.test(value);
    },
    Adduser() {
      if (this.validate()) {
        this.$emit("add-user", this.user);
        this.isShow = false;
        alert("thêm thành công");
        console.log(this.users);
        this.showTable = true;
      }
    },
    newTicket(){
      this.isShow =! this.isShow
      this.showTable = false
    },
    viewTable(){
      this.isShow =! this.isShow
      this.showTable = true
    }    
  },
};
</script>

<style>
.Option__table {
  border-top: 4px solid #dd7a01;
  border-bottom: 4px solid #dd7a01;
  border-left: 2px solid #a4a4a4;
  border-right: 1px solid #a4a4a4;
}
.Option__table1 {
  border-top: 3px solid #cfcfcf;
  border-bottom: 4px solid #dd7a01;
  border-left: 1px solid #a4a4a4;
  border-right: 1px solid #a4a4a4;
}
.Option__table2 {
  border-top: 3px solid #cfcfcf;
  border-bottom: 4px solid #dd7a01;
  border-left: 1px solid #a4a4a4;
  border-right: 2px solid #a4a4a4;
}
.option {
  border-bottom: 4px solid #dd7a01;
  width: 50%;
}
table,
td,
th {
  border-top: 1px solid #cfcfcf;
  border-right: 1px solid #cfcfcf;
  border-bottom: 1px solid #cfcfcf;
}
table {
  width: 75%;
}
th {
  padding: 12px 20px;
  background: rgba(240, 242, 244, 0.5);
  /* Table/1-Right */

  box-shadow: inset -1px 0px 0px rgba(198, 209, 221, 0.5);

  top: 0px;
}
td {
  padding: 7px 20px;
}
::placeholder {
  padding-left: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
}
.exit:hover {
  cursor: pointer;
}
.table_user {
  overflow-y: scroll;
  overflow-x: scroll;

  padding-left: 20px;
}
@media only screen and (max-width: 600px) {
  .tab__content {
    padding: 0;
  }
  .tab__pane {
    padding: 0;
  }
  .add__ticket {
    padding-right: 0;
  }
  .Addticket {
  }
  input {
    max-width: 100%;
  }
}
@media only screen and (max-width: 900px) {
  .btn_delete{
    width: 84%;
    margin-right: 19px;
  }
  .action__delete{
    padding-bottom: 20px;
  }
   .btn_add{
    width: 80%;
  }
  .tab__content {
    padding: 0;
  }
   .add__ticket {
    padding-right: 0;
  }
  input {
    width: 80%;
  }
}
@media only screen and (max-width: 1200px) {
  input {
    width: 100%;
  }
  .input1{
    padding-right: 50px;
  }
  .input2{
    padding-right: 50px;
  }
}
@media only screen and (max-width: 1920) {
  input {
    width: 100%;
  }
}
</style>