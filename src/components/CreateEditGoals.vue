<template>
  <v-container>
    <h1 class="text-center">Welcome to the fitness challenge leaderboard!</h1>
    <v-row justify="center">
      <v-col
          cols="12"
          sm="10"
          md="8"
          lg="6"
      >
        <v-form
            ref="form"
            lazy-validation
        >
          <v-text-field
              v-model="newGoalTitle"
              label="New Goal Title"
              required
          ></v-text-field>

          <v-text-field
              v-model="newGoalDesc"
              class="pt-0"
              label="Description"
              required
          ></v-text-field>

          <v-btn
              :disabled="!validInput"
              color="success"
              class="mr-4"
              :loading="loading"
              @click="addNewGoal"
          >
            Create Goal
          </v-btn>
        </v-form>
        <h2 class="text-center">Your Goals</h2>
        <goal-card
            v-for="(goal) in goals"
            :key="goal.id"
            :goal="goal"
        />
      </v-col>
    </v-row>
    <v-snackbar
        v-model="snackbar"
        :timeout="timeout"
    >
      {{ snackbarText }}

      <template v-slot:action="{ attrs }">
        <v-btn
            color="blue"
            text
            v-bind="attrs"
            @click="snackbar = false"
        >
          Ok
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
  import GoalCard from "@/components/GoalCard";
  import {mapActions, mapGetters} from "vuex";
  import {ADD_GOAL} from "@/store/action-types";
  import {GET_GOALS} from "@/store/get-types";
  import generateUUID from "@/utilities/utilities";
  export default {
    name: 'CreateEditGoals',

    components: { GoalCard },

    data: () => ({
      loading: false,
      snackbar: false,
      snackbarText: '',
      newGoalTitle: '',
      newGoalDesc: '',
      timeout: 2000
    }),

    computed: {
      ...mapGetters({
        goals: GET_GOALS
      }),
      validInput () {
        return this.newGoalTitle && this.newGoalDesc
      }
    },

    methods: {
      ...mapActions({
        addGoal: ADD_GOAL
      }),
      async addNewGoal () {
        this.loading = true
        const username = 'chase-test-user'
        const newGoal = {
          id: generateUUID(),
          title: this.newGoalTitle,
          description: this.newGoalDesc
        }
        await this.addGoal({newGoal: newGoal, username: username})
        this.resetInputs()
        this.loading = false
      },
      resetInputs () {
        this.newGoalTitle = ''
        this.newGoalDesc = ''
      }
    }
  }
</script>
