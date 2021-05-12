function FormItem(props) {
    if (props.type !== 'textarea') {
        return (
            <p>
                <label htmlFor={props.label} title={props.tooltip}>{props.display}</label>
                <input
                    type={props.type}
                    name={props.label}
                    value={props.value}
                    onChange={props.onChange}
                />
            </p>
        )
    } else {
        return (
            <p>
                <label htmlFor={props.label} title={props.tooltip}>{props.display}</label>
                <textarea
                    cols="30" 
                    rows="10"
                    name={props.label}
                    value={props.value}
                    onChange={props.onChange}
                />
            </p>
        )
    }
}

export default FormItem