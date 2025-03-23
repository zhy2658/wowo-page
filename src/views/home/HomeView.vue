<template>
  <div class="g-container">
    <h1>Hello Home!</h1>

    <el-row>
      <el-col :span="24">
        <el-button type="primary">
          <router-link to="/account/list">账户列表</router-link>
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
  import { ref, reactive, watch, toRef, toRefs } from 'vue'
</script>
<style scoped lang="scss"></style>
