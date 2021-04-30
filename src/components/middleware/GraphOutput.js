import { useEffect } from 'react'
import * as d3 from 'd3'

function GraphOutput() {
    useEffect(() => {
        const svg = d3.select("#graph")
        svg
            .append("circle")
            .attr("cx", 100)
            .attr("cy", 100)
            .attr("r", 50)
            .style("fill", "blue")
        svg
            .append("circle")
            .attr("cx", 200)
            .attr("cy", 200)
            .attr("r", 50)
            .style("fill", "red")
        svg
            .append("circle")
            .attr("cx", 300)
            .attr("cy", 300)
            .attr("r", 50)
            .style("fill", "green")
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