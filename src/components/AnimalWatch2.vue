<template>
    <div class="demo-box">
        <p>
            动物: <span>{{ info.name }}</span>
        </p>
        <p>
            数量: <span>{{ info.num }}</span>
        </p>
        <p>
            测试deep: <span>{{ a.b.c.d }}</span>
        </p>
        <div>
            <button @click="changeAnimal()">changeAnimal</button>
            <button @click="changeName()">changeName</button>
            <button @click="addNum()">+1数量</button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
const info = reactive({
    name: '狸花猫',
    num: 2
})
const a = reactive({
    b: {
        c: {
            d: 'hhh'
        }
    }
})

function changeName() {
    info.name += '~'
    a.b.c.d += '1'
}
function addNum() {
    info.num++
}
function changeAnimal() {
    Object.assign(info, {
        name: '大狗reactive',
        num: 3
    })
}
const stopWatch = watch(info, (newVal, oldVal) => {
    console.log('info-watch', newVal, oldVal)
})
watch(a, (newVal, oldVal) => {
    console.log('a-watch', newVal, oldVal)
})
</script>
<style scoped></style>
