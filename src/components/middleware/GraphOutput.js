import { useEffect } from 'react'
import * as d3 from 'd3'

function GraphOutput() {
    const points = [
        { x: 10, y: 20 },
        { x: 20, y: 80 },
        { x: 30, y: 50 },
        { x: 40, y: 70 },
        { x: 50, y: 30 },
        { x: 60, y: 60 },
        { x: 70, y: 10 }
    ]

    useEffect(() => {
        const margin = { top: 50, right: 50, bottom: 50, left: 50 }
        const width = 500 - margin.left - margin.right
        const height = 500 - margin.top - margin.bottom
        
        const xScale = d3
            .scaleLinear()
            .domain([0, 100])
            .range([0, width])
        
        const yScale = d3
            .scaleLinear()
            .domain([0, 100])
            .range([height, 0])

        const path = d3
            .line()
            .x(d => xScale(d.x))
            .y(d => yScale(d.y))
            .curve(d3.curveCatmullRom.alpha(.5))

        const graph = d3
            .select("#graph")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`)

        graph
            .append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(xScale))

        graph
            .append("g")
            .call(d3.axisLeft(yScale))
        
        graph
            .append("path")
            .datum(points)
            .attr("d", path)
            .style("fill", "none")
            .style("stroke", "black")
            .style("stroke-width", 2.5)
    })

    return (
        <svg
            id="graph"
            height={500}
            width={500}
        />
    )
}

export default GraphOutput