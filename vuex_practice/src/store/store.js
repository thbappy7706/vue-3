import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
     state:{
          bookList: [`Book 1`,`Book 2`,`Book 3`,`Book 4`]
     },

     getters:
         {
              totalBook(state){
                  return  state.bookList.length
              }
         },
     mutations:{
          ADD_BOOK(state,payload){
               //here payload means from action:adbook payload
               // console.log(payload)
               state.bookList.push(payload)
          },

          REMOVE_BOOK(state,index){
               state.bookList.splice(index,1)
          }
     },
     actions:{
          // payload means recieve data from todo_vue
          // addBook(context,payload){
          addBook({commit},payload){
               // context.commit("ADD_BOOK",payload)
               commit("ADD_BOOK",payload)
          },
          // removeBook(context,index){
          //      context.commit("REMOVE_BOOK",index)
          // }

          removeBook({commit},index){
               commit("REMOVE_BOOK",index)
          }
     }
});

export default store;