import axios from "axios";
const MultiStepForm = {
    namespaced: true,
    state: {
        cities: [],
        jobPosition: [
            { id: 1, name: 'Software Developer(FE)' },
            { id: 2, name: 'Software Developer(BE)' },
            { id: 3, name: 'Tester' },
            { id: 4, name: 'Business Analyst' }
        ],
        selected: []
    },
    getters: {
        getCities: (state) => state.cities,
        getPosition: (state) => state.jobPosition,
        getSelected: (state) => state.selected
    },
    mutations: {
        SET_CITIES: (state, cities) => {
            state.cities = cities
        },
        SELECT_POSITION: (state, position) => {
            state.selected.push(position)
            state.jobPosition = state.position.filter(item => item.name != position.name)
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
        selected({ commit }, position) {
            commit("SELECT_POSITION", position)
        }
    },
};
export default MultiStepForm;