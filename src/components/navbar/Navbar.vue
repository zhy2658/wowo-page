<template>
  <nav class="navbar">
    <div class="brand">
      <router-link to="/" style="color: #fff; text-decoration: none">WOWO</router-link>
    </div>
    <button class="hamburger" @click="toggleMenu" aria-label="Toggle navigation menu">☰</button>
    <ul class="nav-links" :class="{ active: isMenuOpen }">
      <li>
        <a href="#home" @click="isMenuOpen = false">
          <router-link to="/">主页</router-link>
        </a>
      </li>
      <li>
        <a href="#about" @click="isMenuOpen = false">
          <router-link to="/account/list">账号列表</router-link>
        </a>
      </li>
      <li>
        <a href="#services" @click="isMenuOpen = false">设置</a>
      </li>
      <li>
        <a href="#contact" @click="isMenuOpen = false">关于</a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'

  const isMenuOpen = ref(false)

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }

  const closeMenuOnClickOutside = (event: any) => {
    const nav: any = document.querySelector('.navbar')
    const hamburger: any = document.querySelector('.hamburger')
    if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
      isMenuOpen.value = false
    }
  }

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      isMenuOpen.value = false
    }
  }

  onMounted(() => {
    document.addEventListener('click', closeMenuOnClickOutside)
    window.addEventListener('resize', handleResize)
  })

  onUnmounted(() => {
    document.removeEventListener('click', closeMenuOnClickOutside)
    window.removeEventListener('resize', handleResize)
  })
</script>

<style scoped>
  .navbar {
    background: #333;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  .brand {
    color: white;
    font-size: 1.5rem;
  }

  .hamburger {
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0.5rem;
    display: block;
  }

  .nav-links {
    display: none;
    list-style: none;
    gap: 2rem;
  }

  .nav-links li a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
  }

  .nav-links li a:hover {
    color: #ff6b6b;
  }

  @media (min-width: 768px) {
    .hamburger {
      display: none;
    }

    .nav-links {
      display: flex;
    }
  }

  .nav-links.active {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.95);
    padding: 1rem;
    text-align: center;
    gap: 1rem;
    transform: translateY(0);
    transition: transform 0.3s ease;
    margin: 0;
    z-index: 100;
  }
</style>
