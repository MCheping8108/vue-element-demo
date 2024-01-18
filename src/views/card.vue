<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>Card name</span>
        <el-button class="button" text @click="handleClick">全村通知</el-button>
      </div>
    </template>
    <div class="text item">
        <p>第一天：今天正常</p>
        <p>第二天：你收到了一封邮件</p>
        <p>第三天：你失踪了</p>    
    </div>
    <template #footer>Footer content</template>
  </el-card>
</template>

<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
</style>

<script lang="ts" setup>
import { ElNotification } from "element-plus";

const handleClick = () => {
  ElNotification({
    title: "喜报",
    message: "全村人来你家吃席",
    type: "success",
  });
};
</script>