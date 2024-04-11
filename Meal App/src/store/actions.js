import instance from "../axiosInstance";


export async function searchMeals({ commit }, keyword) {
    const res = await instance.get(`/search.php?s=${keyword}`)

    commit("setSearchedMeals", res.data.meals)
}