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
              @click="addNewRule"
          >
            Create Goal
          </v-btn>
        </v-form>
        <h2 class="text-center">Your Goals</h2>
        <goal-card
            v-for="(goal, index) in goals"
            :key="goal.title"
            :goalIndex="index"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import GoalCard from "@/components/GoalCard";
  import {mapActions, mapGetters} from "vuex";
  import {ADD_GOAL} from "@/store/action-types";
  import {GET_GOALS} from "@/store/get-types";
  export default {
    name: 'HelloWorld',

    components: { GoalCard },

    data: () => ({
      newGoalTitle: '',
      newGoalDesc: '',
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
      addNewRule () {
        const newGoal = {
          title: this.newGoalTitle,
          description: this.newGoalDesc
        }
        this.addGoal(newGoal)
        this.resetInputs()
      },
      resetInputs () {
        this.newGoalTitle = ''
        this.newGoalDesc = ''
      }
    }
  }
</script>
