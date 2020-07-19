<template>
  <div>
    <div class="LoginTop">
      <div>1</div>
      <div>{{middleTop}}</div>
      <div>
        <slot name="right"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['middleTop']
}
</script>

<style lang="less" scroped>
  .LoginTop{
    height: 12.111vw;
    background-color: white;
    display: flex;
    div{
      display: flex;
      flex:1;
      justify-content: center;
      align-items: center;
      font-size: 4.133vw;
    }
  }
</style>