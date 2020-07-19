<template>
    <div>
        <login-top middleTop="注册blili">
            <div slot="right" style="font-size:3.611vw;" @click="$router.push('/login')">跳转至登录</div>
        </login-top>
        <login-text 
        label="姓名"
        style="margin: 20px 0"
        rule="^.{3,6}$"
        placeholder='请输入姓名'
        @inputChange="res=>model.name=res"
        />
        <login-text 
        label="账号"
        style="margin: 20px 0"
        rule="^.{3,6}$"
        placeholder='请输入账号'
        @inputChange="res=>model.username=res"
        />
        <login-text 
        label="姓名"
        style="margin: 20px 0"
        rule="^.{3,6}$"
        placeholder='请输入密码'
        type="password"
        @inputChange="res=>model.password=res"
        />
        <login-btn btntext="注册" @registerSubmit='registerSubmit'/>
    </div>
</template>

<script>
import LoginTop from '@/components/common/LoginTop.vue'
import LoginText from '@/components/common/LoginText.vue'
import LoginBtn from '@/components/common/LoginBtn.vue'
export default {
    data(){
        return{
            model:{
                name:'',
                username:'',
                password:'',
            }
        }
    },
    components:{
        LoginTop,
        LoginText,
        LoginBtn
    },
    methods:{
        async registerSubmit(){
            let rulg = /^.{2,8}$/
            if (rulg.test(this.model.name) && rulg.test(this.model.username) && rulg.test(this.model.password)){
                const res = await this.$http.post('/register',this.model) // eslint-disable-line no-unused-vars
                this.$msg.fail(res.data.msg)
            }else{
                this.$msg.fail('格式化不正确，重新输入')
            }
        }
    }
 
}
</script>

<style lang="less" scoped>

</style>