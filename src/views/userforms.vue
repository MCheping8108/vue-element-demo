<template>  
    <el-form :model="form" label-width="120px">  
      <el-form-item label="用户名">  
        <el-input v-model="form.username"></el-input>  
      </el-form-item>  
      <el-form-item label="密码">  
        <el-input type="password" v-model="form.password"></el-input>  
      </el-form-item>  
      <el-form-item label="性别">  
        <el-radio-group v-model="form.gender">  
          <el-radio label="男"></el-radio>  
          <el-radio label="女"></el-radio>  
        </el-radio-group>  
      </el-form-item>  
      <el-form-item label="爱好">  
        <el-checkbox-group v-model="form.hobbies">  
          <el-checkbox label="音乐"></el-checkbox>  
          <el-checkbox label="运动"></el-checkbox>  
          <el-checkbox label="旅游"></el-checkbox>  
        </el-checkbox-group>  
      </el-form-item>  
      <el-form-item>  
        <el-button type="primary" @click="submitForm">提交</el-button>  
      </el-form-item>  
    </el-form> 

    <br>
    <p>由<a href="https://yiyan.baidu.com/">文心一言</a>编写</p>
  </template>  
    
  <script lang="ts">  
  export default {  
    data() {  
      return {  
        form: {  
          username: '',  
          password: '',  
          gender: '',  
          hobbies: []  
        }  
      }  
    },  
    methods: {  
      submitForm() {  
        // 提交表单，进行后续操作  
        console.log(this.form);  
      }  
    }  
  }  
  </script>