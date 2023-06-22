<script>
export default {
  name: "VueButton",
  props: {
    propCartItems: Object,
    onCartChange: {
      type: Function,
      required: false,
    },
    onSubmit:{
      type: Function,
      required: false,
    }
  },
  mounted() {
    console.log(this.propCartItems)
    this.calculateCost();
  },
  data() {
    return {
      cartItems: this.propCartItems || [],
      totalCount: 0,
      totalCost: 0,
    };
  },
  watch: {
    cartItems: {
      handler: function (val, oldVal) {
        // call it in the context of your component object
        this.calculateCost();
        if (this?.onCartChange) {
          console.log(val)
          this?.onCartChange(val);
        }
      },
      deep: true,
    },
  },
  methods: {
    changePath(path) {
      this.cartItems = path;
    },
    removeItem(id){
      console.log(id)
      this.cartItems= this.cartItems.filter((item)=> item.id!=id)
    },
    onLocalSubmit(){
      console.log("vue submit")
      if (this?.onSubmit)this.onSubmit()
    },
    calculateCost() {
      let localCost = 0;
      this.cartItems?.forEach((item) => {
        localCost = localCost + item.price;
      });
      this.totalCost = localCost;
    },
  },
};
</script>
<template>
  <div
    class="w-[100%] h-[100vh] flex bg-slate-500 flex-col items-start justify-between"
  >
    <div class="h-[90%] w-full  overflow-auto p-1">
      <template v-if="cartItems.length>0">

        <template v-for="(item, index) in cartItems" :key="index">
          <div class="h-[20%] w-full border flex flex-col p-2 justify-between">
            <div class="flex w-full h-[80%] justify-between">
              <div class="w-[40%] flex flex-col items-start h-full justify-around text-left overflow-hidden">
                <div class="w-full">Name: {{ item.itemName }}</div>
                <div>price: {{ item.price }}/-</div>
              </div>
              <img class="aspect-square " v-bind:src="item.image" />
            </div>
            <div><button v-on:click="this.removeItem(item.id)" class="h-[60%] flex  items-center text-red-500">remove</button></div>
          </div>
          
        </template>
      </template>
      <template v-else>

       
          <div class="h-full w-full  flex items-center justify-center">
            no items in cart
          </div>
          
  
      </template>
    </div>
    <div
      class="h-[10%] w-full  flex flex-row items-center justify-between"
    >
      <div class="flex flex-col">
        <div>Items in Cart : {{ this.cartItems.length }}</div>
        <div>Total cost : {{ totalCost }}</div>
      </div>
      <div class="flex-1 flex items-center justify-center">
        <button class="text-white bg-black" v-on:click="onLocalSubmit()">Submit</button>
      </div>
    </div>
  </div>
</template>
