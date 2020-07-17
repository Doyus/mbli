<template>
    <div class='btnParent' @click="registerClick">
        <div class="loginbtn">{{btnTxt}}</div>
    </div>
</template>
<script>
export default {
    props:['btnTxt'],
    methods:{
        registerClick(){
            this.$emit('registerSubmit')
        }
    }
}
</script>
<style lang="less">
    .loginbtn{
        height: 45px;
        background-color: #ff9db5;
        color:white;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 22.5px;
    }
    .btnParent{
        padding:4.167vw 2.778vw;

    }
</style>