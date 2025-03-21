<template>
    <div class="demo-box">
        <h1>我是 car</h1>
        <p>
            颜色：<span>{{ car.color }}</span>
        </p>
        <p>
            价格：<span>{{ car.price }}</span>
        </p>
        <p>
            驾驶人：<span>{{ car.name }}</span>
        </p>
        <div>
            <p v-for="(item, index) in goodsArr" :key="index">
                {{ item.name }}: <span> {{ item.price }}</span>
            </p>
        </div>
        <div>
            <span v-for="(num, index) in arr" :key="index">
                {{ num }}
            </span>
        </div>
        <button @click="changeCar">修改车</button>
        <button @click="changePrice">修改价格</button>
        <button @click="changNumList">修改numList</button>
        <button @click="changArr">修改ARR</button>
    </div>
</template>

<script setup lang="ts" name="caraaa">
import { reactive, ref } from 'vue'
const car = ref({
    color: 'red',
    price: 1377,
    name: 'yousa'
})
const arr = ref([1, 2, 4, 66])
const goodsArr = reactive([
    { price: 11, name: '笔1' },
    { price: 12, name: '笔2' },
    { price: 13, name: '笔3' },
    { price: 14, name: '笔4' },
    { price: 15, name: '笔5' },
    { price: 16, name: '笔6' }
])
function changeCar() {
    car.value = { color: 'blue', name: '张三', price: 1377 }
}
function changePrice() {
    car.value.price++
    console.log(car.value.price)
}
function changNumList() {
    goodsArr.map((item) => {
        item.price++
        return item
    })
    console.log(goodsArr)
}
function changArr() {
    arr.value = arr.value.map((item) => {
        return (item += 1)
    })
    console.log(arr.value)
}
</script>
<style scoped></style>
