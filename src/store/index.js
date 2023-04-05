import { createStore } from 'vuex';

const store = createStore({
    state () {
        return {
            count: 0
        }
    },
    getters: {
        STATE: state => {
            return state.count
        }
    },
    mutations: {
        INCREMENT (state, payload) {
            state.count++
        }
    }
});

export default store;