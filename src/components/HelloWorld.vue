<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" class="mb-16">
        <br> <br> <br>
      </v-col>

      <v-col cols="12" class="mt-16 purple">
        <v-row justify="center">
          <v-col cols="4">
            <h4 class="white--text">{{returnFirstTeam.name}}(H)</h4>
            <v-img
            alt="loading...."
            :src="firstLogo"
             class="my-3"
             contain
             height="80"
        />
        
          </v-col>
          <v-col cols="2">
            <h6 class="white--text">{{returnGameTime().t}} {{returnGameTime().d}}</h6>
            <h2 class="white--text mt-5">VS</h2>
          </v-col>
          <v-col cols="4">
            <h4 class="white--text">{{returnSecondTeam.name}}(A)</h4>
            <v-img
            alt="loading...."
            :src='secondLogo'
             class="my-3"
             contain
             height="80"
        />
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
      page:1,
      firstLogo:require('../assets/premier.png'),
      secondLogo:require('../assets/premier.png')
    }),
  
    computed:{           
      returnFirstTeam(){
        return this.$store.getters.getFirstTeam
      },
      returnSecondTeam(){
        return this.$store.getters.getSecondTeam
      },

    },
    methods:{
      returnGameTime(){
        let i=Math.floor(0 + Math.random()*(2+ 1 - (0)))
        let j=Math.floor(0 + Math.random()*(8+ 1 - (0)))
        let day=['Saturday', 'Sunday', 'Friday']
        let time=['13:00 hrs', '15:00 hrs','16:00 hrs', '17:00 hrs', '17:30 hrs', '18:00 hrs','19:00 hrs', '21:00 hrs', '22:00 hrs']
        return {
          d:day[i],
          t:time[j]
        }
      }
    },
    watch:{
      returnFirstTeam(obj){
        this.firstLogo=obj.url;
        this.firstLogo=require('../assets/' + this.firstLogo)
      },
      returnSecondTeam(obj){
        this.secondLogo=obj.url
        this.secondLogo=require('../assets/' + this.secondLogo)
      },
    }
  }
</script>

<style scoped>

</style>