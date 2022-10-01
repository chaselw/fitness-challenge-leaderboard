<template>
  <div class="goals">
    <create-edit-goals />
  </div>
</template>

<script>

import CreateEditGoals from "@/components/CreateEditGoals";
export default {
  name: 'GoalsView',
  components: {CreateEditGoals},
}
</script>
