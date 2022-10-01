import * as actionTypes from '@/store/action-types'
import * as getTypes from '@/store/get-types'
import * as mutationTypes from '@/store/mutation-types'

const state = {
  goals: []
}

const getters = {
  [getTypes.GET_GOALS]: state => state.goals
}

const actions = {
  [actionTypes.ADD_GOAL] (context, goal) {
    context.commit(mutationTypes.ADD_GOAL, goal)
  }
}

const mutations = {
  [mutationTypes.ADD_GOAL] (state, goal) {
    state.goals.push(goal)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
