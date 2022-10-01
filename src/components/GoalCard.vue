<template>
  <v-card class="mt-4 mb-4">
    <div v-if="!editing">
      <v-row class="justify-space-between">
        <v-col
            cols="8"
        >
          <v-card-title>
            {{ goalTitle }}
          </v-card-title>
          <v-card-subtitle>
            {{ goalDescription }}
          </v-card-subtitle>
        </v-col>
        <v-col
            class="text-right"
            cols="4"
        >
          <v-btn
              @click="editGoal"
              elevation="0"
              class="transparent pa-1"
          >
            <v-icon>
              mdi-pencil
            </v-icon>
          </v-btn>
          <v-btn
              @click="removeGoal"
              elevation="0"
              class="transparent pa-1 mr-2"
          >
            <v-icon>
              mdi-close
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>


    </div>

    <div v-else class="pa-4">
      <v-form
          ref="form"
          lazy-validation
      >
        <v-text-field
            v-model="goalTitle"
            label="Goal Title"
            required
        ></v-text-field>

        <v-text-field
            v-model="goalDescription"
            label="Description"
            required
        ></v-text-field>

        <v-btn
            :disabled="!validInput"
            :loading="loading"
            color="success"
            class="mr-4"
            @click="updateGoal"
        >
          Update Goal
        </v-btn>
      </v-form>
    </div>
  </v-card>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {GET_GOALS} from "@/store/get-types";
import {REMOVE_GOAL, UPDATE_GOAL} from "@/store/action-types";

export default {
  name: 'GoalCard',

  props: {
    goalIndex: {
      type: Number,
      required: true
    }
  },

  data () {
    return {
      editing: false,
      goal: {},
      goalTitle: '',
      goalDescription: '',
      loading: false
    }
  },

  computed: {
    ...mapGetters({
      goals: GET_GOALS
    }),
    validInput () {
      return this.goalTitle && this.goalDescription
    },
  },

  mounted () {
    this.populateGoal()
  },

  methods: {
    ...mapActions({
      actionUpdateGoal: UPDATE_GOAL,
      actionRemoveGoal: REMOVE_GOAL
    }),
    editGoal () {
      this.editing = true
    },
    updateGoal () {
      this.loading = true
      const goal = {
        title: this.goalTitle,
        description: this.goalDescription
      }
      this.actionUpdateGoal(this.goalIndex, goal)
      this.editing = false
      this.loading = false
    },
    removeGoal () {
      this.loading = true
      this.actionRemoveGoal(this.goalIndex)
      this.editing = false
      this.loading = false
    },
    populateGoal () {
      this.goal = this.goals.at(this.goalIndex)
      this.goalTitle = this.goal.title
      this.goalDescription = this.goal.description
    }
  }
}
</script>

<style lang="scss" scoped>
.v-icon {
  border: none
}
.v-btn {
  min-width: 30px !important;
}
</style>

