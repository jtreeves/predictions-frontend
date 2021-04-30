import GraphOutput from "../../middleware/GraphOutput";

// Create function
function Welcome() {
    return (
        <div>
            <h1>Welcome</h1>
            <p>Use our site to get regression models for any data set you enter.</p>
            <GraphOutput />
        </div>
    )
}

// Export function
export default Welcome