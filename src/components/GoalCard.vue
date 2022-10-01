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
<!--          <v-btn-->
<!--              @click="removeGoal"-->
<!--              elevation="0"-->
<!--              class="transparent pa-1 mr-2"-->
<!--          >-->
<!--            <v-icon>-->
<!--              mdi-close-->
<!--            </v-icon>-->
<!--          </v-btn>-->
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
import {mapGetters} from "vuex";
import {GET_GOALS} from "@/store/get-types";

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
    }
  },

  computed: {
    ...mapGetters({
      goals: GET_GOALS
    }),
    validInput () {
      return this.goalTitle && this.goalDescription
    },
    goal () {
      return this.goals.at(this.goalIndex)
    }
  },

  methods: {
    editGoal () {
      this.editing = true
    },
    updateGoal () {
      this.editing = false
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

