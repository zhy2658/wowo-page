<template>
    <div class="demo-box">
        <div class="flex gap-2">
            <p>
                <el-tag type="primary">UID:{{ user.uid }}</el-tag>
            </p>
            <p>
                <el-tag type="success">用户:{{ user.name }}</el-tag>
            </p>
            <p>
                <el-tag type="info">密码: {{ user.password }}</el-tag>
            </p>
        </div>
        <h1>增加账号</h1>
        <el-form :model="form" label-width="auto" style="max-width: 600px">
            <el-form-item label="平台">
                <el-input v-model="form.platform" />
            </el-form-item>
            <el-form-item label="登录名">
                <el-input v-model="form.login_name" />
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.secret" />
            </el-form-item>
            <el-form-item label="类型">
                <el-select v-model="form.type" placeholder="类型">
                    <el-option label="用户账号" :value="1" />
                    <el-option label="密钥" :value="2" />
                    <el-option label="服务器主机" :value="3" />
                </el-select>
            </el-form-item>
            <el-form-item label="电话">
                <el-input v-model="form.tel" />
            </el-form-item>
            <el-form-item label="邮箱">
                <el-input v-model="form.email" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">新增</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive, watch, toRef, toRefs } from 'vue'
import { Calendar, Search } from '@element-plus/icons-vue'

import axios from 'axios'
const user = ref({
    name: null,
    password: null,
    uid: null
})

const form = reactive({
    platform: '',
    login_name: '',
    secret: '',
    type: 1,
    tel: '',
    email: ''
})

const onSubmit = () => {
    console.log('submit!')
}

axios.post('https://api.w0w0.one/msg', { token: '111' }).then((res) => {
    if (res.data) {
        user.value = res.data
    }
})
</script>
<style scoped></style>
