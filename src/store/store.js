import Vue from 'vue'
import Vuex from 'vuex'
import goals from "@/store/modules/goals";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    goals
  }
})
