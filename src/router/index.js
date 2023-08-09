import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import Kereta from "../views/Kereta.vue"
import product from "../views/Product.vue";
import SingleProduct from "../views/SingleProduct.vue"
import kategori from "../views/kategori.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/user",
        name: "User",
        component: User,
    },
    {
        path: "/kereta",
        name: "Kereta",
        component: Kereta,
    },
    {
        path: "/product",
        name: "Product",
        component: product,
    },
    {
        path: "/product/:id",
        name: "SingleProduct",
        component: SingleProduct,
    },
    {
        path: "/kategori",
        name: "kategori",
        component: kategori,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;