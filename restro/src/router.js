import { createWebHistory, createRouter } from 'vue-router'
import Home from "./components/Home.vue"
import SignUp from "./components/SignUp.vue"
import AddPage from "./components/AddPage.vue"
import UpdatePage from "./components/UpdatePage.vue"
import SignIn from "./components/SignIn.vue"


const routes = [
    { path: '/', component: Home },
    { path: '/sign-up', component: SignUp },
    { path: '/sign-in', component: SignIn },
    { path: '/add', component: AddPage },
    { path: '/update/:id', component: UpdatePage },
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router








