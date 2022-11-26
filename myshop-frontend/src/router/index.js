import { createWebHistory, createRouter } from "vue-router";
import Home from '../views/Home.vue'

const routes = [
    //Login
    {
        path: "/",
        name: "user.login",
        component: () => import('../components/Login.vue'),
    },
    //Register
    {
        path: "/user/register",
        name: "user.register",
        component: () => import('../components/Register.vue'),
    },
    //Admin
    {
        path: "/user/admin",
        name: "user.admin",
        component: () => import('../views/AdminManager.vue'),
    },
    //Home
    {
        path: "/home",
        name: "home",
        component: Home,
    },
    {
        path: "/product",
        name: "product.list",
        component: () => import('../views/products/ProductList.vue'),
    },
    {
        path: "/product/create",
        name: "product.create",
        component: () => import('../views/products/ProductForm.vue'),
    },
    {
        path: "/product/edit/:id",
        name: "product.edit",
        component: () => import('../views/products/ProductForm.vue'),
    },
    {
        path: "/user",
        name: "user.list",
        component: () => import('../views/users/UserList.vue'),
    },
    {
        path: "/:pathMatch(.*)*", //regular expression
        name: "error",
        component: () => import('../views/Error.vue'),
    },
    
    //Giỏ hàng
    {
        path: "/cart",
        name: "user.cart",
        component: () => import('../components/Cart.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;