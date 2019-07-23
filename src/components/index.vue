<template>
  <div>
      <p><input type="text" placeholder="please enter your name" v-model="inputName"></p>
      <button @click="navigateToTodoList">start using</button>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: {
    item : Object
  },
  data(){
      return {
          inputName:null
      }
  },
  methods:{
      navigateToTodoList:function(){
          let name = this.inputName;
          this.$router.push({name:'home',params:{name}});
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
