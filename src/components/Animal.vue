<template>
    <div class="demo-box">
        <p>
            动物: <span>{{ info.name }}</span>
        </p>
        <p>
            数量: <span>{{ info.num }}</span>
        </p>
        <div>
            <button @click="changeAnimal()">changeAnimal</button>
            <button @click="changeName()">changeName</button>
            <button @click="addNum()">+1数量</button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
const info = ref({
    name: '狸花猫',
    num: 2
})

function changeName() {
    info.value.name += '~'
}
function addNum() {
    info.value.num++
}
function changeAnimal() {
    info.value = {
        name: '大狗',
        num: 3
    }
}
const stopWatch = watch(
    info,
    (newVal, oldVal) => {
        console.log('info-watch', newVal, oldVal)
    },
    { deep: true }
)
</script>
<style scoped></style>
