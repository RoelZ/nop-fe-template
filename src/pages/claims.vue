<template>
    <div>
        <mainMenu></mainMenu>
        <md-list class="md-double-line">
            <md-subheader>Open Claims</md-subheader>
            <md-list-item :to="{path:'/claims/0'}">
                <md-avatar>
                    <img src="https://placeimg.com/56/56/tech" alt="Campaign X">
                </md-avatar>

                <div class="md-list-item-text">
                    <span>{{ $route.params.campaignID }} - Gratis 34-delige x-line accessoireset couponactie</span>
                    <span>Actie loopt t/m 10-08-2018</span>
                </div>

                <md-button class="md-icon-button md-list-action">
                    {{ $route.params.claimID }}
                    <md-icon class="md-alert">warning</md-icon>
                </md-button>
            </md-list-item>

            <md-list-item>
                <md-avatar>
                    <img src="https://placeimg.com/56/56/people" alt="Campaign Y">
                </md-avatar>

                <div class="md-list-item-text">
                    <span>Cashback &euro;20 couponactie</span>
                    <span>Actie loopt t/m 10-08-2018</span>
                </div>

                <md-button class="md-icon-button md-list-action">
                    <md-icon class="md-alert">warning</md-icon>
                </md-button>
            </md-list-item>

            <md-list-item>
                <md-avatar>
                    <img src="https://placeimg.com/56/56/animals" alt="Campaign Z">
                </md-avatar>

                <div class="md-list-item-text">
                    <span>Gratis acculamp naar keuze bij aankoop van een boormachine</span>
                    <span>Actie loopt t/m 10-08-2018</span>
                </div>

                <md-button class="md-icon-button md-list-action">
                    <md-icon class="md-warning">warning</md-icon>
                </md-button>
            </md-list-item>

        </md-list>
    </div>
</template>

<script>
    import mainMenu from '../components/mainMenu';

    export default {
        name: "claims",
        components: { mainMenu },
        props: ["campaignID", "claimID"]
    }
</script>

<style scoped>

</style>