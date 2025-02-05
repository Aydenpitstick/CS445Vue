<script setup>
import {ref} from 'vue';

let bread = ref(0);
let eggs = ref(0);
let milk = ref(0);

function breadIncrease(){
    bread.value++
    console.log(bread.value)
}

function breadDecrease(){
    bread.value--
    console.log(bread.value)
}
function eggsIncrease(){
    eggs.value++
    console.log(eggs.value)
}
function eggsDecrease(){
    eggs.value--
    console.log(eggs.value)
}
function milkIncrease(){
    milk.value++
    console.log(milk.value)
}
function milkDecrease(){
    milk.value--
    console.log(milk.value)
}
</script>

<template>
Bread <button @click="breadIncrease">+</button>/<button @click="breadDecrease">-</button>
{{ bread }}
<div>
</div>
Eggs <button @click="eggsIncrease">+</button>/<button @click="eggsDecrease">-</button>
 {{ eggs }}
 <div>
</div>
Milk <button @click="milkIncrease">+</button>/<button @click="milkDecrease">-</button>
{{ milk }}
<div>
</div>
</template>
