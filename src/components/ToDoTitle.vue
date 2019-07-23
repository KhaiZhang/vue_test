<template>
  <div>
    <h2>{{title}}</h2>
    <p class="tips">{{subTitle}}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ToDoTitle',
  props: {
    title: String,
    subTitle :String
  },
  data(){
      return {
         
      }
  },
  methods:{
      
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
