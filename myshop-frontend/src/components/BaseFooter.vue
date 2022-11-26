<template>
   <footer id="footer">
      <div class="first-footer">
         <div class="container">
            <div class="row">
               <div class="contact col-lg-4">
                  <h5>Thông tin liên hệ</h5>
                  <ul>
                     <li class="address">
                        <i
                           class="fa-sharp fa-solid fa-location-dot icon-contact"
                        ></i>
                        Đại học Cần Thơ
                     </li>
                     <li class="phone">
                        <i class="fa-solid fa-phone icon-phone"></i>
                        +84 338791316
                     </li>
                     <li class="email">
                        <i class="fa-solid fa-envelope icon-email"></i>
                        vovanthach2001@gmail.com
                     </li>
                  </ul>
               </div>
               <div class="column col-lg-4">
                  <h5>Dịch vụ khách hàng</h5>
                  <ul>
                     <li>
                        <a href="">Liên hệ với tôi</a>
                     </li>
                     <li>
                        <a href="">Về tôi</a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </footer>
</template>

<script>
export default {};
</script>

<style scoped>
#footer {
   display: block;
}
.first-footer {
   background-color: #f3f3f3;
   color: #444;
   padding: 20px 0px 15px 20px;
}
#footer h5 {
   font-size: 18px;
   color: #000;
   margin: 0 0 15px 0;
   padding: 0 0 7px 0;
   font-weight: normal;
}
#footer .contact ul {
   list-style: none;
   padding: 0;
}
#footer .contact ul li {
   color: #444;
   text-decoration: none;
   display: block;
   padding: 3px 0;
   line-height: 20px;
   font-size: 14px;
}
#footer .icon-contact {
   margin-right: 5px;
   font-size: 16px;
}
#footer .contact ul li + li {
   margin-top: 12px;
}
#footer .column ul {
   list-style: none;
   padding: 0;
}
#footer .column ul li a {
   color: #888;
   text-decoration: none;
   line-height: 18px;
   font-size: 15px;
}
#footer .column ul li a:hover {
   text-decoration: underline 1px #3e7cb4;
   color: #3e7cb4;
}
</style>
