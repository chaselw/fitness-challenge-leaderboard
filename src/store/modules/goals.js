import * as actionTypes from '@/store/action-types'
import * as getTypes from '@/store/get-types'
import * as mutationTypes from '@/store/mutation-types'
import Vue from "vue";
import {doc, getDoc} from "firebase/firestore";
import db from "@/FirebaseDb";

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
  [actionTypes.UPDATE_GOAL] (context, updatedGoal) {
    context.commit(mutationTypes.UPDATE_GOAL, updatedGoal)
  },
  [actionTypes.REMOVE_GOAL] (context, index) {
    context.commit(mutationTypes.REMOVE_GOAL, index)
  },
  async [actionTypes.SET_GOALS] (context, username) {
    const userGoalsDocRef = doc(db, 'goals', username);
    const docSnap = await getDoc(userGoalsDocRef);
    if (docSnap.exists()) {
      context.commit(mutationTypes.SET_GOALS, docSnap.data().goals)
    } else {
      console.log('Error setting goals for username: ', username);
    }
  },
}

const mutations = {
  [mutationTypes.ADD_GOAL] (state, goal) {
    state.goals.push(goal)
  },
  [mutationTypes.UPDATE_GOAL] (state, updatedGoal) {
    const goalIndex = state.goals.findIndex(goal => goal.id === updatedGoal.id)
    Vue.set(state.goals, goalIndex, updatedGoal)
  },
  [mutationTypes.REMOVE_GOAL] (state, index) {
    state.goals.splice(index,1)
  },
  [mutationTypes.SET_GOALS](state, userGoals) {
    state.goals = userGoals
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
