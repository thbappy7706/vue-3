<template>
  <div>
    <h1>Todos</h1>
    <h2>Total Books : {{totalBook}}</h2>
    <input v-model="newBook" type="text"> <button @click="addBook(newBook)" >Add</button>
    <ul>
      <li v-for="(book,index) in bookList" :key="index">
      {{book}} <button @click="removeBook(index)">delete</button>
      </li>
    </ul>
  </div>

</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Todo",
  data(){
    return{
    newBook: '',
    }
  },
  computed:{
    // without mapstate start

    // bookList()
    // {
    //   return this.$store.state.bookList
    // },

    // without mapstate end


    ...mapState({
      bookList: "bookList",
    }),
    totalBook()
    {
      return this.$store.getters.totalBook
    }
  },
  methods:{

    // without mapstate and action start

    // addBook(){
    //   // console.log(this.newBook)
    //   this.$store.dispatch("addBook",this.newBook)
    // },
    // removeBook(index){
    //   this.$store.dispatch("removeBook",index)
    // }

    // without mapstate and action end


    ...mapActions({
      removeBook : "removeBook",
      addBook: "addBook"

    }),
  }
}
</script>

<style scoped>

</style>