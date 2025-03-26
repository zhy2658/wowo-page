<template>
  <div class="navbar">
    <h1 class="logo">Logo</h1>
    <input type="checkbox" name="check" id="check" />
    <nav class="menu">
      <h1 class="menu-logo">Logo</h1>
      <div class="divider"></div>
      <a><router-link to="/">主页</router-link></a>
      <a><router-link to="/account/list">账号</router-link></a>
      <a><router-link to="/">服务</router-link></a>
      <a><router-link to="/">关于</router-link></a>
    </nav>
    <div class="user-form-group">
      <a class="login">
        <el-button @click="() => toggleDark()" class="shift-btn" circle>
          <el-icon>
            <Sunny v-if="isDark" class="sunny" />
            <Moon v-else class="moon" />
          </el-icon>
        </el-button>
      </a>
      <a class="signup">Sign up</a>
      <label for="check" class="btn-group">
        <el-icon class="show-btn"><Menu /></el-icon>
        <el-icon class="close-btn"><CloseBold /></el-icon>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useDark, useToggle, useColorMode } from '@vueuse/core'
  import { ref, onMounted, onUnmounted } from 'vue'
  const isDark = useDark()
  const toggleDark = useToggle(isDark)
</script>

<style scoped lang="scss">
  .shift-btn {
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
  }
  .dark .shift-btn {
    background-color: rgba(255, 255, 255, 0.7);
    color: #000;
  }
  .shift-btn:hover {
    background-color: $primary-color !important;
  }
  .navbar {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
    height: 80px;
    position: relative;
    z-index: 10;
    // padding: 0 30px;
    box-sizing: border-box;
  }
  .logo {
    // color: #fff;
  }
  .menu a {
    // color: #fff;
    text-decoration: none;
    font-weight: 600;
    font-size: 18px;
    padding: 8px 16px;
    transition: 300ms;
    border-radius: 99px;
    // outline: none;
  }
  .menu > a:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  .user-form-group a {
    // color: #fff;
    text-decoration: none;
    font-weight: 600;
    font-size: 18px;
  }
  .signup {
    border: rgba(255, 255, 255, 0.5) 2px solid;
    padding: 8px 16px;
    padding-left: 16px;
    border-radius: 99px;
    transition: 300ms;
    margin: 0 10px;
  }
  .signup:hover {
    background-color: white;
    color: black;
  }
  .menu .menu-logo {
    display: none;
  }
  #check {
    display: none;
  }
  .user-form-group .btn-group {
    display: none;
  }

  @media (max-width: $width-sm) {
    .menu {
      position: absolute;
      left: -100%;
      top: 0;
      display: flex;
      flex-direction: column;
      background-color: #0f172a;
      height: 100vh;
      width: 50%;
      padding: 0 20px;
      gap: 16px;
      color: #fff;
      transition: 300ms;
      box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
      z-index: 10;
    }
    .menu .menu-logo {
      margin-left: 16px;
      margin-top: 20px;
      display: block;
    }
    .divider {
      background-color: rgba(255, 255, 255, 0.1);
      width: 100%;
      height: 2px;
      margin: 10px 0;
    }
    .user-form-group {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .user-form-group .btn-group {
      display: block;
    }
    .show-btn,
    .close-btn {
      font-size: 30px;
      cursor: pointer;
      display: none;
      max-width: 10px;
      margin-top: 6px;
    }
    .show-btn {
      display: inline-block;
    }
    #check:checked ~ .user-form-group .show-btn {
      display: none;
    }
    .close-btn {
      display: none;
    }
    #check:checked ~ .user-form-group .close-btn {
      display: inline-block;
    }
    #check:checked ~ .menu {
      left: 0;
    }
  }
</style>
