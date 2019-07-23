<template>
  <div>
      <button @click="navigateBack">back</button>
      <p>{{username}}</p>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: {
    item : Object
  },
  computed:{
      username(){
          return this.$route.params.name;
      }
  },
  methods:{
      navigateBack:function(){
          let con = confirm("请确认是否返回");
          if(con){
              this.$router.go(-1);
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
