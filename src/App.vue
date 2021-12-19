<template>
    <div id="app">
        <div>这是一个Vue项目</div>
        <div>
            <router-link to="/"> Home </router-link>
            <router-link to="/about"> About </router-link>
        </div>

        <router-view/>
    </div>
    
</template>

<script>
export default {
    name: 'index',
    components: {},
    data () {
        return {
        }
    },
    mounted () {},
    methods: {}
}
</script>