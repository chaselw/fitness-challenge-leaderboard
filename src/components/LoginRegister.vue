<template>
  <div>
    <register-user />
    <login-user />
  </div>
</template>

<script>
import RegisterUser from "@/components/RegisterUser";
import LoginUser from "@/components/LoginUser";
export default {
  name: 'LoginRegister',
  components: {RegisterUser, LoginUser},
}
</script>
