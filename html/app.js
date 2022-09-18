new Vue({
   el: "#app",
   data:{
       title: '123',
       image: "https://www.gstatic.com/webp/gallery/1.jpg",
       alt : "This is a nice scene",
       link : "https://developers.google.com/speed/webp/gallery1",
       html: "<strong>Hello Tanvir Hossen</strong>",
       name: "Tanvir",
       age: 26,
       passion: "Programming"
   },
    methods:{
     getResult() {
         return this.name === "Tanvir" ? true : false;
     }
    }


});