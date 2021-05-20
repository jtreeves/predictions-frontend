import Latex from 'react-latex'

function MathDepth() {
    const correlation = `$ r = \\sqrt{1 - \\frac{SS_{res}}{SS_{dev}}} $`
    const linearEquation = `$ y = a \\cdot x + b $`
    const quadraticEquation = `$ y = a \\cdot x^2 + b \\cdot x + c $`
    const cubicEquation = `$ y = a \\cdot x^3 + b \\cdot x^2 + c \\cdot x + d $`
    const hyperbolicEquation = `$ y = a \\cdot \\frac{1}{x} + b $`
    const exponentialEquation = `$ y = a \\cdot b^x $`
    const logarithmicEquation = `$ y = a \\cdot \\ln(x) + b $`
    const logisticEquation = `$ y = \\frac{a}{1 + \\text{e}^{-b \\cdot (x - c)}} $`
    const sinusoidalEquation = `$ y = a \\cdot \\sin(b \\cdot (x - c)) + d $`

    return (
        <article>
            <p>
                For those interested in the equations behind the results, here's a run-down of some of the major ones.
            </p>

            <ul>
                <li>
                    <mark>
                        Correlation Coefficient
                    </mark>

                    <Latex>{correlation}</Latex>
                </li>
                
                <li>
                    <mark>
                        Equations
                    </mark>

                    <span>
                        Standard forms for each function type
                    </span>

                    <ul>
                        <li>
                            <mark>
                                Linear
                            </mark>

                            <Latex>
                                {linearEquation}
                            </Latex>
                        </li>
                        
                        <li>
                            <mark>
                                Quadratic
                            </mark>

                            <Latex>
                                {quadraticEquation}
                            </Latex>
                        </li>
                        
                        <li>
                            <mark>
                                Cubic
                            </mark>

                            <Latex>
                                {cubicEquation}
                            </Latex>
                        </li>
                        
                        <li>
                            <mark>
                                Hyperbolic
                            </mark>

                            <Latex>
                                {hyperbolicEquation}
                            </Latex>
                        </li>
                        
                        <li>
                            <mark>
                                Exponential
                            </mark>

                            <Latex>
                                {exponentialEquation}
                            </Latex>
                        </li>
                        
                        <li>
                            <mark>
                                Logarithmic
                            </mark>

                            <Latex>
                                {logarithmicEquation}
                            </Latex>
                        </li>
                        
                        <li>
                            <mark>
                                Logistic
                            </mark>

                            <Latex>
                                {logisticEquation}
                            </Latex>
                        </li>
                        
                        <li>
                            <mark>
                                Sinusoidal
                            </mark>

                            <Latex>
                                {sinusoidalEquation}
                            </Latex>
                        </li>
                    </ul>
                </li>
            </ul>
        </article>
    )
}

export default MathDepth