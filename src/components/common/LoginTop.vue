<template>
    <div>
        <div class="LoginTop">
            <div>1</div>
            <div>{{ middleTop }}</div>
            <div>
                <slot name="right" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['middleTop']
}
</script>

<style lang="less">
    .LoginTop{
        height: 12.5vw;
        background-color: #fff;
        display: flex;
        div{
            flex:1;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 3vw;
        }
    }
</style>