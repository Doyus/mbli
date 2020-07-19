<template>
    <div class="btnparent" @click="registerClick">
        <div class="loginBtn">
            {{btntext}}
        </div>
    </div>
</template>

<script>
export default {
    props:['btntext'],
    methods:{
        registerClick(){
            this.$emit('registerSubmit')
        }
    }
}
</script>

<style lang="less">
    .loginBtn{
        height: 45px;
        background-color: #ff9db5;
        color:white;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 22.5px;
    }
</style>