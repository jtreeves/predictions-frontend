import { useEffect } from 'react'
import * as d3 from 'd3'

function GraphOutput(props) {
    useEffect(() => {
        const margin = { top: 50, right: 50, bottom: 50, left: 100 }
        const width = 550 - margin.left - margin.right
        const height = 500 - margin.top - margin.bottom

        d3
            .select(".main-graph")
            .remove()

        const xScale = d3
            .scaleLinear()
            .domain([props.xMinimum, props.xMaximum])
            .range([0, width])
        
        const yScale = d3
            .scaleLinear()
            .domain([props.yMinimum, props.yMaximum])
            .range([height, 0])

        const path = d3
            .line()
            .x(d => xScale(d.x))
            .y(d => yScale(d.y))
            .curve(d3.curveCatmullRom.alpha(.5))

        const graph = d3
            .select(".graph-container")
            .append("svg")
            .attr("class", "main-graph")
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
            .append("text")
            .attr("transform", `translate(${width / 2}, ${height + margin.bottom})`)
            .style("text-anchor", "middle")
            .text(props.independent)
        
        graph
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 0 - margin.left)
            .attr("x", 0 - height / 2)
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .text(props.dependent)

        if (props.linearCoordinates) {
            graph
                .append("path")
                .datum(props.linearCoordinates)
                .attr("d", path)
                .style("fill", "none")
                .style("stroke", "pink")
                .style("stroke-width", 2.5)
        }
        
        if (props.quadraticCoordinates) {
            graph
                .append("path")
                .datum(props.quadraticCoordinates)
                .attr("d", path)
                .style("fill", "none")
                .style("stroke", "green")
                .style("stroke-width", 2.5)
        }
        
        if (props.cubicCoordinates) {
            graph
                .append("path")
                .datum(props.cubicCoordinates)
                .attr("d", path)
                .style("fill", "none")
                .style("stroke", "blue")
                .style("stroke-width", 2.5)
        }
        
        if (props.hyperbolicCoordinates) {
            graph
                .append("path")
                .datum(props.hyperbolicCoordinates)
                .attr("d", path)
                .style("fill", "none")
                .style("stroke", "brown")
                .style("stroke-width", 2.5)
        }
        
        if (props.exponentialCoordinates) {
            graph
                .append("path")
                .datum(props.exponentialCoordinates)
                .attr("d", path)
                .style("fill", "none")
                .style("stroke", "orange")
                .style("stroke-width", 2.5)
        }
        
        if (props.logarithmicCoordinates) {
            graph
                .append("path")
                .datum(props.logarithmicCoordinates)
                .attr("d", path)
                .style("fill", "none")
                .style("stroke", "yellow")
                .style("stroke-width", 2.5)
        }
        
        if (props.logisticCoordinates) {
            graph
                .append("path")
                .datum(props.logisticCoordinates)
                .attr("d", path)
                .style("fill", "none")
                .style("stroke", "purple")
                .style("stroke-width", 2.5)
        }
        
        if (props.sinusoidalCoordinates) {
            graph
                .append("path")
                .datum(props.sinusoidalCoordinates)
                .attr("d", path)
                .style("fill", "none")
                .style("stroke", "red")
                .style("stroke-width", 2.5)
        }
        
        if (props.originalCoordinates) {
            graph
                .selectAll("plot")
                .data(props.originalCoordinates)
                .enter()
                .append("circle")
                .attr("cx", (d) => xScale(d.x))
                .attr("cy", (d) => yScale(d.y))
                .attr("r", 3)
        }
    })

    return (
        <section className="graph-container">
            <svg className="main-graph" />
        </section>
    )
}

export default GraphOutput