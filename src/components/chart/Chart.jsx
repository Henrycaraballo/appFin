import React from 'react'
import {Chart as chartjs} from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';


const Chart = () => {
  return (
    <div>
        <Bar className='m-3 lg:p-3'
            data={{
                labels:["Views", "Subscriptions", "Likes"],
                datasets:[
                    {
                        label:"Count",
                        data:[5000, 2000, 600 ], 
                        backgroundColor:[
                        "rgb(55,48,163)", 
                        "rgb(109,40,217)", 
                        "rgb(30,27,75))"
                        ]
                    },
                ],
            }}
        />    
    </div>
  );
}

export default Chart