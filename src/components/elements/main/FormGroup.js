// Create function
function FormGroup(props) {
    if (props.type !== 'textarea') {
        return (
            <section>
                <label htmlFor={props.label} title={props.tooltip}>{props.display}</label>
                <input
                    type={props.type}
                    name={props.label}
                    value={props.value}
                    onChange={props.onChange}
                />
            </section>
        )
    } else {
        return (
            <section>
                <label htmlFor={props.label} title={props.tooltip}>{props.display}</label>
                <textarea
                    cols="30" 
                    rows="10"
                    name={props.label}
                    value={props.value}
                    onChange={props.onChange}
                />
            </section>
        )
    }
}

// Export function
export default FormGroup