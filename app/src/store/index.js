import { createStore } from 'vuex'

const store = createStore({
    state:{
        view : "home"
    },
    getters: {
        getView(state){
            return state.view
        },
    },
    mutations:{
        setView(state, newView){
            state.view = newView;
        }
    }
});

export default store;