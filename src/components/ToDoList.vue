<template>
  <div class="page_container">
  <div class="container">
    <div>
      <ToDoTitle :title = title  :subTitle = subTitle ></ToDoTitle>
      <inputItem></inputItem>
      <itemList></itemList>
      <selectItem></selectItem>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import inputItem from './inputItem.vue'
import itemList from './itemList.vue'
import selectItem from './selectItem.vue'
import ToDoTitle from './ToDoTitle.vue'
export default {
  name: 'ToDoList',
  props: {
    msg: String
  },
  components:{
    inputItem,
    itemList,
    selectItem,
    ToDoTitle
  },
  data() {
    return {
      title : 'Jquery To Do List',
      subTitle: 'Simple Todo List with adding and filter by diff status'
      // itemList:[],
      // inputValue:null,
      // selectTpye:'ALL',
      // currentContent:null
    }
  },
  methods :{
    // changeStatus:function(item){
    //     let result = this.itemList.find(element => element === item);
    //     result.isFinish = !result.isFinish;
    //     item.isEditable = !item.isEditable;
    // },
    // addItem:function(){
    //   this.itemList.push({isFinish:false,content:this.inputValue,isEdit:false,isEditable:true});
    //   this.inputValue=null;
    // },
    // changeList:function(){
    //   this.selectTpye=event.target.id;
    // },
    // show:function(list){
    //   if(this.selectTpye == 'ALL') return list;
    //   else if(this.selectTpye == 'Active') return list.filter(item => !item.isFinish);
    //   else return list.filter(item => item.isFinish);
    // },
    // changeToEdit:function(item){
    //   let result = this.itemList.find(element => element === item);
    //     if(result.isEditable){
    //       result.isEdit =!result.item;
    //       this.currentContent = result.content;
    //     }    
    // },
    // changeContent:function(item){
    //     let result = this.itemList.find(element => element === item);
    //     result.content =this.currentContent;
    //     result.isEdit = !result.isEdit;   
    // }
  },
    // mounted: function () {
    //     this.$nextTick(function () {
    //         axios.get('http://localhost:3001/todos')
    //         .then(response => {
    //           let itemList = response.data;
    //           this.$store.dispatch("getItemList",itemList);
    //       })   
        
    //   })
    //   }
    mounted: function () {
        this.$nextTick(function () {
          this.$store.dispatch("getItemList");
      })
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
