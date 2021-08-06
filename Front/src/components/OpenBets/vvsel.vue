<template>
  <v-list-item
    class="ma-0 pa-0"
    style="border-radius:45px"
  >

  <v-row
    id="capa6"
    class="ma-0 pa-0"
    style="border-radius:45px;max-width:319px;min-width:319px"
  >
    <v-row
      class="ma-1 pa-0"
      style="background-color:#455A64;border-radius:45px;max-width:48px;min-width:48px"
      justify="center"
    >
      <v-avatar
        class="ma-0 pa-0"
        size="48"
        style="transform:scale(.85);transform-origin:center"
      >

          <v-icon
            color="#CFD8DC"
            class="ma-0 pa-0"
            medium
          >mdi-lock-open-variant</v-icon>

      </v-avatar>


    </v-row>


    <v-row
      class="ma-0 pa-0"
      style="border-radius:45px"

    >


      <v-row
        id="capa7"
        class="ma-0 pa-0"
        style="border-radius:45px"
      >



        <v-row
          id="capa5"
          class="ma-0 pa-0"
          style="border-radius:45px;max-width:260px"
          align="center"
        >

          <v-spacer></v-spacer>
          <v-row
            class="ma-0 pa-0 mr-4 font-weight-bold text-right"
            style="color:#CFD8DC;font-size:17px;max-width:140px;min-width:140px;z-index:4;line-height:20px"
            align="center"
          >
            <v-spacer></v-spacer>
            {{ bet.fixture[0].homeTeam[0].team_name }}
          </v-row>
          <v-img
            class="ma-0 mr-3 pa-0"
            max-height="30"
            max-width="30"
            :src="bet.fixture[0].homeTeam[0].logo"
            style="z-index:4"
          ></v-img>
          <v-icon
            class="ma-0 pa-0"
            color= "#CFD8DC"
          >
            mdi-alpha-t-circle
          </v-icon>
          <v-spacer></v-spacer>


        </v-row>

      </v-row>



    </v-row>

  </v-row>









<v-row
  class="ma-0 mx-2 pa-0"
>
  <v-row
    class="ma-0 pa-0 font-weight-bold"
    style="width:100%"
    justify="center"
  >
  <v-row
    class="ma-0 mt-2 pa-0"
    width="20px"
    align="center"
    justify="center"
  >
    <v-icon
      class="ml-3 mt-1"
      color= "rgb(39,205,122)"
      small
    >
      mdi-close-box
    </v-icon>
    <p
      class="ma-0 ml-1 mr-3 mt-1 pa-0 font-weight-bold"
      style="color:rgb(39,205,122);font-size:14px;font-family:Orbitron;letter-spacing:1px"
    >{{ factor }}</p>
    <v-spacer></v-spacer>

    <v-img
      max-height="15"
      max-width="15"
      src="bch_b_small.png"
      class="ma-0 mt-1 pa-0"
    ></v-img>
    <p
      style="color:#CFD8DC;font-size:13px;font-family:Orbitron;letter-spacing:1px"
      class="ma-0 mb-1 mt-2 pa-0 ml-1 font-weight-black"
    >{{ ava_amount }}</p>

    <p
      style="color:#78909C;font-size:13px;font-family:Orbitron;letter-spacing:1px"
      class="ma-0 ml-2 mt-1  mr-16 pa-0 font-weight-bold"
    >${{ ava_usd_amount }}</p>
    <v-spacer></v-spacer>

  </v-row>
  </v-row>

  <v-progress-linear
    class="ma-0 pa-0"
    background-color="rgb(39,205,122)"
    color="#546E7A"
    :value="this.percent"
  ></v-progress-linear>

  <v-row
    class="ma-0 pa-0"
    style="width:100%"
    align="center"
  >
    <v-row
      class="ma-0 mb-3 mr-3 pa-0 font-weight-bold"
      align="center"
    >
        <p
          style="color:#CFD8DC;font-size:8px;font-family:Orbitron;letter-spacing:0px"
          class="ma-0 mt-1 ml-3 pa-0 font-weight-medium"
        >TAKEN</p>
        <p
          style="color:#CFD8DC;font-size:10px;font-family:Orbitron;letter-spacing:0px"
          class="ma-0 ml-1 mt-0 pa-0 font-weight-bold"
        >{{inv_percent}}%</p>


        <v-spacer></v-spacer>
        <p
          v-if="this.days > 0"
          style="color:#CFD8DC;font-size:10px;font-family:Orbitron;letter-spacing:0px"
          class="ma-0 pa-0 font-weight-black"
        >{{days}}</p>
        <p
          v-if="this.days > 0"
          style="color:#CFD8DC;font-size:8px;font-family:Orbitron;letter-spacing:0px"
          class="ma-0 ml-1 mt-1 pa-0 font-weight-medium"
        >days</p>
        <p
          v-if="this.hours > 0"
          style="color:#CFD8DC;font-size:10px;font-family:Orbitron;letter-spacing:0px"
          class="ma-0 ml-1 pa-0 font-weight-black"
        >{{hours}}</p>
        <p
          v-if="this.hours > 0"
          style="color:#CFD8DC;font-size:8px;font-family:Orbitron;letter-spacing:0px"
          class="ma-0 ml-1 mt-1 pa-0 font-weight-medium"
        >hrs</p>
        <p
          v-if="this.minutes > 0"
          style="color:#CFD8DC;font-size:10px;font-family:Orbitron;letter-spacing:0px"
          class="ma-0 ml-1 pa-0 font-weight-black"
        >{{minutes}}</p>
        <p
          v-if="this.minutes > 0"
          style="color:#CFD8DC;font-size:8px;font-family:Orbitron;letter-spacing:0px"
          class="ma-0 mt-1 pa-0 font-weight-medium"
        >min</p>
    </v-row>
  </v-row>



