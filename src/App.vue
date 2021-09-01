<template>
  <v-app>
    <v-main class="pa-8">
      <v-container>
        <v-row>
          <v-col class="d-block">
            <Logo/>
          </v-col>
        </v-row>

        <v-row>
          <v-col class="d-block mt-14">
            <Info/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Logo from "./components/Logo";
import Info from "./components/Info";

export default {
  name: "App",
  components: { Logo, Info },

  data: () => ({
    //
  }),
};
</script>

<style>
* {
  font-family: "Poppins", "sans-serif";
}
</style>
