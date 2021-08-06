<template>
  <v-row
    style="background-color:yellow;height:20px;color:#546E7A;font-size:10px"
    class="font-weight-black ma-0"
    :class="{ 'd-none': !showResponsably }"
    align="center"
  >
    <v-spacer></v-spacer>

    <v-icon
    x-small
    color= "blue-grey darken-2"
    >
      mdi-comment-alert
    </v-icon>
    <p class="ma-0 ml-3">
      PLAY RESPONSABLY
    </p>

    <v-spacer></v-spacer>

    <v-btn
      x-small
      icon
      color= "blue-grey darken-2"
    >
      <v-icon>mdi-chevron-down</v-icon>
    </v-btn>
    <v-btn
      x-small
      icon
      color= "blue-grey darken-2"
      class="mr-5"
    >
      <v-icon
        @click="responsablyOut()"
      >mdi-close-circle</v-icon>
    </v-btn>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      showResponsably: true
    }),
    methods:{
      responsablyOut(){
        this.showResponsably = false
      }
    }
  }
</script>

<style lang="sass">

</style>
