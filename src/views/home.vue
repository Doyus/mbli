<template>
    <div>
        <nav-bar></nav-bar>
        <van-tabs v-model="active">
            <van-tab v-for="(item, index) in category" :key="index" :title="item.title">
                内容:{{index}}
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import NavBar from '@/components/common/NavBar.vue'
export default {
    data(){
        return{
            category:[],
            active: 0,
        }
    },
    components:{
        NavBar
    },
    methods:{
        async selectCategory(){
            const res = await this.$http.get('/category')
            
            this.changeCategory(res.data) 
        },
        changeCategory(data){
            const category1 = data.map((item)=>{
                item.list =[]
                item.page = 0
                item.pagesize = 10
                return item 
            });
            this.category = category1
        },
        async selectArticle(){
            const categoryitem = this.categoryItem()
            const res = await this.$http.get('/detail/'+categoryitem._id,{
                params:{
                    page:categoryitem.page,
                    pagesize:categoryitem.pagesize
                }
            })
            categoryitem.list.push(...res.data);
            // categoryitem.list = this.category[this.active]
            console.log(">>>dd>", categoryitem, res)

        },
        categoryItem(){
            const categoryItem = this.category[this.active]
            console.log('categoryItem', categoryItem)
            return categoryItem
        }

    },
    created(){
        console.log("执行了")
        this.selectCategory()
    },
    watch:{
        active(){
            this.selectArticle()
        }
    }
    
}
</script>

<style lang="less" scoped>

</style>