<template>
    <div style="border: 2px solid red;padding: 3px; display: grid; grid-template-columns:  200px 1fr; gap: 50px;">
        <Sidebar></Sidebar>
        <router-view></router-view>
    </div>
</template>

<script >
    import Sidebar from './components/Sidebar.vue'
    export default {
        components: {Sidebar}

    }
</script>
