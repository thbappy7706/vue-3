app.component('product-display',{
    props:{
        premium:{
            type: Boolean,
            required: true,
        }
    },
template:
`    <div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <!-- image goes here -->
                <img :class="{ 'out-of-stock-img': !inStock }" v-bind:src="image">
            </div>
            <div class="product-info">
                <h1>{{ title }}</h1>
                <p v-if="inStock > 10">In Stock</p>
                <p v-else-if="inStock <= 10 && inStock > 0">Almost sold out</p>
                <p v-else>Out of Stock</p>
                <p>Shipping : {{shipping}}</p>
                <product-details :details="details"></product-details>

                <div v-for="(variant,index) in variants" :key="variant.id" @mouseover="updateVarient(index)" class="color-circle" :style="{backgroundColor:variant.color}"></div>
                <button class="button" :class="{disabledButton : !inStock}" v-on:click="addToCart" :disabled="!inStock">Add To Cart</button>
                <button class="button" @click="removeFromCart">Remove Item</button>
            </div>
        </div>
    </div>`,

    data() {
        return {
            product: 'Socks',
            brand: 'ThCart',
            selectedVarient : 0,
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            inventory: 100,
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: ['S', 'M', 'L', 'XL'],
            variants: [
                {id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity:50},
                {id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity:0},
                // {id: 2236, color: 'blue', image: './assets/images/socks_blue.jpg', quantity:1},
            ],
            cart: 0,
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVarient].id)
        },
        updateVarient(index) {
            this.selectedVarient = index;
            // console.log(index)
        },

        removeFromCart() {
            this.$emit('remove-from-cart', this.variants[this.selectedVarient].id)
        }
    },

    computed:{
        title(){
            return this.brand+ ' ' +this.product;
        },
        image(){
            return this.variants[this.selectedVarient].image
        },

        inStock(){
            return this.variants[this.selectedVarient].quantity
        },
        shipping(){
            if (this.premium){
                return 'Free'
            }
            return '30 TK'
        }
    }

})