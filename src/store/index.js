import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    control:-1, 
    firstTeamInfo:{
      name:'MatchDay',
      squad:[]
    },
    secondTeamInfo:{
      name:'MatchDay',
      team:[]
    },
    errors:[],
    showCounter:false
  },

  getters:{
    getTeamsControl(state){
      return state.control
    },
    getFirstTeam(state){
      return state.firstTeamInfo;
    },
    getSecondTeam(state){
      return state.secondTeamInfo
    },
    getErrors(state){
      return state.errors
    },
    getCounter(state){
      return state.showCounter;
    }
  },
  mutations: {
    setTeamsControl(state, payload){
      state.control=payload
    },
    setCounter(state, payload){
      state.showCounter=payload
    },
    setFirstTeam(state, payload){
      state.firstTeamInfo=payload
    },
    setSecondTeam(state, payload){
      state.secondTeamInfo=payload
    },
    setErrors(state,payload){
      state.errors.push(payload);
    }
  },

  actions: {
  },

  modules: {
  }
})
