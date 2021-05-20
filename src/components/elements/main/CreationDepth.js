function CreationDepth() {
    const bracesExample = '{17, 42}, {23, 35}, {41, 66}'

    return (
        <article>
            <p>
                You should keep a few things in mind when filling out the form to create a new data set.
            </p>

            <h3>Formats</h3>

            <ul>
                <li>
                    <mark>
                        Independent and dependent variable names should be short
                    </mark>
                    
                    <span>
                        While there isn't a strict limit on the length of either of these variables, the shorter the better (aim for just one word)
                    </span>
                </li>
                
                <li>
                    <mark>
                        Precision must be a positive integer
                    </mark>

                    <span>
                        You can't enter a letter, a negative number, or a decimal value (or zero)
                    </span>
                </li>
                
                <li>
                    <mark>
                        Data sets must be added as a list of coordinate pairs
                    </mark>

                    <span>
                        You have a few options that will work
                    </span>

                    <ul>
                        <li>
                            <span>
                                Coordinate pairs in parentheses separated by semicolons
                            </span>
                            
                            <span>
                                (17, 42); (23, 35); (41, 66)
                            </span>
                        </li>
                        
                        <li>
                            <span>
                                Coordinate pairs in brackets separated by commas
                            </span>

                            <span>
                                [17, 42], [23, 35], [41, 66]
                            </span>
                        </li>
                        
                        <li>
                            <span>
                                Any permutation of those options enclosed by brackets (note: all data sets will be converted to this format)
                            </span>

                            <span>
                                [[17, 42], [23, 35], [41, 66]]
                            </span>
                        </li>
                    </ul>

                    <span>
                        Along with a few options that will not work
                    </span>

                    <ul>
                        <li>
                            <span>
                                Using spaces instead of commas to separate numbers in coordiante pairs
                            </span>

                            <span>
                                (17 42) (23 35) (41 66)
                            </span>
                        </li>
                        
                        <li>
                            <span>
                                Using braces instead of parentheses or brackets for containing coordinate pairs
                            </span>

                            <span>
                                {bracesExample}
                            </span>
                        </li>
                        
                        <li>
                            <span>
                                Not providing exactly two numbers for each coordinate pair
                            </span>

                            <span>
                                (17, 42, 56); (23, 35, 78); (41, 66, 21)
                            </span>
                        </li>
                    </ul>
                </li>

                <li>
                    <mark>
                        Data sets must contain at least ten coordinate pairs
                    </mark>

                    <span>
                        [[1, 53], [2, 58], [3, 66], [4, 73], [5, 80], [6, 87], [7, 89], [8, 88], [9, 83], [10, 74], [11, 64], [12, 55]]
                    </span>
                </li>
            </ul>
        </article>
    )
}

export default CreationDepth