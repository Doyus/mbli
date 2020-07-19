<template>
    <div class="userinfo">
        <nav-bar></nav-bar>
        <img src="@/assets/bannerTop_new.png" alt="" class="backImg">
        <user-detail :userInfo="model"/>
        <user-artice></user-artice>
    </div>
</template>


<script>
import NavBar from  '@/components/common/NavBar.vue'
import userDetail from  '@/components/common/userComponents/userDetail.vue'
import userArtice from  '@/components/common/userComponents/userArtice.vue'
export default {
    data(){
        return{
            model:{}
        }
    },
    components:{
        NavBar,
        userDetail,
        userArtice
    },
    mounted(){
        // this.$http.get()
    },
    methods:{
        async userData() {
            const res =  await this.$http.get('/user/' + localStorage.getItem('id'))
            
            this.model = res.data[0]    
            console.log(this.model,"<<<<<<<<<<<<<")
        }
    },
    created() {
        this.userData()
    }
}
</script>


<style lang="less" scoped>
    .backImg{
        height: 131px;
        width: 100%;
    }
</style>