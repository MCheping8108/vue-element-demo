<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { ref } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'
const activeIndex = ref('1')
// const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    
    <!-- <el-menu-item index="1"><RouterLink to="/">主页</RouterLink></el-menu-item> -->
    <el-sub-menu index="2">
      <template #title>demo</template>
      <RouterLink to="/"><el-menu-item index="2-1">主页</el-menu-item></RouterLink>
      <RouterLink to="/about"><el-menu-item index="2-2">about</el-menu-item></RouterLink>
      <RouterLink to="/userforms"><el-menu-item index="2-3">userforms</el-menu-item></RouterLink>
      <!-- <RouterLink to="/tresjs-3d"><el-menu-item index="2-4">tresjs-3d</el-menu-item></RouterLink> -->
    </el-sub-menu>
  </el-menu>
  <br>
  <RouterView />
</template>

<style scoped>
* {
  text-decoration: none;
  color: black;
}


</style>
