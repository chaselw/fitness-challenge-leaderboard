<template>
  <div>
    <h1>Welcome to the fitness challenge leaderboard!!</h1>
    <login-register />
  </div>
</template>

<script>
import LoginRegister from "@/components/LoginRegister";
export default {
  name: 'WelcomePage',
  components: {LoginRegister},
}
</script>
