import { createStore } from 'vuex';

const store = createStore({
    state () {
        return {
            count: 0,
            local: '',
        }
    },
    getters: {
        COUNT: state => {
            return state.count
        },
        LOCAL: state => {
            return state.local
        }
    },
    mutations: {
        INCREMENT (state, payload) {
            state.count++
        },
        SET_LOCAL (state, payload) {
            state.local = payload;
        },
    },
    actions: {
        LOAD_LOCAL: async (context, payload) => {
            let local =  await store.$ionicStorage.get('local');

            context.commit('SET_LOCAL', local)
        },
        SAVE_LOCAL: async (context, payload) => {
            context.commit('SET_LOCAL', payload)

            console.log(store.$ionicStorage);

            await store.$ionicStorage.set('local', payload)
        },
    }
});

export default store;