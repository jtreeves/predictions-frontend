import { useState } from 'react'
import TableOutput from './TableOutput'

function DisplayTable(props) {
    const [display, setDisplay] = useState(false)
    const [table, setTable] = useState('')

    const handleDisplay = (e) => {
        e.preventDefault()
        if (display) {
            setDisplay(false)
            setTable('')
        } else {
            setDisplay(true)
            setTable(<TableOutput 
                independent={props.independent}
                dependent={props.dependent}
                points={props.points}
            />)
        }
    }

    const displayButton = []

    if (display) {
        displayButton.push(<button onClick={handleDisplay}>Hide Table of Original Points</button>)
    } else {
        displayButton.push(<button onClick={handleDisplay}>Show Table of Original Points</button>)
    }

    return (
        <section>
            {displayButton}
            {table}
        </section>
    )
}

export default DisplayTable