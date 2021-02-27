export default {
    state: {
        user: []
    },
    mutations: {
        updateUser(state, user) {
            state.user = user;
        }
    },
    actions: {
        async fetchUser(ctx) {
            const res = await  fetch ("https://jsonplaceholder.typicode.com/users?_limit=1");
            const user = await res.json();
            ctx.commit('updateUser', user)
        }
    },
    getters: {
        user(state) {
            return state.user
        }
    }
}