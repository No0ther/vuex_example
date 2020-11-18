// define app store action name
export const ACTION_APP_INCREMENT = 'AppActionIncrement';
export const ACTION_APP_DECREAMENT = 'AppActionDecrement';

// define app store mutations name
export const INCREMENT_VALUE = 'IncrementValue';
export const DECREAMENT_VALUE = 'DecrementValue';

// init app state
const state = {
    counter: 0,
}

const getters = {
    getCouter(state) {
        return state.counter;
    }
}

// app store actions
const actions = {
    [ACTION_APP_INCREMENT] (context) {
        context.commit(INCREMENT_VALUE)
    },

    [ACTION_APP_DECREAMENT] (context) {
        context.commit(DECREAMENT_VALUE)
    }
}

// app store mutation
const mutations = {
    [INCREMENT_VALUE] (state) {
        state.counter += 1;
        console.log('New counter value: ' + state.counter);
    },
    [DECREAMENT_VALUE] (state) {
        state.counter -= 1;
        console.log("New state couter value: " + state.counter);
    }
}

export default {
    state,
    actions,
    mutations,
    getters
  }