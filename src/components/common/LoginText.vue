<template>
    <div>
        <van-field 
        v-model="content" 
        :label="label"
        :type='type'
        :placeholder='placeholder'
        :rule='rule'
        />

    </div>
</template>

<script>
export default {
    data(){
        return{
            content:""
        }
    },
    props:['label', 'type', 'placeholder', 'rule'],
    methods:{
        handlerRulg(){
            const rue = new RegExp(this.rule);
            if(rue.test(this.content)){
                console.log("正则校验成功了",this.content);
                this.$emit('inputChange', this.content)

            }
        }
    },
    watch:{
        content(){
            this.handlerRulg()
        }
    }
}
</script>

<style lang="less">

</style>