<template>
  <div>
    <div class="navbar">
      <div class="logo">
          <img src="@/assets/logo.png" alt="">
      </div>
      <div>
          <p>
              输入搜索
              <van-icon name='search' class="ipt-icon"></van-icon>
          </p>
      </div>
      <div>
          <img src="@/assets/default_img.jpg" alt="">
          <p>下载app</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scroped>
  .navbar{
      height:  12.111vw;
      background-color:white;
      display: flex;
      .logo{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 33.333vw;
          img{
              width: 70%;
          }
        }
        div:nth-child(2){
            flex:1;
            display: flex;
            align-items: center;
            p{
                background-color: #f4f4f4;
                margin-right: 10px;
                width: 100%;
                height: 26px;
                line-height: 26px;
                padding-left: 25px;
                color: #aaa;
                font-size: 12px;
                position: relative;
                border-radius: 10px;
                .ipt-icon{
                    position: absolute;
                    left:10px;
                    top:50%;
                    transform: translate(0,-40%);
                    color: #aaa;
                }
            }
        }
        div:nth-child(3){
          display: flex;
          justify-content: center;
          align-items: center;
          img{
              width: 7.333vw;
              height: 7.333vw;
          }
          p{
              padding: 1.389vw 5.556vw;
              background-color:#fb7299;
              color:white;
              margin: 0 7px;
              border-radius: 1.389vw;
              font-size: 3.0vw;

          }
      }
  }
</style>