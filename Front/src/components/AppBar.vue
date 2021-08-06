<template>
  <v-card class="card">
    <v-row class="bar">
      <v-col class="logo" cols="3">
        logo
      </v-col>
      <v-col class="left" cols="9">
      </v-col>
    </v-row>
  </v-card>
</template>


:class="{ 'navbar--hidden': !showNavbar }"



<script type="text/javascript">
  export default {
    data: () => ({
      show: false,
      showNavbar: true,
      lastScrollPosition: 0
    }),
    mounted () {
      window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
      onScroll () {
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
        if (currentScrollPosition < 0) {
          return
        }
        // Stop executing this function if the difference between
        // current scroll position and last scroll position is less than some offset
        if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
          return
        }
        this.showNavbar = currentScrollPosition < this.lastScrollPosition
        this.lastScrollPosition = currentScrollPosition
      }
    }
  }
</script>






<style lang="sass">

.card


.left
  background:
    color: pink

.app
  width: 100vw
  height: 500vh
  background: hsl(200, 50%, 90%)

.bar
  height: 60px
  width: 100vw
  background: red
  position: fixed
  transform: translate3d(0, 0, 0)
  transition: 0.1s all ease-out



.navbar.navbar--hidden
  box-shadow: none
  transform: translate3d(0, -100%, 0)

.logo
  background:
    color: black


</style>
