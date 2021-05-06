// Import internal component
import FormGroup from '../main/FormGroup'

// Create function
function CreateSet(props) {
    return (
        <section>
            <h1>{props.heading}</h1>

            <form onSubmit={props.handleSubmit}>
                <FormGroup
                    type="text"
                    label="title"
                    value={props.title}
                    display="Title"
                    tooltip="What do you want to call this data set?"
                    onChange={props.handleTitle}
                />

                <FormGroup
                    type="text"
                    label="independent"
                    value={props.independent}
                    display="Independent"
                    tooltip="What is the input variable?"
                    onChange={props.handleIndependent}
                />

                <FormGroup
                    type="text"
                    label="dependent"
                    value={props.dependent}
                    display="Dependent"
                    tooltip="What is the output variable"
                    onChange={props.handleDependent}
                />

                <FormGroup
                    type="number"
                    label="precision"
                    value={props.precision}
                    display="Precision"
                    tooltip="When it comes to rounding, how many decimal places do you want to use?"
                    onChange={props.handlePrecision}
                />

                <FormGroup
                    type="text"
                    label="dataSet"
                    value={props.dataSet}
                    display="Data Set"
                    tooltip="What is the complete data set?"
                    onChange={props.handleDataSet}
                />
                
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

// Export function
export default CreateSet