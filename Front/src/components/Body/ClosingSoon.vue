<template>

      <v-row
        class="ma-0 pa-0 whole"
        dense
        align="center"
        style="background-color:transparent"
      >
        <v-card
          color="transparent"
          class="mb-3 pa-0 font-weight-black"
          style="height:20px"
          flat
        >
            <div
              class="ma-0 ml-1 pa-0"
              style="font-size:25px;color:#ECEFF1;transform:scale(.7);transform-origen:left top"
            >
              ACTIVE BETS
            </div>
        </v-card>
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



  .gradient-border
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
      background: linear-gradient(60deg, #455A64 20%, rgb(39,205,122), rgb(39,205,122), #455A64 80%)
      border-radius: 2px
      z-index: -1
      animation: animatedgradient 3s ease  infinite
      background-size: 1000% 1000%

  @keyframes animatedgradient
    0%
      background-position: 5% 50%
    100%
      background-position: 95% 50%


      
</style>
