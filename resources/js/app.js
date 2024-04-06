
import './bootstrap';
import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from "vue-router";
import MainApp from './Layout/MainApp.vue';

import AdminLayout from "./Pages/admin/Layout.vue"
import AdminDashboard from "./Pages/admin/Dashboard.vue"
import AdminSetting from "./Pages/admin/Setting.vue"

import AdminUserLayout from "./Pages/admin/user/Layout.vue"
import AdminUserAll from "./Pages/admin/user/All.vue"
import AdminUserDetails from "./Pages/admin/user/Details.vue"

import AdminBlogLayout from "./Pages/admin/blog/Layout.vue"
import AdminBlogAll from "./Pages/admin/blog/All.vue"
import AdminBlogDetails from "./Pages/admin/blog/Details.vue"


import CustomerLayout from "./Pages/customer/Layout.vue"
import CustomerDashboard from "./Pages/customer/Dashboard.vue"
import CustomerSetting from "./Pages/customer/Setting.vue"

import CustomerUserLayout from "./Pages/customer/user/Layout.vue"
import CustomerUserAll from "./Pages/customer/user/All.vue"
import CustomerUserDetails from "./Pages/customer/user/Details.vue"

import CustomerBlogLayout from "./Pages/customer/blog/Layout.vue"
import CustomerBlogAll from "./Pages/customer/blog/All.vue"
import CustomerBlogDetails from "./Pages/customer/blog/Details.vue"

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/admin",
            component: AdminLayout,
            children: [
                {
                    path: 'dashboard',
                    component: AdminDashboard,
                },
                {
                    path: 'setting',
                    component: AdminSetting,
                },
                {
                    path: 'user',
                    component: AdminUserLayout,
                    children: [
                        {
                            path: 'all',
                            component: AdminUserAll,
                        },
                        {
                            path: 'details/:id',
                            component: AdminUserDetails,
                        },
                    ]
                },
                {
                    path: 'blog',
                    component: AdminBlogLayout,
                    children: [
                        {
                            path: 'all',
                            component: AdminBlogAll,
                        },
                        {
                            path: 'details/:id',
                            component: AdminBlogDetails,
                        },
                    ]
                },
            ]
        },
        {
            path: "/customer",
            component: CustomerLayout,
            children: [
                {
                    path: 'dashboard',
                    component: CustomerDashboard,
                },
                {
                    path: 'setting',
                    component: CustomerSetting,
                },
                {
                    path: 'user',
                    component: CustomerUserLayout,
                    children: [
                        {
                            path: 'all',
                            component: CustomerUserAll,
                        },
                        {
                            path: 'details/:id',
                            component: CustomerUserDetails,
                        },
                    ]
                },
                {
                    path: 'blog',
                    component: CustomerBlogLayout,
                    children: [
                        {
                            path: 'all',
                            component: CustomerBlogAll,
                        },
                        {
                            path: 'details/:id',
                            component: CustomerBlogDetails,
                        },
                    ]
                },
            ]
        },
    ],
});

router.beforeEach((to, from, next) => {
    to.href.length > 2 && window.sessionStorage.setItem("prevurl", to.href);
    next();
});

const app = createApp({});

app.component("MainApp", MainApp);
app.use(router);
app.mount('#app');
