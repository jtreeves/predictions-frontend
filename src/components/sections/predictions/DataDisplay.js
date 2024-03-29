import OriginalData from '../../elements/predictions/OriginalData'
import TableOutput from '../../elements/predictions/TableOutput'

function DataDisplay(props) {
    return (
        <section 
            id="data-display"
        >
            <h2>Original Data</h2>
            
            <div>
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
                    initiated={props.initiated}
                    stored={props.stored}
                    source={props.source}
                />
            </div>
        </section>
    )
}

export default DataDisplay