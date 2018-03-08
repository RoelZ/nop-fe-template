<script>
    import { Line } from 'vue-chartjs'

    //Exporting this so it can be used in other components
    export default {
        extends: Line,
        mounted () {
        // Overwriting base render method with actual data.
        this.renderChart({
            labels: ['jan', 'feb', 'mrt', 'apr', 'mei'],
            datasets: [
            {
                label: 'Campaign Participants',
                display: false,
                lineTension: 0,
                borderColor: '#a7d2a8',
                backgroundColor: 'rgba(0,0,0,0)',
                pointBorderColor: '#a7d2a8',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 7,
                pointHitRadius: 4,
                pointHoverRadius: 7,
                data: [0, 45, 65, 30, 75]
            }
            ]
        })
        }
    }
</script>
