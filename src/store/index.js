import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const now = new Date();
const store = new Vuex.Store({
    state: {
    	idx:0,
		detailId:0,
		detailTwo:0,
		detailThree:0,
    findId:0,
		id : 1
	
    }
  }
     
);

export default store;
