<template>
    <div class="login">
         <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>系统登录注册</span>
            </div>
             <el-tabs v-model="currentName" :stretch="true" @tab-click="handleClick">
                <el-tab-pane label="登录" name="login">
                    <el-form :model="loginForm" status-icon :rules="rules" label-width="100px" ref="loginForm">
                        <el-form-item label="用户名" prop="username">
                            <el-input type="text" v-model="loginForm.username"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="password" >
                            <el-input type="password" v-model="loginForm.password" ></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('loginForm')" >提交</el-button>
                            <el-button  @click="resetForm('loginForm')" >重置</el-button>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
                <el-tab-pane label="注册" name="register">
                    <el-form :model="registerForm" :rules="rules" status-icon label-width="100px" ref="registerForm">
                        <el-form-item label="用户名" prop="username">
                            <el-input type="text" v-model="registerForm.username"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="password">
                            <el-input type="password" v-model="registerForm.password" ></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码" prop="checkPwd">
                            <el-input type="password" v-model="registerForm.checkPwd"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('registerForm')"> 注册</el-button>
                            <el-button  @click="resetForm('registerForm')">重置</el-button>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default {
        name: "Login",
        data() {
            var validateUsername = (rule,value,callback) =>{
                if(value === ''){
                    callback(new Error("请输入用户名"));
                }else if(value.length < 4 || value.length >18 ){
                    callback(new Error("用户名为6~18个字符"));
                }else{
                    callback();
                }
            };
            var validatePassword = (rule,value,callback)=>{
                if(value === ''){
                    callback(new Error("请输入密码"));
                }else if(value.length < 4){
                    callback(new Error("密码至少需要8个字符"));
                }else{
                    callback();
                }
            };
            var validateCheckPwd = (rule,value,callback) =>{
                if (value === '') {
                     callback(new Error('请再次输入密码'));
                } else if (value !== this.registerForm.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            }
            return {
                currentName: "login",
                activeTab: 'login',
                loginForm: {
                    username: "",
                    password: "",
                },
                registerForm: {
                    username: "",
                    password: "",
                    checkPwd: ""
                },
                rules: {
                    username:[
                        {validator: validateUsername,trigger: "blur"}
                    ],
                    password: [
                        {validator:validatePassword,trigger: "blur"}
                    ],
                    checkPwd: [
                        {validator:validateCheckPwd,trigger: "blur"}
                    ]
                }
            }
        },
        methods: {
            //vuex 保存数据状态方式之一，在mapActions中指定用于修改状态的方法名
            ...mapActions(["changeLogin"]),
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                if (valid) {
                   if(this.activeTab === 'login'){
                    console.log("登录");
                    //方式一：未拆分store/index.js中state和mutations时。使用axios提交表单成功，登录成功后使用如下方法保存数据。第一个参数表示要触发的方法，第二参数则表示传递过去的参数
                    //this.$store.commit("changeLogin",this.loginForm.username);
                    //方式二：拆分后。
                    // this.$store.dispatch("changeLogin",this.loginForm.username)
                    //方式二：通过mapActions
                    this.changeLogin(this.loginForm.username)
                   }
                   if(this.activeTab === 'register'){
                    console.log("注册");
                   }
                } else {
                    console.log('error submit!!');
                    return false;
                }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            handleClick(tab,event){
                this.activeTab = tab.name;
            }
        }
    }
</script>

<style scoped>
    .login{
        width: 1200px;
        margin: 0 auto;
    }
    .login .box-card{
        width: 500px;
        margin: 100px auto;
    }
</style>
