<template>
  <div>
      <v-container>
          <v-row justify="center">
              <v-dialog
              v-model="dialog"
              persistent
              max-width="290"
          >
          <v-card>
              <v-container fluid>
                  <v-row justify="center">
                      <v-col cols="4">
                          <h4>{{returnFirstTeam.name}}</h4>
                          <h6>(H)</h6>
                          <br>
                          <h2 style="padding-left:10px">{{displayTeamOneScorer.length}}</h2>
                          <br>
                          <h6 v-for="(s, index) in displayTeamOneScorer" :key="index">
                              {{s.scorer}} ({{s.time}})
                         </h6> 
                      </v-col>
                      
                      <v-col cols="2">
                          <h6 style="margin-left:-5px; color:red">{{timer}}</h6>
                      </v-col>
                      
                      <v-col cols="4">
                          <h4>{{returnSecondTeam.name}}</h4>
                          <h6>(A)</h6>
                          <br>
                          <h2 style="padding-left:10px">{{displayTeamTwoScorer.length}}</h2>
                          <br>
                          <h6 v-for="(s, index) in displayTeamTwoScorer" :key="index">
                              {{s.scorer}} ({{s.time}})
                          </h6>
                      </v-col>
                   </v-row>

                   <!-- match stats here -->

                   <v-row class="justify-center" v-if="timer=='Full time'">
                       <v-col cols="4">
                           <div style="">
                               <h6 style="padding-left:25px" v-for="(stat, index) in matchStats" :key="index">
                                   <br>{{stat.teamOne}}
                               </h6>
                           </div> 
                       </v-col>

                       <v-col cols="4">
                           <div>
                               <h6 v-for="(stat, index) in matchStats" :key="index">
                                   <br>{{stat.name}}<br>
                               </h6>
                           </div>
                       </v-col>

                       <v-col cols="4">
                           <div style="">
                               <h6 style="" v-for="(stat, index) in matchStats" :key="index">
                                   <br>{{stat.teamTwo}}<br>
                               </h6>
                           </div>
                       </v-col>
                   </v-row>
               </v-container>
               
               <v-card-actions>
                   <v-spacer></v-spacer>
                   <v-btn
                   color="green darken-1"
                   text
                   @click="resetGame"
                  >
                  Reset
                  </v-btn>
                  <v-btn
                  color="green darken-1"
                  text
                  @click="restartMatch"
                >
                Restart
                </v-btn>
              </v-card-actions>
         </v-card>
       </v-dialog>
     </v-row>
   </v-container>
  </div>
</template>

<script>

export default {
    data(){
        return{
            dialog:false,
            timer:0,
            interval:'',
            teamOneStats:[],
            teamTwoStats:[],
            displayTeamOneScorer:[],
            displayTeamTwoScorer:[],
            matchStats:[]
        }
    },
    beforeMount(){
        this.fullTime=this.random(91, 98)
    },
    computed:{
        returnFirstTeam(){
            return this.$store.getters.getFirstTeam
        },
        returnSecondTeam(){
            return this.$store.getters.getSecondTeam
        },
        returnShowCounter(){
            return this.$store.getters.getCounter
        },

    },
    methods:{
        resetGame(){
            this.dialog=false
            this.timer=0
            clearInterval(this.interval)
            this.$store.commit('setFirstTeam', {name:'MatchDay',squad:[],url:'premier.png'
            })
            this.$store.commit('setSecondTeam', {name:'MatchDay',squad:[],url:'premier.png'
            })
            this.teamOneStats=[]
            this.teamTwoStats=[]
            this.displayTeamOneScorer=[]
            this.displayTeamTwoScorer=[]
            this.$store.commit('setTeamsControl', -1)
        },
        random(min, max){
            let ran=Math.floor(min + Math.random()*(max+ 1 - (min)))
            return ran
        },
        fullStats(){
            let possession=this.random(34, 60)
            let stats=[]
            // shots 
            stats.push({
                teamOne:this.random(8, 12),
                teamTwo:this.random(8, 12),
                name:'Shots'
            })
            // shots on target.
            stats.push({
                teamOne:this.random(4, 7),
                teamTwo:this.random(4, 7),
                name:'On target'
            })
            // shots 
            stats.push({
                teamOne:possession + '%',
                teamTwo:100-possession + '%',
                name:'Possession'
            })
            // fouls 
            stats.push({
                teamOne:this.random(8, 20),
                teamTwo:this.random(8, 20),
                name:'Fouls'
            })
            // Yellow Cards 
            stats.push({
                teamOne:this.random(0, 4),
                teamTwo:this.random(0, 4),
                name:'Yellow Cards'
            })
            // Red Cards 
            stats.push({
                teamOne:this.random(0, 1),
                teamTwo:this.random(0, 1),
                name:'Red Cards'
            })
            // Offsides 
            stats.push({
                teamOne:this.random(1, 10),
                teamTwo:this.random(1, 10),
                name:'Offsides'
            })
            // Corners 
            stats.push({
                teamOne:this.random(1, 10),
                teamTwo:this.random(1, 14),
                name:'Corners'
            })
            this.matchStats=stats
        },
        startMatch(){
            this.fullStats()
            this.generateGameStats()
            this.interval=setInterval(() => {
                this.timer++
            }, 1000)
        },
        restartMatch(){
            this.timer=0
            clearInterval(this.interval)
            this.fullTime=this.random(91, 98)
            this.teamOneStats=[]
            this.teamTwoStats=[]
            this.displayTeamOneScorer=[]
            this.displayTeamTwoScorer=[]
            this.startMatch() 
            this.generateGameStats() 
        },
        generateGameStats(){
            let firstTeamStats=[]
            let secondTeamStats=[]
            let firstTeamScorers=this.returnFirstTeam.scorers
            let secondTeamScorers=this.returnSecondTeam.scorers
            let firstTeamScore=this.random(0, 5)
            let secondTeamScore=this.random(0, 5)
            // first team
            for(let i=0; i<firstTeamScore; i++){
                firstTeamStats.push({
                    time:this.random(2, this.fullTime),
                    scorer:firstTeamScorers[this.random(0, 5)]
                })
            }
            // second team
            for(let i=0; i<secondTeamScore; i++){
                secondTeamStats.push({
                    time:this.random(2, this.fullTime),
                    scorer:secondTeamScorers[this.random(0, 5)]
                })
            }
            this.teamOneStats=firstTeamStats
            this.teamTwoStats=secondTeamStats
        }
    },
    watch:{
        timer(value){
            this.teamOneStats.filter((e)=>{
                if(value==e.time){
                    this.displayTeamOneScorer.push(e)
                    return e
                }
            })
            this.teamTwoStats.filter((e)=>{
                if(value==e.time){
                    this.displayTeamTwoScorer.push(e)
                    return e
                }
            })
            if(value==this.fullTime){
                clearInterval(this.interval)
                this.timer='Full time'
            }
        },
        returnShowCounter(value){
            if(value==false){
                this.dialog=true
                this.startMatch();
            }
        }
    }
}
</script>

<style scoped>

</style>