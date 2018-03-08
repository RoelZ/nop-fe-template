<template>
    <div class="md-layout-column">
        <md-toolbar class="md-primary">
            <md-button class="md-icon-button" @click="showNavigation = true">
                <md-icon>menu</md-icon>
            </md-button>

            <div v-if="$route.name === 'Claims'" class="md-layout">
                <div class="md-layout-item md-size-50">
                    <md-field>
                        <md-select v-model="sort" name="sorting" id="sorting" placeholder="Urgent">
                            <md-optgroup label="Claims">
                                <md-option value="urgent">Urgent</md-option>
                                <md-option value="open">Open</md-option>
                                <md-option value="status">Status</md-option>
                            </md-optgroup>
                            <md-optgroup label="Campaigns">
                                <md-option value="urgent">Urgent</md-option>
                                <md-option value="open">Open</md-option>
                                <md-option value="status">Status</md-option>
                            </md-optgroup>
                        </md-select>
                    </md-field>
                </div>
            </div>
            <span v-else class="md-title">Dashboard</span>


            <div class="md-toolbar-section-end">
                <md-button to="/search" class="md-icon-button md-primary">
                    <md-icon>search</md-icon>
                </md-button>
            </div>
        </md-toolbar>

        <md-drawer :md-active.sync="showNavigation">
            <md-toolbar class="md-transparent" md-elevation="0">
                <span class="md-title">Novik</span>
            </md-toolbar>

            <md-list>
                <md-list-item to="/dashboard">
                    <md-icon>dashboard</md-icon>
                    <span class="md-list-item-text">Dashboard</span>
                </md-list-item>

                <md-divider></md-divider>

                <md-subheader>Campaigns</md-subheader>

                <md-list-item to="/campaigns">
                    <md-icon>shop</md-icon>
                    <span class="md-list-item-text">Campaigns</span>
                </md-list-item>

                <md-list-item :to="{
                    name:'Claims',
                    params: { claimID:20, campaignID:0 },
                    query: { isCampaign:true, isClaim:false }
                }">
                    <md-icon>receipt</md-icon>
                    <span class="md-list-item-text">Claims</span>
                </md-list-item>

                <md-list-item to="/stats">
                    <md-icon>timeline</md-icon>
                    <span class="md-list-item-text">Statistics</span>
                </md-list-item>

                <md-divider></md-divider>

                <md-subheader>Settings</md-subheader>

                <md-list-item to="/admin">
                    <md-icon>supervisor_account</md-icon>
                    <span class="md-list-item-text">Accounts</span>
                </md-list-item>

                <md-list-item to="/settings">
                    <md-icon>settings</md-icon>
                    <span class="md-list-item-text">Settings</span>
                </md-list-item>
            </md-list>
        </md-drawer>
    </div>
</template>

<script>
    export default {
        name: "mainMenu",
        data: () => ({
            showNavigation: false,
            sort: null
        })
    }
</script>

<style scoped>

</style>