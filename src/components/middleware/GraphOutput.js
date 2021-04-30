import { useEffect } from 'react'
import * as d3 from 'd3'

function GraphOutput() {
    useEffect(() => {
        const margin = { top: 50, right: 50, bottom: 50, left: 50 }
        const width = 500 - margin.left - margin.right
        const height = 500 - margin.top - margin.bottom

        const svg = d3
            .select("#graph")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`)
        
        const x = d3.scaleLinear().domain([0, 100]).range([0, width])
        const y = d3.scaleLinear().domain([0, 100]).range([height, 0])

        svg
            .append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(x))

        svg
            .append("g")
            .call(d3.axisLeft(y))
    }, [])

    return (
        <svg
            id="graph"
            height={500}
            width={500}
        />
    )
}

export default GraphOutput