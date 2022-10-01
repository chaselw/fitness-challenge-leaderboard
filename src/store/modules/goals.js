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
    context.commit(mutationTypes.ADD_GOAL, goal)
  },
  [actionTypes.UPDATE_GOAL] (context, index, goal) {
    context.commit(mutationTypes.UPDATE_GOAL, index, goal)
  }
}

const mutations = {
  [mutationTypes.ADD_GOAL] (state, goal) {
    state.goals.push(goal)
  },
  [mutationTypes.UPDATE_GOAL] (state, index, goal) {
    Vue.set(state.goals, index, goal)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
