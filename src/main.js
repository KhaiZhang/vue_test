import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueRouter from 'vue-router'
import index from './components/index.vue'
import home from './components/home.vue'
import ToDoList from './components/ToDoList.vue'
import Vant from 'vant';
Vue.use(Vant)

Vue.use(VueRouter)

Vue.use(Vuex)

const state = {
  selectTpye:'ALL',
  itemList:[]
}

const mutations= {
  addItem(state,inputItem){
    state.itemList.push(inputItem);
    let result = state.itemList.find(element => element === inputItem);
    console.log('content:'+result.content)
    console.log('currentContent:'+result.currentContent)
  },
  changeStatus(state,item){
    let result = state.itemList.find(element => element === item);
    result.isFinish = !result.isFinish;
    result.isEditable = !result.isEditable
  },
  changeList(state,selectTpye){
    state.selectTpye = selectTpye;
  },
  changeToEdit(state,item){
    let result = state.itemList.find(element => element === item);
    if(result.isEditable){
      result.isEdit =!result.isEdit;
      result.currentContent = result.content;
    } 
  },
  changeContent(state,item){
    // let result = state.itemList.find(element => element === payload.item);
    let result = state.itemList.find(element => element === item);
    console.log('content:'+result.content)
    console.log('currentContent:'+result.currentContent)
    result.content = result.currentContent;
    result.isEdit = !result.isEdit; 
  },
  getItemList(state,itemList){
    state.itemList.push(...itemList);
  }
}

const actions = {
  // getItemList({commit,state},itemList){
  //   commit("getItemList",itemList);
  // },
 getItemList({commit,state}){
    axios.get('http://localhost:3001/todos')
            .then(response => {
              let itemList = response.data;
              commit("getItemList",itemList);
          })  
    
  },
  addItem({commit},item){
    axios.post("http://localhost:3001/todos",item)
          .then(function (response) {
            console.log(response);
            commit("addItem",item)
          })
          .catch(function (error) {
            console.log(error);
          });

  }
}

const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/', name: 'index' , component: index },
    { path: '/ToDoList', name:'ToDoList',component: ToDoList },
    { path: '/home', name:'home' , component: home }
  ]
})


const store = new Vuex.Store({
  state,
  mutations,
  actions
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
