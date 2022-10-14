import Vue from 'vue'
import Vuex from 'vuex'
import goals from "@/store/modules/goals"
import user from "@/store/modules/user"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    goals
  }
})
