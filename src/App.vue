<template>
  <div class="app-content">
    <CustomHeader />

    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
  import CustomHeader from '@/components/header/CustomHeader.vue'
</script>

<style lang="scss">
  .app-content {
    // background-image: url(@/assets/imgs/bg.png);
  }
</style>
