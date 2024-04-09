import { createWebHistory, createRouter } from "vue-router";
import Home from "./pages/Home.vue"
import SignIn from "./components/SignIn.vue"
import SignUp from "./components/SignUp.vue"
import Profile from "./pages/Profile.vue"

const routes = [

    { path: "/", component: Home },
    { path: "/sign-in", component: SignIn },
    { path: "/sign-up", component: SignUp },
    { path: "/profile/:id", component: Profile }


]




const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router