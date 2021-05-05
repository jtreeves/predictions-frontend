import Table from "../../middleware/Table";

// Create function
function Welcome() {
    return (
        <div>
            <h1>Welcome</h1>
            <p>Use our site to get regression models for any data set you enter.</p>
            <Table 
                headers={['independent', 'dependent']}
                points={[
                    { x: 21, y: 78 },
                    { x: 55, y: 49 },
                    { x: 34, y: 96 }
                ]}
            />
        </div>
    )
}

// Export function
export default Welcome