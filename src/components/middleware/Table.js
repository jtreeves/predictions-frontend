import { useEffect } from 'react'
import * as d3 from 'd3'

function Table(props) {
    useEffect(() => {
        d3
            .select(".main-table")
            .remove()

        const table = d3
            .select(".table-of-data")
            .append("table")
            .attr("class", "main-table")
        
        const thead = table
            .append("thead")
        
        const tbody = table
            .append("tbody")
            
        thead
            .append("tr")
            .selectAll("th")
            .data(props.headers)
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
        <div className="table-of-data">
            <table className="main-table" />
        </div>
    )
}

export default Table