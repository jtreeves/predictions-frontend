function FormItem(props) {
    const label = <label 
        htmlFor={props.label} 
        title={props.tooltip}
    >
        {props.display}
    </label>

    if (props.type !== 'textarea') {
        return (
            <p>
                {label}
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
                {label}
                <textarea
                    name={props.label}
                    value={props.value}
                    onChange={props.onChange}
                />
            </p>
        )
    }
}

export default FormItem