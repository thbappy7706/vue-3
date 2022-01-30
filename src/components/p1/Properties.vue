<template>
<h2>Full Name-{{firstName}} {{lastName}}</h2>
<h2>Computed Full Name- {{fullName}}</h2>
<h2>Computed Total- {{total}} Taka</h2>

  <button @click="items.push({id:4,name:`usb`,price: 40})">Push</button>
  <button @click="items.splice({})">xxx</button>

  <template v-for="item in items" :key="item.id">
    <h2 v-if="item.price > 300" >{{item.name}} -{{item.price}}</h2>

  </template>

  <div v-for="item in choosenItems" :key="item.id">
    <h2>{{item.name}} {{item.price}}</h2>

  </div>


</template>

<script>
export default {
  name: "Properties",
  data(){
    return{
      firstName:`Tanvir Hossen`,
      lastName:`Bappy`,
      items: [
        {
          id:1,
          name: `Mouse`,
          price: 400,
        },

        {
          id:2,
          name: `Speaker`,
          price: 500,
        },

        {
          id:3,
          name: `Headphone`,
          price: 300,
        },

        {
          id:4,
          name: `PenBox`,
          price: 200,
        },
        {
          id:5,
          name: `Usb Hub`,
          price: 150,
        },
      ]
    }
  },
  methods: {
  },


  computed:{
    fullName()
    {
      return `${this.firstName} ${this.lastName}`
    },

    total(){
      console.log(this.items)
      return this.items.reduce((total,curr)=>(total= total+curr.price),0)
    },
    choosenItems()
    {
      return this.items.filter(item=>item.price>150)
    }

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
</style>