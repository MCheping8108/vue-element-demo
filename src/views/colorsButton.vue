<template>
  <el-row class="mb-4">
    <el-button @click="handleClick">Default</el-button>
    <el-button type="primary" @click="handleClick">Primary</el-button>
    <el-button type="success" @click="handleClick">Success</el-button>
    <el-button type="info" @click="handleClick">Info</el-button>
    <el-button type="warning" @click="handleClick">Warning</el-button>
    <el-button type="danger" @click="handleClick">Danger</el-button>
  </el-row>

  <el-row class="mb-4">
    <el-button plain @click="handleClick">Plain</el-button>
    <el-button type="primary" plain @click="handleClick">Primary</el-button>
    <el-button type="success" plain @click="handleClick">Success</el-button>
    <el-button type="info" plain @click="handleClick">Info</el-button>
    <el-button type="warning" plain @click="handleClick">Warning</el-button>
    <el-button type="danger" plain @click="handleClick">Danger</el-button>
  </el-row>

  <el-row class="mb-4">
    <el-button round @click="handleClick">Round</el-button>
    <el-button type="primary" round @click="handleClick">Primary</el-button>
    <el-button type="success" round @click="handleClick">Success</el-button>
    <el-button type="info" round @click="handleClick">Info</el-button>
    <el-button type="warning" round @click="handleClick">Warning</el-button>
    <el-button type="danger" round @click="handleClick">Danger</el-button>
  </el-row>

  <el-row>
    <el-button :icon="Search" circle @click="handleClick" />
    <el-button type="primary" :icon="Edit" circle @click="handleClick" />
    <el-button type="success" :icon="Check" circle @click="handleClick" />
    <el-button type="info" :icon="Message" circle @click="handleClick" />
    <el-button type="warning" :icon="Star" circle @click="handleClick" />
    <el-button type="danger" :icon="Delete" circle @click="handleClick" />
  </el-row>
</template>

<script lang="ts" setup>
import { ElNotification } from "element-plus";
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from "@element-plus/icons-vue";

const handleClick = () => {
  ElNotification({
    title: "Success",
    message: "This is a success message",
    type: "success",
  });
};
</script>
