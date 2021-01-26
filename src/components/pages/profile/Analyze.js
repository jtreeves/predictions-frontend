// Create function
function Analyze(props) {
    return (
        <div>
            <h1>Analyze</h1>
            <p><strong>Title:</strong> {props.user.title}</p>
            <p><strong>ID:</strong> {props.user.id}</p>
        </div>
    )
}

// Export function
export default Analyze