<template>
    <div>
        <h2>这里是 Home 页</h2>
        <div v-for="(item, index) in list" class="movie">
        <img class="cover" :src="item.cover">
        <p>
            <span class="title">{{item.title}}</span>
            <span class="rate">{{item.rate}}</span>
        </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'home',
    asyncData ({ store }) {    //自定义静态方法asyncData
      return store.dispatch('getTopList')     
    },
    
    /*****
    在这里，执行asyncData，就会调用getTopList方法去请求数据
    并将数据更新到vue实例的$store.state中
    actions: {            
      getTopList (store) {      
        return top20().then((res) => {
          store.commit('setTopList', res.data.subjects)
        })
      }
    }
    *****/
    
    computed: {
      list () {
        return this.$store.state.topList
      }
    },
    created () {
      if(!this.$store.state.topList){
        this.$store.dispatch('getTopList')
      }
    }
}
</script>