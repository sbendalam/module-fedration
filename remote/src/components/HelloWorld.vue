<script setup>
import { ref } from 'vue';
import CustomButtom from './custom/CustomButton.vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>


 
     <CustomButtom/>
   
 

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
