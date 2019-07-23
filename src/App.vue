<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import ToDoList from './components/ToDoList.vue'
import './assets/myCss.css'
import axios from 'axios'
import index from './components/index.vue'

export default {
  name: 'app',
  components: {
    ToDoList,
    index
  },
  methods:{
  }
}
</script>

