<template>
    <h1 class="title-h1">vue-element-demo</h1>
    <h2 class="title-h2">欢迎来到和平的vue-element-demo</h2>
    <el-button type="primary" @click="dialogVisible = true" class="el-btn">
    你准备好了吗
  </el-button>

  <el-dialog
    v-model="dialogVisible"
    title="Tips"
    width="30%"
    :before-close="handleClose"
  >
    <span>同志！</span>
    <img src="../assets/soivet.jpg" alt="">
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
// import { h } from 'vue'
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'

const dialogVisible = ref(false)

const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}

</script>

<style>
img {
  width: 100%;
  height: 500;
}
.title-h1 {
  text-align: center;
  margin-top: 100px;
  margin-bottom: 50px;
  font-size: 40px;
}

.title-h2 {
  text-align: center;
  margin-bottom: 50px;
  font-size: 20px;
  font-weight: normal;
  color: #999;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: normal;
  color: #999;
}

.el-btn {
  max-width: 300px;
  margin: 0 auto;
  display: block;
  margin-bottom: 20px;
  
}
</style>