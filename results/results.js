var ctx = document.getElementById('myChart').getContext('2d');
import { POKESTATS } from '../common/constants.js';
import { mungeNames, mungeCaptured, mungeEncountered } from '../common/utils.js';

const data = JSON.parse(localStorage.getItem(POKESTATS));
const names = mungeNames(data);
const captured = mungeCaptured(data);
const encountered = mungeEncountered(data);

var myChart = new Chart(ctx, { // eslint-disable-line
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            label: 'Number of times Captured',
            data: captured,
            backgroundColor: 'rgb(111, 45, 168, 0.5)',
            borderColor: '#4e5a65',
            borderWidth: 1
        }, {
            label: 'Number of times Encountered',
            data: encountered,
            backgroundColor: 'rgb(201, 223, 227, 0.5)',
            borderColor: '#c6ccd3',
            borderWidth: 1
        }]
    },  
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});