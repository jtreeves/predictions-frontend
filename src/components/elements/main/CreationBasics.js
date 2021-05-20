function CreationBasics() {
    return (
        <article>
            <p>
                You only need to fill out a simple form with a few basics bits of information to generate a complete analysis.
            </p>

            <h3>Inputs</h3>

            <ul>
                <li>
                    <mark>
                        Title
                    </mark>
                    
                    <span>
                        An overarching description of your data set (e.g., Maximize Profits)
                    </span>
                </li>

                <li>
                    <mark>
                        Independent
                    </mark>

                    <span>
                        The independent variable of your data set (e.g., units)
                    </span>
                </li>
                
                <li>
                    <mark>
                        Dependent
                    </mark>

                    <span>
                        The dependent variable of your data set (e.g., dollars)
                    </span>
                </li>
                
                <li>
                    <mark>
                        Precision
                    </mark>

                    <span>
                        How many digits you want to include in your results (e.g., 3 would mean your results would be rounded to the thousandth's place)
                    </span>
                </li>
                
                <li>
                    <mark>
                        Data Set
                    </mark>

                    <span>
                        The actual numbers you want to analyze, presented as coordinate pairs (e.g., [[34, 57], [38, 63], [46, 72]])
                    </span>
                </li>
            </ul>

            <h3>Example</h3>

            <img 
                src="/images/create-new-data-set.png" 
                alt="Create New Data Set" 
            />
        </article>
    )
}

export default CreationBasics