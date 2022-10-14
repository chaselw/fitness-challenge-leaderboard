<template>
  <div>
    <v-form
        ref="form"
        v-model="valid"
        lazy-validation
    >
      <v-text-field
          v-model="email"
          label="Email"
          :rules="emailRules"
          required
          outlined
      ></v-text-field>

      <v-text-field
          v-model="password"
          label="Password"
          :rules="passwordRules"
          required
          outlined
      ></v-text-field>

      <v-text-field
          v-model="confirmPassword"
          label="Confirm Password"
          :rules="[confirmRules, this.confirmPasswordRule]"
          required
          outlined
      ></v-text-field>

      <v-btn
          :disabled="!valid && !user"
          :loading="loading"
          color="success"
          class="mr-4"
          @click="registerNewUser"
      >
        Register
      </v-btn>
    </v-form>

  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {REGISTER_USER} from "@/store/action-types";
import {GET_USER} from "@/store/get-types";

export default {
  name: 'RegisterUser',

  data: () => {
    return {
      password: '',
      passwordRules: [
        value => !!value || 'Password is required',
        value => (value && value.length >= 8) || 'Password must be more than than 7 characters',
      ],
      confirmPassword: '',
      confirmRules: value => !!value || 'Password confirmation is required',
      email: '',
      emailRules: [
        value => !!value || 'E-mail is required',
        value => /.+@.+\..+/.test(value) || 'E-mail must be valid',
      ],
      valid: true,
      loading: false
    }
  },

  computed: {
    ...mapGetters({
      user: GET_USER
    }),
    confirmPasswordRule () {
      return (this.password === this.confirmPassword) || 'Passwords don\'t match'
    }
  },

  methods: {
    ...mapActions({
      registerUser: REGISTER_USER
    }),
    registerNewUser () {
      this.loading = true
      this.registerUser({email: this.email, password: this.password})
      this.loading = false
    },
  }

}
</script>
