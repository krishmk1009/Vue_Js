import { createWebHistory, createRouter } from "vue-router";
import Home from "../view/Home.vue"
import SearchByLetter from "../view/SearchByLetter.vue"
import SearchByIngredient from "../view/SearchByIngredient.vue"
import SearchByMeal from "../view/SearchByMeal.vue"
import Meal from "../view/Meal.vue"
const routes = [

    {
        path: "/",
        component: Home
    },
    {
        path: "/search-by-letter/",
        component: SearchByLetter
    },
    {
        path: "/search-by-ingredient/",
        component: SearchByIngredient
    },
    {
        path: "/search-by-meal/",
        component: SearchByMeal
    },
    {
        path: "/meal/:id",
        component: Meal
    },


]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router