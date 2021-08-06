<template>
  <v-row no-gutters>
    <v-col
      cols="3"
      :class="{ 'd-none': !$store.state.drawer }"
    >

    </v-col>
    <v-col :cols="$store.state.wholebody">
      <v-row
        class="todo"
        style="height=0px"
        :class="{ 'Ligas': $store.state.showligas }"
        no-gutters
      >

        <v-row
          no-gutters
          :class="{ 'd-none': !$store.state.showligas }"
          style="width:100vw"
        >
          <v-col
            v-for="continente in $store.state.continentes"  :key="continente.continente_id"
            cols="3"
          >
            <v-row
              class="justify-center mt-1 font-weight-black"
              align="center"
              style="font-size:12px;color:rgb(255,255,255,0.6);height:0px"
              no-gutters
            >
              {{ continente.name }}
            </v-row>

          </v-col>
        </v-row>

        <v-row
          :class="{ 'd-none': !$store.state.showligas }"
        >
          <v-col
            v-for="index in 4" :key="index"
            cols="3"
            class="ma-0"
          >
              <v-list
                dense
                dark
                style="background-color:rgb(0,0,0,0.3);max-height:300px;border-radius:2px"
                class="overflow-y-auto overflow-x-hidden mt-3 pt-0 pb-0"
              >

                <v-list-item-group
                  active-class='white--text'

                  style="min-width:200px"
                >
                  <v-list-item
                      v-for="liga in $store.state.leagues"
                      :key="liga.league_id"

                    >
                      <v-list-item-content>
                        <v-row
                          no-gutters
                          align="center"
                        >
                          <v-col
                            cols='2'
                            class=""
                          >
                            <v-img
                              max-height="40"
                              max-width="20"
                              :src="liga.logo"
                              class="ml-2"
                            ></v-img>
                          </v-col>
                          <v-col
                            justify="center"
                            style="font-size:14px;color:white"
                            class="ml-4 font-weight-medium"
                          >
                            {{ liga.name }}
                          </v-col>
                        </v-row>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>

                </v-list>
              </v-col>
        </v-row>

      </v-row>
    </v-col>
  </v-row>

</template>

<script>
  export default {
    data: () => ({
      selectedItem: null,

      }),


      methods: {
      }
    }
</script>

<style lang="sass" scoped>
  ::-webkit-scrollbar
    background: transparent
    border-radius: 7px
    width: 8px
  ::-webkit-scrollbar-thumb
    background-color: rgb(255,255,255,.2)
    border-radius: 20px



  .todo
    background-image: linear-gradient(45deg, rgba(128,208,199,.95) 0%, rgba(19,84,122,.95))
    height: 0px
  .Ligas
    background-image: linear-gradient(45deg, rgba(128,208,199,.95) 0%, rgba(19,84,122,.95))
    height: 335px


</style>
