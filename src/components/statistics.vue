<template>
    <div class="page-container">
        <div class="md-layout">
            <md-card>
                <md-card-header>
                    <span class="md-title">Campaign participants</span>
                </md-card-header>

                <md-divider></md-divider>

                <md-card-content>
                    <div class="md-layout">
                        <div class="md-layout-item md-layout">
                                <small class="md-layout-item md-size-100">Participants</small>
                                <span class="md-display-1 md-layout-item md-size-100">38</span>
                                <span class="md-caption md-layout-item md-size-100">+9 (+31,0%)</span>
                        </div>
                        <div class="md-layout-item md-layout">
                                <small class="md-layout-item md-size-100">Sessions</small>
                                <span class="md-display-1 md-layout-item md-size-100">40</span>
                                <span class="md-caption md-layout-item md-size-100">+11 (+37,9%)</span>
                        </div>
                        <div class="md-layout-item md-layout">
                                <small class="md-layout-item md-size-100">New Participants</small>
                                <span class="md-display-1 md-layout-item md-size-100">36</span>
                                <span class="md-caption md-layout-item md-size-100">+7 (+24,1%)</span>
                        </div>
                    </div>
                </md-card-content>
                    <md-divider></md-divider>
                <md-card-content>

                    <div class="md-layout md-gutter">
                        <div class="md-layout-item md-size-100">
                            <line-chart :options="{responsive: false, maintainAspectRatio: false, legend:{display: false}}" :height="250"></line-chart>
                        </div>

                    </div>

                </md-card-content>

                <md-divider></md-divider>

                <md-card-actions>
                    <md-button>Go to Campaign</md-button>
                </md-card-actions>
            </md-card>
        </div>
    </div>
</template>

<script>
    import LineChart from './LineChart'

    export default {
        name: "statistics",
        components: {
            LineChart
        }
    }
</script>

<style scoped>


</style>