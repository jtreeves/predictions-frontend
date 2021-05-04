import { useEffect } from 'react'
import * as d3 from 'd3'

function GraphOutput(props) {
    console.log('PROPS.LINEARPOINTS: ', props.linearPoints)
    const legend = [
        { type: "linear", color: "pink" },
        { type: "quadratic", color: "green" },
        { type: "cubic", color: "blue" },
        { type: "hyperbolic", color: "brown" },
        { type: "exponential", color: "orange" },
        { type: "logarithmic", color: "yellow" },
        { type: "logistic", color: "purple" },
        { type: "sinusoidal", color: "red" },
        { type: "original", color: "black" }
    ]

    useEffect(() => {
        const margin = { top: 50, right: 50, bottom: 50, left: 50 }
        const width = 500 - margin.left - margin.right
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
            .attr("width", width + margin.left + 4 * margin.right)
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
            .attr("x", width / 2)             
            .attr("y", 0 - margin.top / 2)
            .attr("text-anchor", "middle")
            .style("font-size", margin.top / 2)
            .text(props.title)

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
        
        graph
            .selectAll("legend")
            .data(legend)
            .enter()
            .append("g")
            .attr("transform", (d, i) => {
                return `translate(${width + margin.right}, ${margin.top * i})`
            })
            .each(function (d, i) {
                d3
                    .select(this)
                    .append("rect")
                    .attr("width", 25)
                    .attr("height", 25)
                    .attr("fill", d.color)
                d3
                    .select(this)
                    .append("text")
                    .attr("text-anchor", "start")
                    .attr("x", 25 + 10)
                    .attr("y", 25 / 2)
                    .attr("dy", "0.35em")
                    .text(d.type)
            })

        if (props.linearPoints) {
            graph
                .append("path")
                .datum(props.linearPoints)
                .attr("d", path)
                .style("fill", "none")
                .style("stroke", "pink")
                .style("stroke-width", 2.5)
        }
        
        graph
            .append("path")
            .datum(props.quadraticPoints)
            .attr("d", path)
            .style("fill", "none")
            .style("stroke", "green")
            .style("stroke-width", 2.5)
        
        graph
            .append("path")
            .datum(props.cubicPoints)
            .attr("d", path)
            .style("fill", "none")
            .style("stroke", "blue")
            .style("stroke-width", 2.5)
        
        graph
            .append("path")
            .datum(props.hyperbolicPoints)
            .attr("d", path)
            .style("fill", "none")
            .style("stroke", "brown")
            .style("stroke-width", 2.5)
        
        graph
            .append("path")
            .datum(props.exponentialPoints)
            .attr("d", path)
            .style("fill", "none")
            .style("stroke", "orange")
            .style("stroke-width", 2.5)
        
        graph
            .append("path")
            .datum(props.logarithmicPoints)
            .attr("d", path)
            .style("fill", "none")
            .style("stroke", "yellow")
            .style("stroke-width", 2.5)
        
        graph
            .append("path")
            .datum(props.logisticPoints)
            .attr("d", path)
            .style("fill", "none")
            .style("stroke", "purple")
            .style("stroke-width", 2.5)
        
        if (props.sinusoidalPoints) {
            graph
                .append("path")
                .datum(props.sinusoidalPoints)
                .attr("d", path)
                .style("fill", "none")
                .style("stroke", "red")
                .style("stroke-width", 2.5)
        }
        
        graph
            .selectAll("plot")
            .data(props.originalPoints)
            .enter()
            .append("circle")
            .attr("cx", (d) => xScale(d.x))
            .attr("cy", (d) => yScale(d.y))
            .attr("r", 3)
    })

    return null
}

export default GraphOutput