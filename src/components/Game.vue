<template>
  <v-container>

    <v-row class="text-center">
      <v-col cols="12">
        <v-row justify="center">
          <v-col cols="4">
            <div>
              <h5 style="width:80%" class="white black--text mb-3" v-for="(i, index) in returnFirstTeam.squad" :key="index">
                {{i}}
              </h5>
            </div>
          </v-col>

          <v-col cols="2">
            <h2 v-if="returnCounter" class="mt-10 white red--text">
              {{decreValue}}
            </h2>
          </v-col>
          
          <v-col cols="4">
            <div>
              <h5 class="white black--text mb-3"  v-for="(i, index) in returnSecondTeam.squad" :key="index">
                {{i}}
              </h5>
            </div>
          </v-col>

        </v-row>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      firstTeamScore:0,
      secondTeamScore:0,
      decreValue:7,
      interval:null
    }),
    computed:{           
      returnFirstTeam(){
        return this.$store.getters.getFirstTeam
      },
      returnSecondTeam(){
        return this.$store.getters.getSecondTeam
      },
      returnCounter(){
        return this.$store.getters.getCounter
      }
    },
    methods:{
      decrementCounter(){
        this.interval = setInterval(()=>{this.decreValue--}, 1000)
      }
    },
    watch:{
      decreValue(value){
        if(value==-1){
          clearInterval(this.interval);
          this.$store.commit('setCounter', false)
          this.decreValue=7
        }
      },
      returnFirstTeam(obj){
        this.firstLogo=obj.url;
      },
      returnSecondTeam(obj){
        this.secondLogo=obj.url
      },
      returnCounter(value){
        if(value)this.decrementCounter();
      }
    }
  }
</script>

<style scoped>

</style>