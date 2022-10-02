<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <div id="header_logo"
           class="d-flex align-center"
      >
        <router-link to="/" class="router-link">
          <v-icon
              class="shrink mr-2"
              contain
              transition="scale-transition"
              width="40"
          >
            mdi-weight-lifter
          </v-icon>
          <v-icon
              class="shrink mt-1 hidden-sm-and-down"
              contain
              min-width="40"
              width="40"
          >
            mdi-trophy
          </v-icon>
        </router-link>
      </div>
    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
    >
      <v-list
          nav
          dense
      >
        <v-list-item-group
            v-model="group"
            active-class="deep-blue--text text--accent-4"
        >
          <router-link to="/" class="router-link">
            <v-list-item>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/user/goals" class="router-link">
            <v-list-item>
               <v-list-item-title>Goals</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/groups" class="router-link">
            <v-list-item>
              <v-list-item-title>Groups</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/leader-board" class="router-link">
            <v-list-item>
              <v-list-item-title>Leader Board</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group () {
      this.drawer = false
    },
  }
};
</script>

<style>
.router-link{
  text-decoration: none;
}
</style>
