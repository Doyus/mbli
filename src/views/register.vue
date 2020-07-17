<template>
    <div>
        <login-top middleTop="注册哔哩哔哩">
            <div slot='right'  style="font-size:3.4vw" @click="$router.push('/login')">切换至登录</div>
        </login-top>
        <login-text label="姓名"
            style="margin:4.15vw 0;"
            rule="^.{3,5}$"
            placeholder="请输入姓名"
            @inputChange="res => models.name = res"
        
        />
        <login-text label="账号"
            style="margin:4.15vw 0;"
            rule="^.{3,5}$"
            placeholder="请输入姓名"
            @inputChange="res => models.username = res"
        />
        <login-text label="密码"
            style="margin:4.15vw 0;"
            rule="^.{3,5}$" v
            placeholder="请输入密码"
            type='password'
            @inputChange="res => models.password = res"
        />
        <login-btn btnTxt='注册2' @registerSubmit="registerSubmit"></login-btn>
    </div>
    
</template>


<script>
import LoginTop from '@/components/common/LoginTop.vue'
import LoginText from '@/components/common/LoginText.vue'
import LoginBtn from '@/components/common/LoginBtn.vue'


export default {
    data(){
        return {
            name: '',
            username: '',
            password: '',
            models:{
                name: '',
                username: '',
                password: '',
            }
        }
    },
    components:{
        LoginTop,
        LoginText,
        LoginBtn,
    },
    methods:{
        async registerSubmit(){
            let rulg = /^.{3,6}$/
            // if(rulg.test(this.name) && rulg.test(this.username) && rulg.test(this.password)){
            if(rulg.test(this.models.name) && rulg.test(this.models.username) && rulg.test(this.models.password)){
                const res = await this.$http.post('/register',this.models);
                this.$msg.fail(res.data.msg);
            console.log(res);
            console.log('我一定要第二次执行');
            }else{
                this.$msg.fail("格式不正确，请重新输入")
            }
        }
    }    
}
</script>

<style lang="less">

</style>