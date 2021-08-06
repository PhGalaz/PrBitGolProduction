<template>
  <v-card id="apbar"
    color="transparent"
    style="border-radius:0 0 0 0"
    flat
  >

    <v-row no-gutters>
      <v-col
        style="background-color:#263238"
        cols="2"
      >
        <v-img
          max-height="70"
          max-width="70"
          src="bch_logo_light_small.png"
          class="logobchchico"
        ></v-img>
      </v-col>
      <v-col cols="10">
        <v-row
          id="botones"
          :class="{ 'd-none': !$store.state.showNavbar }"
          class="arriba ma-0"
          rounded-bl-xl
        >
        <v-spacer></v-spacer>

          <v-img
            max-height="19"
            max-width="19"
            src="bch_b_small.png"
            class="mt-1"
          ></v-img>

          <p
            class="ma-1"
            style="color:white;font-size:13px"
          >
            BCH
          </p>
          <p
            class="font-weight-black ma-1 mt-1"
            style="color:white;font-size:13px"
          >
            $370.00
          </p>
          <v-spacer></v-spacer>
          <v-btn
            style="text-transform: none;font-size:11px"
            text
            x-small
            dark
            class="mx-1 my-1"
          >
            ayuda
          </v-btn>
          <v-btn
            style="text-transform: none;font-size:11px"
            text
            x-small
            dark
            class="mx-1 my-1"
          >
            cancelar apuesta
          </v-btn>
          <v-btn
            style="text-transform: none;font-size:11px"
            text
            x-small
            dark
            class="mx-1 my-1 mr-5"
          >
            iniciar sesión
          </v-btn>
        </v-row>
        <v-row
          class="ma-0 pa-0"
          style="background-color:#263238; max-height:44px"
          no-gutters
        >
          <v-spacer style="height:10px"></v-spacer>
          <v-col class="ma-0" style="height:10px">
            <v-tabs
              inactive
              background-color="transparent"
              centered
              optional
              height="40px"
              class="mt-1"
              hide-slider
            >

            <v-tab
              id="tab1"
              style="color:white"
              @mouseover="$store.commit('mouseOver', 1)"
              @mouseleave="$store.commit('leaveOver', 1)"
            >Ligas</v-tab>

            <v-tab
              id="tab2"
              style="color:white"
              @mouseover="$store.commit('mouseOver', 2)"
              @mouseleave="$store.commit('leaveOver', 2)"
            >Campeonatos</v-tab>

            <v-tab
              id="tab3"
              style="color:white"
              @mouseover="$store.commit('mouseOver', 3)"
              @mouseleave="$store.commit('leaveOver', 3)"
            >Equipos</v-tab>

            <v-tab
              id="tab4"
              style="color:white"
              @mouseover="$store.commit('mouseOver', 4)"
              @mouseleave="$store.commit('leaveOver', 4)"
            >Países</v-tab>


            </v-tabs>
          </v-col style="height:10px">
          <v-spacer style="height:10px"></v-spacer>
          <v-text-field
            class="ma-0 mr-1 mt-2"
            solo
            dense
            append-icon="mdi-magnify"
            style="width:100px;transform:scale(0.75);transform-origin: left top;height:40px"
            flat
            clearable
          ></v-text-field>
          <v-app-bar-nav-icon
            class="mt-1 mr-5"
            dark
            @click="$store.commit('sDrawer')"
          ></v-app-bar-nav-icon>
        </v-row>
      </v-col>
    </v-row>


    <Campeonatos
      @mouseover.native="$store.commit('mouseOver', 2)"
      @mouseleave.native="$store.commit('leaveOver', 2)"
    ></Campeonatos>
    <Equipos
      @mouseover.native="$store.commit('mouseOver', 3)"
      @mouseleave.native="$store.commit('leaveOver', 3)"
    ></Equipos>
    <Paises
      @mouseover.native="$store.commit('mouseOver', 4)"
      @mouseleave.native="$store.commit('leaveOver', 4)"
    ></Paises>



  </v-card>
</template>

<script>
  export default {
    components: {
      'Ligas': require('@/components/MenuTabs/Ligas.vue').default,
      'Campeonatos': require('@/components/MenuTabs/Campeonatos.vue').default,
      'Equipos': require('@/components/MenuTabs/Equipos.vue').default,
      'Paises': require('@/components/MenuTabs/Paises.vue').default,
    },
    data: () => ({

    }),
  }
</script>

<style lang="sass">
  .v-btn:before
    opacity: 0 !important


  .v-ripple__container
    opacity: 0 !important

  #apbar
    width: 100vw
    position: fixed
    transition: 0.2s all ease-out
  #botones
    transition: 0.2s all ease-out
  .v-tab
    transition: 0.2s all ease-out
  #tab1:hover
    background-color: rgba(255,255,255,.05)
  #tab2:hover
    background-color: rgba(255,255,255,.05)
  #tab3:hover
    background-color: rgba(255,255,255,.05)
  #tab4:hover
    background-color: rgba(255,255,255,.05)
  .logobchchico
    position: absolute
    left: 50%
    top: 50%
  .ligas
    width: 100vw
    position: fixed
    height: 300px
    transition: 0.2s all ease-out
  .v-text-field
    width: 10px
    height: 300px
  .search
    transform: scale(0.8)
    transform-origin: left
  .arriba
    background-image: linear-gradient(90deg, #263238 10%, rgba(29,94,132) 50%)
</style>
