import axios from "axios";
const AutoComplete = {
  state: {
    Options: [],
  },
  getters: {
    getOptions: (state) => state.Options,
  },
  mutations: {
    SET_OPTIONS: (state, options) => {
      state.Options = options
    }
  },
  actions: {
    async fetchOptions({ commit }) {
      try {
        const data = await axios.get("https://provinces.open-api.vn/api/p/");
        commit("SET_OPTIONS", data.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
};
export default AutoComplete;
