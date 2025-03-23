<template>
  <div class="g-container">
    <h1 style="text-align: Center">Hello Home!</h1>

    <el-row>
      <el-col :span="24">
        <el-button type="primary" style="margin: 0 auto; display: block; width: 50%; height: 50px">
          <router-link
            to="/account/list"
            style="text-decoration: none; color: #232323; font-size: 1.5rem"
          >
            账户列表
          </router-link>
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
  import { ref, reactive, watch, toRef, toRefs } from 'vue'
</script>
<style scoped lang="scss"></style>
