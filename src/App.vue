<template>
  <v-app>
    <v-app-bar
      color="deep-purple"
      dark
      fixed
    >
      <v-app-bar-nav-icon :disabled="disableToggle" @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Premier Leaugue</v-toolbar-title>
    </v-app-bar>

    <!-- team players list -->
    <v-container fluid>
      <v-row justify="center">
      <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
    <v-card>
      <v-card-title class="text-h5">
        <h6>{{team.name}} team squad</h6>
        </v-card-title>
        <v-card-text class="pt-2 pb-0" v-for="(p, index) in team.squad" :key="index">
          <h5>{{p}}</h5>
        <v-divider />
      </v-card-text>
      
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
        color="green darken-1"
            text
            @click="dialog=false"
          >
            cancel
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="refreshSquad"
          >
            refresh
          </v-btn>

          <v-btn
            color="green darken-1"
            text
            @click="selectTeam"
          >
            select
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
    </v-container>
  <!-- team players list end here -->

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <v-list
        nav
        dense
      >
      <h2 class="ml-16 mt-16 mb-16" >EPL Teams</h2>
        <v-list-item-group
        class="mt-12 mb-12"
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item 
          @click="createSquad(team)"
          v-for="(team, index) in teamInfo" :key="index"
          >
            <v-img 
            :src="require('../src/assets/'+team.url)"
            contain 
            height="50" 
        /> 
        </v-list-item>
    
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main class="mt-0">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import Team from '../src/mixins/Team'
export default {
  mixins:[Team],
  name: 'App',

  data: () => ({
    drawer: false,
    group: null,
    dialog:false, 
    team:'',
    currentFullTeam:''
    
  }),
  computed:{
    returnTeamsControl(){
      return this.$store.getters.getTeamsControl
    },
   returnFirstTeam(){
     return this.$store.getters.getFirstTeam.name; 
   },
   disableToggle(){
     if(this.returnTeamsControl==1){
       return true
     }
     else{
       return false
     }
   }
  },
  methods:{
    selectTeam(){
    
      let i = this.returnTeamsControl
      this.$store.commit('setTeamsControl', i+1)
      if(this.returnTeamsControl==0)this.$store.commit('setFirstTeam', this.team)

      if(this.returnTeamsControl==1){
        if(this.returnFirstTeam==this.team.name){
          this.returnTeamsControl=0
          this.$store.commit('setFirstTeam', this.team)
          this.$store.commit('setErrors', 'You selected the same team')
        }
        else{
          this.$store.commit('setSecondTeam', this.team)
          this.$store.commit('setCounter', true)
        }
      }   
      this.dialog=false
      
    },
    returnScorers(array){
      // 6 max scorers possible excluding goalkeeper
      let scorers=[]
      for(let i=0; i<6; i++){
        let j=Math.floor(3 + Math.random()*(10+ 1 - (3)))
        scorers[i]=array[j]
      }
      return scorers
    },
    createSquad(s){
      this.currentFullTeam=s
      let squadTeam=[]
      let goalkeepers=s.squad.goalie
      let defenders=s.squad.defenders
      let midfielders =s.squad.midfielders 
      let forwards=s.squad.forwards
      // getting one goalkeeper
      squadTeam.push(goalkeepers[0])
      // getting 4 defenders
      for(let i=0; i<4; i++) squadTeam.push(defenders[i])
      // getting 4 midfielders
      for(let i=0; i<4; i++) squadTeam.push(midfielders[i])
      // getting 4 forwards
      for(let i=0; i<2; i++) squadTeam.push(forwards[i])
      
      this.team={}
      this.team.name=s.name
      this.team.url=s.url
      this.team.squad=squadTeam
      this.team.scorers=this.returnScorers(squadTeam)
      
      this.dialog=true
    },
  
    refreshSquad(){
      let s=this.currentFullTeam
      let squadTeam=[]
      let goalkeepers=this.shuffleArray(s.squad.goalie)
      let defenders=this.shuffleArray(s.squad.defenders)
      let midfielders =this.shuffleArray(s.squad.midfielders) 
      let forwards=this.shuffleArray(s.squad.forwards)
      // getting one goalkeeper
      squadTeam.push(goalkeepers[0])
      // getting 4 defenders
      for(let i=0; i<4; i++) squadTeam.push(defenders[i])
      // getting 4 midfielders
      for(let i=0; i<4; i++) squadTeam.push(midfielders[i])
      // getting 4 forwards
      for(let i=0; i<2; i++) squadTeam.push(forwards[i])
      
      this.team={}
      this.team.name=s.name
      this.team.url=s.url
      this.team.squad=squadTeam
      this.team.scorers=this.returnScorers(squadTeam)
      
      this.dialog=true
    },                          
    shuffleArray(array){
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
      return array
    }
    
  },
  
};
</script>


<style scoped>
main{
  background-image: url('~@/assets/background.jpg');
  background-repeat: no-repeat;
  background-size: 100% ;
  background-size: cover;
}
</style>