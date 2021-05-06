import { useState } from 'react'
import Table from './Table'

function DisplayTable(props) {
    const [displayTable, setDisplayTable] = useState(false)
    const [table, setTable] = useState('')

    const handleDisplayTable = (e) => {
        e.preventDefault()
        if (displayTable) {
            setDisplayTable(false)
            setTable('')
        } else {
            setDisplayTable(true)
            setTable(<Table 
                independent={props.independent}
                dependent={props.dependent}
                points={props.points}
            />)
        }
    }

    const displayTableButton = []

    if (displayTable) {
        displayTableButton.push(<button onClick={handleDisplayTable}>Hide Table of Original Points</button>)
    } else {
        displayTableButton.push(<button onClick={handleDisplayTable}>Show Table of Original Points</button>)
    }

    return (
        <div>
            {displayTableButton}
            {table}
        </div>
    )
}

export default DisplayTable