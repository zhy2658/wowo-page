<template>
    <div class="demo-box">
        <p>
            姓名: <span>{{ name }}</span>
        </p>
        <p>
            年龄: <span>{{ age }}</span>
        </p>
        <p>
            性别: <span>{{ info.sex }}</span>
        </p>
        <div>
            <button @click="changeName()">改成名字</button>
            <button @click="changeAge()">改成age</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs, toRef } from 'vue'
const info = reactive({
    name: '张三',
    age: 15,
    sex: 16
})
let { name } = toRefs(info)
let age = toRef(info, 'age')
function changeName() {
    name.value += '~'
    console.log(name)
}
function changeAge() {
    age.value += 1
    console.log(age)
}
</script>

<style scoped></style>
