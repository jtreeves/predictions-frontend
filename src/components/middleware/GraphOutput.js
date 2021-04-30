import { useEffect } from 'react'
import * as d3 from 'd3'

function GraphOutput() {
    useEffect(() => {
        d3.select("#graph")
    }, [])

    return (
        <svg>
            <circle
                id="graph"
                fill="green"
                stroke="black"
                strokeWidth={5}
                cx={100}
                cy={100}
                r={25}
            />
        </svg>
    )
}

export default GraphOutput