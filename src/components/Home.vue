<template>
    <div>
        <h2>这里是 Home 页</h2>
        <!-- 客户端激活测试 -->
        <!-- <p>{{name}}</p>
        <button @click="changeName">切换姓名</button> -->
    </div>
</template>

<script>
export default {
    name: 'home',
    components: {},
    data () {
        return {
            name: '李白'
        }
    },
    mounted () {},
    methods: {
        changeName() {
            if(this.name == '杜甫') {
                this.name = '李白'
            } else {
                this.name = '杜甫'
            }   
        }
    }
}
</script>