import * as actionTypes from '@/store/action-types'
import * as getTypes from '@/store/get-types'
import * as mutationTypes from '@/store/mutation-types'
import Vue from "vue";

const state = {
  goals: []
}

const getters = {
  [getTypes.GET_GOALS]: state => state.goals
}

const actions = {
  [actionTypes.ADD_GOAL] (context, goal) {
    // TODO verify and send message if goal already exists
    context.commit(mutationTypes.ADD_GOAL, goal)
  },
  [actionTypes.UPDATE_GOAL] (context, index, goal) {
    context.commit(mutationTypes.UPDATE_GOAL, index, goal)
  },
  [actionTypes.REMOVE_GOAL] (context, index) {
    context.commit(mutationTypes.REMOVE_GOAL, index)
  } //TODO set goals on load
}

const mutations = {
  [mutationTypes.ADD_GOAL] (state, goal) {
    state.goals.push(goal)
  },
  [mutationTypes.UPDATE_GOAL] (state, index, goal) {
    Vue.set(state.goals, index, goal)
  },
  [mutationTypes.REMOVE_GOAL] (state, index) {
    state.goals.splice(index,1)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
