<template>
    <div class="demo-box">
        <p>
            动物: <span>{{ info.name }}</span>
        </p>
        <p>
            年龄: <span>{{ info.age }}</span>
        </p>
        <p>
            车:
            <span>{{ info.car.c1 }}</span
            >&nbsp;&nbsp;&nbsp;
            <span>{{ info.car.c2 }}</span>
        </p>
        <div>
            <button @click="changeName()">修改名</button>
            <button @click="changeAge()">+1数量</button>
            <button @click="changeC1()">修改C1</button>
            <button @click="changeC2()">修改C2</button>
            <button @click="changeAnimal()">修改整个车</button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive, watch, toRef, toRefs } from 'vue'
const info = reactive({
    name: '狸花猫',
    age: 2,
    car: {
        c1: '奔驰',
        c2: '宝马'
    }
})
function changeName() {
    info.name += '~'
}
function changeAge() {
    info.age += 1
}
function changeC1() {
    info.car.c1 += '~'
}
function changeC2() {
    info.car.c2 += '~'
}
function changeAnimal() {
    info.car = {
        c1: '火车',
        c2: '飞机 '
    }
}
// const { name } = toRefs(info)
watch(
    () => info.car,
    (newVal) => {
        console.log(newVal)
    },
    { deep: true }
)
</script>
<style scoped></style>
