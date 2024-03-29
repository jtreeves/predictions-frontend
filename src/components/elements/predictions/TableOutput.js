import { useEffect } from 'react'
import * as d3 from 'd3'

function TableOutput(props) {
    const headers = [
        props.independent,
        props.dependent
    ]

    useEffect(() => {
        d3
            .select("#main-table")
            .remove()

        const table = d3
            .select("#table-container")
            .append("table")
            .attr("id", "main-table")
        
        const thead = table
            .append("thead")
        
        const tbody = table
            .append("tbody")
            
        thead
            .append("tr")
            .selectAll("th")
            .data(headers)
            .enter()
            .append("th")
            .text((heading) => heading)

        const rows = tbody
            .selectAll("tr")
            .data(props.points)
            .enter()
            .append("tr")

        rows
            .append("td")
            .html((point) => point.x)
        
        rows
            .append("td")
            .html((point) => point.y)
    })

    return (
        <article id="table-container">
            <table id="main-table" />
        </article>
    )
}

export default TableOutput