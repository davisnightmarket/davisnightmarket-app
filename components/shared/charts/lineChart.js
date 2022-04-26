import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

export default function LineChart(props) {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        maintainAspectRatio: false,
        multiTooltipTemplate: "Donors : People",
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.parsed.y + " Donors";
                    }
                }
            },
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Number of Donors per Night',
            },
        },
    };

    const returnDay = (offset) => {
        const date = new Date(new Date().setDate(new Date().getDate()-offset));
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
    }

    let timeFrame = props.timeframe
    if (props.timeframe == 'custom') {
        timeFrame = props.dateDiff + 1
    }

    const labels = [...Array(parseInt(timeFrame)).keys()].reverse().map(x => returnDay(x))

    const data = {
        labels,
        datasets: [
            {
                label: 'Donors',
                data: labels.map(() => parseInt(Math.random() * 10)),
                borderColor: 'rgba(116, 177, 119, 0.8)',
            }
        ],
    };

    return (
        <React.Fragment>
            <div className='line-chart-container'>
                <Line options={options} data={data} height={'100%'} width={'100%'} />
            </div>
            <style jsx>
                {
                    `
                        .line-chart-container {
                            height: 40vh;
                            width: 90%;
                            background-color: #fff;
                            border-radius: 1rem;
                            padding: 1rem;
                        }

                    `
                }
            </style>
        </React.Fragment>
    )
}