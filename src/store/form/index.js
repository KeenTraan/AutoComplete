import axios from "axios";
const MultiStepForm = {
    namespaced: true,
    state: {
        cities: [],
    },
    getters: {
        getCities: (state) => state.cities,
        // getCities: (state) => console.log(state),

    },
    mutations: {
        SET_CITIES: (state, cities) => {
            state.cities = cities
        }
    },
    actions: {
        async fetchCities({ commit }) {
            const API = "https://provinces.open-api.vn/api/p/"
            try {
                const data = await axios.get(API);
                commit("SET_CITIES", data.data);
            } catch (error) {
                console.log(error);
            }
        },
    },
};
export default MultiStepForm;