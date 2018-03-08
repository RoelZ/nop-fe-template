<template>
    <div>
        <mainMenu></mainMenu>
        <stats></stats>
    </div>
</template>

<script>
    import mainMenu from '../components/mainMenu';
    import stats from '../components/statistics';

    export default {
        name: "dashboard",
        components: { mainMenu, stats }
    }
</script>

<style scoped>

</style>