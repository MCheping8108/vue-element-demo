<template>
  <el-popconfirm @confirm="ok" @cancel="no" title="想用火烤着吃吗？">
    <template #reference>
      <el-button>我是一只野生的按钮</el-button>
    </template>
  </el-popconfirm>
</template>

<script lang="ts" setup>
import { ElNotification } from "element-plus";

const ok = () => {
  ElNotification({
    title: "红烧按钮",
    message: "你把野生的按钮烧了",
    type: "success",
  })
}
const no = () => {
  ElNotification({
    title: "失败了",
    message: "野生按钮把你吃了",
    type: "error",
  })
}
</script>
