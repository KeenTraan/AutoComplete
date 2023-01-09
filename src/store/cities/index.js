import axios from "axios";
const AutoComplete = {
  state: {
    city: [],
    select: [],
  },
  getters: {
    getCity: (state) => state.city,
    getSelect: (state) => state.select
  },
  mutations: {
    SET_CITY: (state, city) => {
      state.city = city
    },
    SELECT_CITY(state, city) {
      state.select.push(city)
      state.city = state.city.filter((item) => item.name != city.name)
    },
    DELETE_CITY(state, city) {
      state.city.push(city)
      state.select = state.select.filter((item) => item.code != city.code)
    },
  },
  actions: {
    async fetchCity({ commit }) {
      try {
        const data = await axios.get("https://provinces.open-api.vn/api/p/");
        commit("SET_CITY", data.data);
      } catch (error) {
        alert(error);
      }
    },
    selectCity({commit}, city) {
      commit("SELECT_CITY", city);
    },
    deleteCity({commit}, city) {
      commit("DELETE_CITY", city);
    }
  },
};
export default AutoComplete;
