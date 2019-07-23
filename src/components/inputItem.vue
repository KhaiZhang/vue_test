<template>
  <div>
    <input type="text" id="inputNum" name="inputNum" v-model="inputValue">
    <button class="addbtn" @click="addItem()">Add</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'inputItem',
  props: {
    msg: String
  },
  data(){
      return {
          inputValue: null
      }
  },
  methods:{
      addItem:function(){
          let item={
              isFinish: false, 
              content: this.inputValue, 
              isEdit: false, 
              isEditable: true,
              currentContent: this.inputValue
          }
          this.$store.dispatch("addItem",item)
        this.inputValue = null;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
