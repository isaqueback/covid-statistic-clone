<template>
  <v-app>
    <v-main class="px-3 py-8">
      <v-container>
        <v-row>
          <v-col>
            <Logo />
          </v-col>
        </v-row>

        <v-row class="mt-0">
          <v-col class="pt-0">
            <Info />
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
