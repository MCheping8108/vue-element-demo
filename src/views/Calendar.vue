<template>
<el-calendar v-model="value" @click="handleClick"/>
</template>
  
<script lang="ts" setup>
import { ElNotification } from "element-plus";

import { ref } from 'vue'
const value = ref(new Date())

const handleClick = () => {
  ElNotification({
    title: "Success",
    message: "This is a success message",
    type: "success",
  })
}
</script>