<template>
  <v-card class="mt-4 mb-4">
    <div v-if="!editing">
      <v-card-title>
        {{ goalTitle }}
      </v-card-title>
      <v-card-subtitle>
        {{ goalDescription }}
      </v-card-subtitle>
      <v-btn @click="editGoal">
        <v-icon>
          mdi-pencil
        </v-icon>
      </v-btn>
    </div>

    <div v-else>
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
      goalDescription: this.goal.description
    }
  },

  computed: {
    validInput () {
      return this.goalTitle && this.goalDescription
    }
  },

  methods: {
    editGoal () {
      console.log(this.editing)
      this.editing = true
    },
    updateGoal () {
      this.editing = false
    },
  }
}
</script>
