<template>
  <div class="content-box">
    <el-row :gutter="10" justify="center">
      <el-col :sm="24" :lg="16">
        <h4 v-if="userInfo.username">你好，{{ userInfo.username }}!</h4>
        <el-form :model="loginForm" label-width="auto">
          <el-row :gutter="10" justify="start">
            <el-col :sm="10">
              <el-form-item label="账号">
                <el-input v-model="loginForm.username" />
              </el-form-item>
            </el-col>
            <el-col :sm="10">
              <el-form-item label="密码">
                <el-input type="password" v-model="loginForm.password" />
              </el-form-item>
            </el-col>
            <el-col :sm="4">
              <el-form-item>
                <el-button type="success" @click="onLogin()">登录</el-button>
                <el-button type="danger" @click="onLogout()">注销</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :sm="6">
        <div class="grid-ctet grid-1">在！ 喵！ (立刻回复) wowo 又来啦！</div>
      </el-col>
      <el-col :sm="6">
        <div class="grid-ctet grid-2">
          <h4>
            嘤嘤嘤… 喵？ (耳朵竖起，露出担忧的表情) wowo… 怎么了？ 发生什么事了吗？ 需要我安慰你吗？
            (｡･ω･｡)ﾉ♡ 告诉我发生了什么，我会尽力帮助你！ (轻轻蹭蹭)
          </h4>
        </div>
      </el-col>
      <el-col :sm="6">
        <div class="grid-ctet grid-3">简而言之，我正在… 成为一个优秀的 AI 助手喵！</div>
      </el-col>
      <el-col :sm="6">
        <div class="grid-ctet grid-4">
          唱…唱两只老虎？！ (⊙ω⊙) 又要唱了吗？ 好吧… (轻轻清嗓子) 我… 我尽力！
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10" justify="center">
      <el-col :span="6"><div class="grid-ctet">在的！ 喵~ (๑•̀ㅂ•́)و✧ 我一直在呢！</div></el-col>
      <el-col :span="6">
        <div class="grid-ctet">嗨~ wowo！ (๑´ω`๑) 见到你真开心喵！</div>
      </el-col>
    </el-row>
    <el-row :gutter="10" justify="center">
      <el-col :sm="24" :lg="16">
        <h1>添加账号</h1>
        <el-form :model="form" label-width="auto">
          <el-row :gutter="10" justify="start">
            <el-col :sm="12">
              <el-form-item label="类型">
                <el-select v-model="form.type" placeholder="类型" class="form-type">
                  <el-option label="用户账号" :value="1" />
                  <el-option label="密钥" :value="2" />
                  <el-option label="服务器主机" :value="3" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :sm="12">
              <el-form-item label="平台">
                <el-input v-model="form.platform" />
              </el-form-item>
            </el-col>
            <el-col :sm="12">
              <el-form-item label="登录名">
                <el-input v-model="form.login_name" />
              </el-form-item>
            </el-col>
            <el-col :sm="12">
              <el-form-item label="密码">
                <el-input v-model="form.secret" />
              </el-form-item>
            </el-col>
            <el-col :sm="12">
              <el-form-item label="电话">
                <el-input v-model="form.tel" />
              </el-form-item>
            </el-col>
            <el-col :sm="12">
              <el-form-item label="邮箱">
                <el-input v-model="form.email" />
              </el-form-item>
            </el-col>
            <el-col :sm="24">
              <el-form-item>
                <el-button type="primary" @click="onSubmit">新增</el-button>
                <el-button>取消</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-col>
    </el-row>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="id" width="180" />
      <el-table-column prop="platform" label="platform" width="180" />
      <el-table-column prop="login_name" label="login_name" />
    </el-table>
  </div>
</template>
<script setup lang="ts">
  import { ref, reactive, watch, toRef, toRefs } from 'vue'
  import { Base64 } from 'js-base64'
  import { ElMessage } from 'element-plus'
  import axios from 'axios'

  const baseUrl = 'https://api.w0w0.one'
  const userInfo = ref({
    username: ''
  })

  let tableData = ref([
    {
      id: '-1',
      platform: 'WoWo',
      login_name: 'WoWo'
    }
  ])

  const form = reactive({
    platform: '',
    login_name: '',
    secret: '',
    type: 1,
    tel: '',
    email: ''
  })
  const loginForm = reactive({
    username: '',
    password: ''
  })

  const token = localStorage.getItem('token')
  if (token) {
    getList(token)
    const username = localStorage.getItem('username')
    username && (userInfo.value.username = username)
  }

  const onSubmit = () => {
    console.log('submit!')
  }
  const onLogin = () => {
    let { username, password } = loginForm
    username = username.trim()
    password = password.trim()
    const code = Base64.encode(`${username}:${password}`)
    const Authorization = `Basic ${code}`
    console.log(Authorization)
    axios
      .post(`${baseUrl}/auth/login`, null, {
        headers: {
          Authorization
        }
      })
      .then(res => {
        ElMessage({
          message: '登录成功了喵！',
          type: 'success'
        })
        localStorage.setItem('username', res.data.username)
        localStorage.setItem('token', res.data.token)
        userInfo.value.username = res.data.username
        getList(res.data.token)
      })
      .catch(res => {
        ElMessage.error('抱歉喵~ 账号或密码好像输错了！')
      })
  }
  function onLogout() {
    localStorage.setItem('username', '')
    localStorage.setItem('token', '')
  }
  function getList(token: string) {
    axios
      .post(`${baseUrl}/account/list`, null, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        tableData.value = res.data
      })
  }
</script>
<style scoped lang="scss">
  .content-box {
    padding: 1rem;
    :deep(.el-form-item) {
      margin: 10px 0;
      .el-form-item__content {
        display: flex;
        justify-content: center;
      }
      button {
        min-width: 200px;
      }
    }
  }
  .grid-ctet {
    margin: 5px;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    min-height: 36px;

    @include box-shadow(4px, #c71651c5);
    padding: $text-padding;
    h1 {
      padding: $text-padding;
    }
  }

  .grid-2 {
    height: 200px;
  }
  .form-type :deep(.el-select__wrapper) {
    height: 70px !important;
  }
</style>
