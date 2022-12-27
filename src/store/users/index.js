import axios from "axios";

const AutoComplete = {
  state: {
    users: [],
    selectUser: []
  },
  getters: {
    getUsers: (state) => state.users,
    getSelectUser: (state) => state.selectUser,
  },
  mutations: {
    SET_USERS: (state, users) => {
      state.users = users
    },
    SELECT_USERS: (state, users) => {
      state.selectUser.push(users)
      state.users = state.users.filter((item) => item.name != users.name)
    },
    DELETE_USERS: (state, users) => {
      state.users.push(users)
      state.selectUser = state.selectUser.filter((item) => item.id != users.id)
    }
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        const data = await axios.get("https://jsonplaceholder.typicode.com/users");
        commit("SET_USERS", data.data);
      } catch (error) {
        alert(error);
      }
    },
    selectUsers({commit}, users) {
      commit("SELECT_USERS", users);
    },
    deleteUsers({commit}, users) {
      commit("DELETE_USERS", users);
    }
  },
};
export default AutoComplete;