</v-row>




            <v-row
              id="capa3"
              class="ma-0 pa-0"
              style="border:0px solid rgb(39,205,122);max-width:225px;min-width:225px;border-radius:45px"
            >



              <v-row

                class="ma-0 pa-0"
                style="border:0px solid #78909C;border-radius:45px;max-width:160px"
              >
                <v-row
                  id="capa4"
                  class="ma-0 pa-0"
                  style="border-radius:45px;max-width:160px"
                  align="center"
                >

                  <v-img
                    class="ma-0 ml-3 pa-0"
                    max-height="30"
                    max-width="30"
                    :src="bet.fixture[0].awayTeam[0].logo"
                  ></v-img>


                  <v-row
                    class="ma-0 ml-3 pa-0 font-weight-bold text-left"
                    style="color:#CFD8DC;font-size:14px;max-width:100px;line-height:16px"
                    align="center"
                  >
                    {{ bet.fixture[0].awayTeam[0].team_name}}
                  </v-row>


                </v-row>


              </v-row>
              <v-spacer></v-spacer>
              <v-avatar
                class="ma-0 pa-0"
                size="50"
                style="border:0px solid #CFD8DC"
              >
                <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                >
              </v-avatar>
            </v-row>

          </v-list-item>


</template>

<script>
export default {
  props:["bet"],
  data() {
    return {
      now: Math.trunc((new Date()).getTime() / 1000)
    }
  },
  computed: {
      // a computed getter
      ava_amount: function () {
        var amount = this.bet.init_amount - this.bet.taken_amount;
        return amount / 100000000
      },
      ava_usd_amount: function () {
        var amount = this.ava_amount * 529;
        return amount.toFixed(2);
      },
      percent: function () {
        var amount = this.bet.taken_amount * 100 / this.bet.init_amount;
        return amount.toFixed(0);
      },
      inv_percent: function () {
        var amount = this.bet.taken_amount * 100 / this.bet.init_amount;
        return amount.toFixed(0);
      },
      factor: function () {
        var amount = (this.bet.factor * this.bet.init_amount) - this.bet.init_amount;
        var factor = ((amount + this.bet.init_amount) / amount)
        return factor.toFixed(2);
      },
      dateInMilliseconds() {
        var kickoff = this.bet.fixture[0].event_timestamp;
        return kickoff
      },
      seconds() {
        return (this.dateInMilliseconds - this.now) % 60;
      },
      minutes() {
        return Math.trunc((this.dateInMilliseconds - this.now) / 60) % 60;
      },
      hours() {
        return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60) % 24;
      },
      days() {
        return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60 / 24);
      }
    },
    mounted () {
      window.setInterval(() => {
          this.now = Math.trunc((new Date()).getTime() / 1000);
      },1000);
    }
  }
</script>

<style lang="sass">
  @import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap')

</style>
