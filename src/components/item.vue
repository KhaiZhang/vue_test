<template>
  <div>
    <input type="checkbox" @click="changeStatus(item)" v-bind:checked="item.isFinish" >
        <span v-if="!item.isEdit" v-bind:class="{itemIsFinish:item.isFinish}"  v-on:dblclick="changeToEdit(item)" >{{item.content}}</span>
        <input v-else  type="text" v-model="item.currentContent" v-on:keyup.enter="changeContent(item)" >
  </div>
</template>

<script>
export default {
  name: 'item',
  props: {
    item : Object
  },
  data(){
      return {
          currentContent:null,
          selectTpye:'ALL',
          itemList:[]
      }
  },
  methods:{
      changeStatus:function(item){
          this.$store.commit("changeStatus",item);
      }, 
      changeToEdit:function(item){
         this.$store.commit("changeToEdit",item);
         this.currentContent = item.content;
      },
      changeContent:function(item){
        //  this.$store.commit("changeContent",{item : item , currentContent : this.currentContent});
        this.$store.commit("changeContent",item);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
