import SpreadsheetInput from "../../middleware/SpreadsheetInput";

// Create function
function Welcome() {
    return (
        <div>
            <h1>Welcome</h1>
            <p>Use our site to get regression models for any data set you enter.</p>
            <SpreadsheetInput />
        </div>
    )
}

// Export function
export default Welcome