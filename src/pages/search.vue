<template>
    <div>
    <main-menu></main-menu>
    <md-card>
        <md-card-content>
            <md-field>
                <label>Campagnes doorzoeken</label>
                <md-input v-model="search"></md-input>
            </md-field>
        </md-card-content>
    </md-card>
    </div>
</template>

<script>
    import mainMenu from '../components/mainMenu';

    export default {
        name: "search",
        components: { mainMenu },
        data: () => ({
            search: null
        })
    }
</script>

<style scoped>

</style>