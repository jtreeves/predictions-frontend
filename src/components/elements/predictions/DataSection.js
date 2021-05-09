import OriginalData from './OriginalData'
import TableOutput from './TableOutput'

function DataSection(props) {
    return (
        <section className="data-section">
            <TableOutput 
                points={props.points}
                independent={props.independent}
                dependent={props.dependent}
            />

            <OriginalData 
                title={props.title}
                independent={props.independent}
                dependent={props.dependent}
                precision={props.precision}
                dataSet={props.dataSet}
                favorite={props.favorite}
                note={props.note}
                user={props.user}
                stored={props.stored}
                source={props.source}
            />
        </section>
    )
}

export default DataSection