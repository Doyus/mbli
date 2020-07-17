<template>
    <div>
        <van-field
        :label = "label" 
        :type = "type" 
        :placeholder = "placeholder"
        :rule = "rule" 
        v-model = "content" 
        />
    </div>
</template>

<script>

export default {
    data(){
        return {
            content: ''
        }
    },
    props:['label', 'type', 'placeholder', 'rule'],
    methods:{
        handlerulg(){

            const rue = new RegExp(this.rule)
            console.log("执行啦watch", this.content)
            if(rue.test(this.content)){
                console.log("正则校验成功了");
                this.$emit('inputChange',this.content)
            }    
        }
    },
    watch:{
        content(){
            this.handlerulg()
        }
    }

}
</script>

<style lang="less">

</style>