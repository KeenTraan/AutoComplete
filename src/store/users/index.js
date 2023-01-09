import axios from "axios";
const AutoComplete = {
  state: {
    Users: [],
  },
  getters: {
    getUsers: (state) => state.Users,
  },
  mutations: {
    SET_OPTIONS: (state, users) => {
      state.Users = users
    }
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        const data = await axios.get("https://jsonplaceholder.typicode.com/users");
        commit("SET_OPTIONS", data.data);
      } catch (error) {
        alert(error);
      }
    },
  },
};
export default AutoComplete;
