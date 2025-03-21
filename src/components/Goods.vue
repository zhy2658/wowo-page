<template>
    <div class="demo-box">
        <p>
            姓名: <span>{{ name }}</span>
        </p>
        <p>
            价格: <span><input type="number" v-model="price" /></span>
        </p>
        <p>
            数量: <span><input type="number" v-model="num" /></span>
        </p>
        <p>
            金额: <span><input type="text" v-model="sum" disabled /></span>
        </p>
        <div>
            <button @click="addNum()">+1数量</button>
            <!-- <button @click="changeAge()">改成age</button> -->
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive, toRef, toRefs, computed } from 'vue'
const goodsInfo = reactive({
    name: '羽毛笔',
    price: 77,
    num: 4
})
let { name, price, num } = toRefs(goodsInfo)
let sum = computed({
    get: () => {
        return price.value * num.value
    },
    set: (val) => {
        num.value = val
        console.log(val)
    }
})
sum.value = 999
console.log(sum)
function addNum() {
    num.value += 1
    console.log(typeof num.value)
}
</script>
<style scoped></style>
