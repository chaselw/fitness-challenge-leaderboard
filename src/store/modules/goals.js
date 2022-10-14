import * as actionTypes from '@/store/action-types'
import * as getTypes from '@/store/get-types'
import * as mutationTypes from '@/store/mutation-types'
import Vue from "vue";
import {setDoc, arrayUnion, doc, getDoc, arrayRemove, updateDoc} from "firebase/firestore";
import { db } from "@/FirebaseDb";

const state = {
  goals: []
}

const getters = {
  [getTypes.GET_GOALS]: state => state.goals
}

const actions = {
  async [actionTypes.ADD_GOAL] (context, { newGoal, username}) {
    await setDoc(doc(db, 'goals', username),
        { goals: arrayUnion(newGoal) },
        { merge: true }).then(() => {
          context.commit(mutationTypes.ADD_GOAL, newGoal)
        }).catch((error) => {
          console.log(error);
        })
  },
  async [actionTypes.UPDATE_GOAL] (context, { updatedGoal, username}) {
    const updatedGoals = context.state.goals.map(goal => {
      if (goal.id === updatedGoal.id) {
        return { ...goal,
          title: updatedGoal.title,
          description: updatedGoal.description
        }
      }
      return goal
    })
    await updateDoc(doc(db, 'goals', username), { goals: updatedGoals }).then(() => {
      context.commit(mutationTypes.UPDATE_GOAL, updatedGoal)
    }).catch((error) => {
      console.log(error);
    })
  },
  async [actionTypes.REMOVE_GOAL] (context, {goal, username}) {
    await updateDoc(doc(db, 'goals', username),
        { goals: arrayRemove(goal) }).then(() => {
          context.commit(mutationTypes.REMOVE_GOAL, goal.id)
        }).catch((error) => {
          console.log(error);
        })
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
  [mutationTypes.REMOVE_GOAL] (state, goalId) {
    const goalIndex = state.goals.findIndex(goal => goal.id === goalId)
    state.goals.splice(goalIndex,1)
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
