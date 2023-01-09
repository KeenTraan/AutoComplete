import axios from "axios";
const AutoComplete = {
  state: {
    city: [],
  },
  getters: {
    getCity: (state) => state.city,
  },
  mutations: {
    SET_CITY: (state, city) => {
      state.city = city;
    }
  },
  actions: {
    async fetchCity({ commit }) {
      try {
        const data = await axios.get("https://provinces.open-api.vn/api/p/");
        commit("SET_CITY", data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
};
export default AutoComplete;
