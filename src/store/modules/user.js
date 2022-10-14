import * as getTypes from "@/store/get-types";
import * as actionTypes from "@/store/action-types";
import {auth} from "@/FirebaseDb";
import { createUserWithEmailAndPassword } from "firebase/auth";
import * as mutationTypes from "@/store/mutation-types";

const state = {
  user: null
}

const getters = {
  [getTypes.GET_USER]: state => state.user
}

const actions = {
  async [actionTypes.REGISTER_USER] (context, { email, password }) {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      context.commit(mutationTypes.SET_USER, userCredential.user)
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.error("there was an error registering the user: ", errorMessage)
    })
  }
}

const mutations = {
  [mutationTypes.SET_USER](state, user) {
    state.user = user
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
