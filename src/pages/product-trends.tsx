import React from 'react'
import { useState } from 'react'
import { Bar } from '../components/barChart'
import { Pie } from '../components/pieChart'

export function ProductTrends()
{
    const [count, setCount] = useState(0)

    return (
        <>

            <div style={{ width: 800, height: 1000 }}>
                <Bar></Bar>
            </div>
            <div style={{ width: 800, height: 1000 }}>
                <Pie></Pie>
            </div>

        </>
    )
}