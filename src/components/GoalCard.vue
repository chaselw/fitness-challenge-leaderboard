<template>
  <v-card class="mt-4 mb-4">
    <div v-if="!editing">
      <v-row class="justify-space-between">
        <v-col
            cols="8"
        >
          <v-card-title>
            {{ goal.title }}
          </v-card-title>
          <v-card-subtitle>
            {{ goal.description }}
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
    goal: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      editing: false,
      goalTitle: this.goal.title,
      goalDescription: this.goal.description,
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
      const username = 'chase-test-user'
      const updatedGoal = {
        id: this.goal.id,
        title: this.goalTitle,
        description: this.goalDescription
      }
      this.actionUpdateGoal({updatedGoal: updatedGoal, username: username})
      this.editing = false
      this.loading = false
    },
    removeGoal () {
      this.loading = true
      const username = 'chase-test-user'
      this.actionRemoveGoal({goal: this.goal, username: username})
      this.loading = false
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

