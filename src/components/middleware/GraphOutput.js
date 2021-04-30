import { useEffect } from 'react'
import * as d3 from 'd3'

function GraphOutput() {
    const points = [
        { x: 10, y: 20 },
        { x: 30, y: 40 },
        { x: 80, y: 90 }
    ]

    useEffect(() => {
        const margin = { top: 50, right: 50, bottom: 50, left: 50 }
        const width = 500 - margin.left - margin.right
        const height = 500 - margin.top - margin.bottom
        
        const x = d3.scaleLinear().domain([0, 100]).range([0, width])
        const y = d3.scaleLinear().domain([0, 100]).range([height, 0])

        const path = d3.line()
            .x((d) => x(d.x))
            .y((d) => y(d.y))

        const svg = d3
            .select("#graph")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`)

        svg
            .append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(x))

        svg
            .append("g")
            .call(d3.axisLeft(y))
        
        svg
            .append("path")
            .data(points)
            .attr("d", path)
            .style("stroke", "black")
            .style("stroke-width", 2)
        
        svg
            .append("line")
            .style("stroke", "black")
            .attr("x1", 10)
            .attr("y1", 10)
            .attr("x2", 90)
            .attr("y2", 90)

        // svg
        //     .selectAll("plot")
        //     .data(points)
        //     .enter()
        //     .append("circle")
        //     .attr("cx", (d) => x(d.x))
        //     .attr("cy", (d) => y(d.y))
        //     .attr("r", 5)
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