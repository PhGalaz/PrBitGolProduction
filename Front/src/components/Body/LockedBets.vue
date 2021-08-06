<template>

      <v-row
        class="ma-0 pa-0 whole gradient-border1"
        dense
        align="center"
      >
        <v-card
          color="transparent"
          class="mb-2 pa-0 font-weight-black"
          style="height: 20px"
          flat
        >
            <div
              class="ma-0 ml-1 mx-5 pa-0"
              style="font-size:22px;color:#37474F;transform:scale(.7);transform-origen:left top"
            >
              LOCKED BETS
              <v-icon
                color="#37474F"
                class="ml-3 mb-1"
              >mdi-lock</v-icon>
            </div>
        </v-card>

        <v-row
          class="ma-0 mt-1 mx-1 pa-0 overflow-y-auto overflow-x-hidden"
          style="width:100%;height:125px;background-color:rgb(39,205,122);border-radius:3px"

        >
          <v-list
            class="ma-0 mt-2 mb-3 pa-0"
            width="100%"
            color="transparent"
            align="center"

            dense
          >

            <v-list-item
              class="ma-0 mt-1 pa-0"
              style="background:#455A64;border-radius:45px 3px 3px 45px;width:90%"
            >
              <v-avatar
                class="ma-1 pa-0"
                size="35"
              >
                <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                >
              </v-avatar>
            </v-list-item>

            <v-list-item
              class="ma-0 mt-1 pa-0 rigth"
              style="background:#455A64;border-radius:3px 45px 45px 3px;width:90%"
            >
              <v-spacer></v-spacer>
              <v-avatar
                class="ma-1 pa-0"
                size="35"
              >
                <img
                  src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                  alt="John"
                >
              </v-avatar>
            </v-list-item>

          </v-list>
        </v-row>
      </v-row>


</template>









<script>

</script>









<style lang="sass" scoped>
  ::-webkit-scrollbar
    border-radius: 0 3px 3px 0
    background: #37474F
    width: 8px
  ::-webkit-scrollbar-thumb
    background-color: #CFD8DC
    border-radius: 3px

  .whole
    background-color: #455A64
    transform: scale(1)
    transform-origin: left top

  .v-list--dense
    :hover
      background: #455A64



  .gradient-border1
    --borderWidth:2px
    background: #455A64
    position: relative
    border-radius: 2px

    &:after
      content: ''
      position: absolute
      top: calc(-1 * var(--borderWidth))
      left: calc(-1 * var(--borderWidth))
      height: calc(100% + var(--borderWidth) * 2)
      width: calc(100% + var(--borderWidth) * 2)
      background: linear-gradient(60deg, rgb(39,205,122), rgb(39,205,122))
      border-radius: 2px
      z-index: -1
      animation: animatedgradient 4s ease  infinite
      background-size: 1000% 1000%

  @keyframes animatedgradient
    0%
      background-position: 5% 50%
    100%
      background-position: 95% 50%
</style>
