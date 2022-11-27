<template>
   <nav class="navbar navbar-expand-lg">
      <button
         class="navbar-toggler"
         type="button"
         data-toggle="collapse"
         data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false"
         aria-label="Toggle navigation"
      >
         <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
         <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
               <router-link to="/home" class="nav-link">
                  <i class="fa-solid fa-house"></i>
               </router-link>
            </li>
            <li class="nav-item">
               <router-link to="/admin" class="nav-link"
                  >Quản lý sản phẩm</router-link
               >
            </li>
            <li class="nav-item">
               <router-link to="/user" class="nav-link"
                  >Quản lý tài khoản</router-link
               >
            </li>
            <li class="nav-item user_name" v-if="this.local_user.role != ''">
               <router-link to="/" class="nav-link" @click="handleLogout">
                  <b>{{ this.local_user.name }}</b>
                  <button class="btn btn-primary logout-btn">
                     <i class="fa-solid fa-right-from-bracket"></i>
                  </button>
               </router-link>
            </li>
         </ul>
      </div>
   </nav>
</template>

<script>
import ProductList from "../../views/products/ProductList.vue";

export default {
   components: {
      ProductList,
   },
   data() {
      return {
         local_user: {
            role: "",
         },
      };
   },
   methods: {
      handleLogout() {
         localStorage.removeItem("user_login");
      },
   },
   mounted() {
      const user = JSON.parse(localStorage.getItem("user_login"));
      this.local_user = user;
   },
};
</script>

<style scoped>
.navbar {
   border-top: 1px solid #d6d6d6;
   border-bottom: 3px solid #d6d6d6;
   border-right: 0;
   border-left: 0;
}
.navbar .nav-item {
   color: #fff;
   position: relative;
}
.navbar .nav-item a {
   font-family: "Open Sans", sans-serif;
   color: #555 !important;
   text-align: left;
   font-size: 16px;
}
.navbar .nav-item a:hover {
   color: #0088ff !important;
   background-color: #d6d6d6;
}
.nav-item ul li a {
   display: flex;
   text-align: left;
}
.user_name {
   margin-left: 620px;
   text-transform: uppercase;
}
.logout-btn {
   width: 30px;
   height: auto;
   padding: 0px !important;
   margin-top: -5px;
   margin-left: 5px;
}
</style>
