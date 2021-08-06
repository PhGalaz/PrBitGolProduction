<template>

      <v-row
        class="ma-0 pa-0 whole gradient-border-bets"
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
              style="font-size:22px;color:#ECEFF1;transform:scale(.7);transform-origen:left top"
            >
              ACTIVE BETS
            </div>
        </v-card>
        <v-row
          class="ma-0 pa-0"
          style="width:100%;background-color:transparent;border-radius:3px"
        >


          <open-bets
            class="ma-1 mt-2 pa-0"
            style="width:100%;border-radius:2px"
          ></open-bets>
          </v-row>
          <locked-bets
            class="ma-1 mt-1 pa-0"
            style="width:100%;border-radius:2px"
          ></locked-bets>
        </v-row>
      </v-row>


</template>









<script>






  export default {
    name: 'Bets',
    components: {
      'open-bets': require('@/components/Body/OpenBets.vue').default,
      'closing-soon': require('@/components/Body/ClosingSoon.vue').default,
      'locked-bets': require('@/components/Body/LockedBets.vue').default

    },
    data: () => ({
    })
  }
</script>









<style lang="sass" scoped>
  ::-webkit-scrollbar
    border-radius: 0 4px 4px 0
    background: #37474F
    width: 8px
  ::-webkit-scrollbar-thumb
    background-color: #CFD8DC
    border-radius: 4px

  .whole
    background-color: #455A64
    transform: scale(1)
    transform-origin: left top

  .v-list--dense
    :hover
      background: #455A64



  .gradient-border-bets
    --borderWidth:3px
    background: #455A64
    position: relative
    border-radius: 3px

    &:after
      content: ''
      position: absolute
      top: calc(-1 * var(--borderWidth))
      left: calc(-1 * var(--borderWidth))
      height: calc(100% + var(--borderWidth) * 2)
      width: calc(100% + var(--borderWidth) * 2)
      background: linear-gradient(60deg, #455A64 20%, #455A64 80%)
      border-radius: 4px
      z-index: -1
      animation: animatedgradient 3s ease  infinite
      background-size: 1000% 1000%

  @keyframes animatedgradient
    0%
      background-position: 5% 50%
    100%
      background-position: 95% 50%
</style>
