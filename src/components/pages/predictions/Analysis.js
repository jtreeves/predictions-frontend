import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import HorizontalAxis from '../../utilities/predictions/HorizontalAxis'
import VerticalAxis from '../../utilities/predictions/VerticalAxis'
import CheckFavorite from '../../utilities/predictions/CheckFavorite'
import GraphSection from '../../elements/predictions/GraphSection'
import ExecutiveButtons from '../../elements/predictions/ExecutiveButtons'
import Note from '../../elements/predictions/Note'
import HighlightedModels from '../../elements/predictions/HighlightedModels'
import FutureEvaluations from '../../elements/predictions/FutureEvaluations'
import ModelsAnalyses from '../../elements/predictions/ModelsAnalyses'
import DataSection from '../../elements/predictions/DataSection'
import CheckExpiration from '../../utilities/users/CheckExpiration'

import '../../../style/analysis.css'

function Analysis(props) {
    CheckExpiration(props.user.exp, props.handleLogout)

    const location = useLocation()
    const models = location.state.models
    const opinions = location.state.opinions
    const stored = location.state.stored

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    const title = models.title
    const independent = models.independent
    const dependent = models.dependent
    const precision = models.precision
    const points = models.data_set
    const linearConstants = models.linear_coefficients
    const linearPoints = models.linear_points
    const linearCorrelation = models.linear_correlation
    const quadraticConstants = models.quadratic_coefficients
    const quadraticPoints = models.quadratic_points
    const quadraticCorrelation = models.quadratic_correlation
    const cubicConstants = models.cubic_coefficients
    const cubicPoints = models.cubic_points
    const cubicCorrelation = models.cubic_correlation
    const hyperbolicConstants = models.hyperbolic_coefficients
    const hyperbolicPoints = models.hyperbolic_points
    const hyperbolicCorrelation = models.hyperbolic_correlation
    const exponentialConstants = models.exponential_coefficients
    const exponentialPoints = models.exponential_points
    const exponentialCorrelation = models.exponential_correlation
    const logarithmicConstants = models.logarithmic_coefficients
    const logarithmicPoints = models.logarithmic_points
    const logarithmicCorrelation = models.logarithmic_correlation
    const logisticConstants = models.logistic_coefficients
    const logisticPoints = models.logistic_points
    const logisticCorrelation = models.logistic_correlation
    const sinusoidalConstants = models.sinusoidal_coefficients
    const sinusoidalPoints = models.sinusoidal_points
    const sinusoidalCorrelation = models.sinusoidal_correlation
    const bestFit = models.best_fit
    const source = models.source
    const favorite = opinions.favorite
    const note = opinions.note
    const user = props.user

    const originalPoints = []
    for (const point of points) {
        originalPoints.push({ x: point[0], y: point[1] })
    }

    let stringedDataSet = ''
    for (const point of points) {
        stringedDataSet += `[${point[0]}, ${point[1]}], `
    }
    const trimmedStringedData = stringedDataSet.slice(0, -2)
    const dataSet = '[' + trimmedStringedData + ']'
    
    const [displayLinear, setDisplayLinear] = useState(false)
    const [displayQuadratic, setDisplayQuadratic] = useState(false)
    const [displayCubic, setDisplayCubic] = useState(false)
    const [displayHyperbolic, setDisplayHyperbolic] = useState(false)
    const [displayExponential, setDisplayExponential] = useState(false)
    const [displayLogarithmic, setDisplayLogarithmic] = useState(false)
    const [displayLogistic, setDisplayLogistic] = useState(false)
    const [displaySinusoidal, setDisplaySinusoidal] = useState(false)
    const [displayOriginal, setDisplayOriginal] = useState(true)

    const [linearCoordinates, setLinearCoordinates] = useState('')
    const [quadraticCoordinates, setQuadraticCoordinates] = useState('')
    const [cubicCoordinates, setCubicCoordinates] = useState('')
    const [hyperbolicCoordinates, setHyperbolicCoordinates] = useState('')
    const [exponentialCoordinates, setExponentialCoordinates] = useState('')
    const [logarithmicCoordinates, setLogarithmicCoordinates] = useState('')
    const [logisticCoordinates, setLogisticCoordinates] = useState('')
    const [sinusoidalCoordinates, setSinusoidalCoordinates] = useState('')
    const [originalCoordinates, setOriginalCoordinates] = useState(originalPoints)

    const [zoom, setZoom] = useState(0)
    
    const allCoordinates = [originalCoordinates, linearCoordinates, quadraticCoordinates, cubicCoordinates, hyperbolicCoordinates, exponentialCoordinates, logarithmicCoordinates, logisticCoordinates, sinusoidalCoordinates]

    const xAxis = HorizontalAxis(originalPoints, zoom)
    const xMinimum = xAxis.minimum
    const xMaximum = xAxis.maximum
    const increment = xAxis.increment

    const yAxis = VerticalAxis(allCoordinates)
    const yMinimum = yAxis.minimum
    const yMaximum = yAxis.maximum

    CheckFavorite(
        favorite, 
        xMinimum, 
        xMaximum, 
        increment, 
        precision, 
        linearConstants, 
        setDisplayLinear, 
        setLinearCoordinates, 
        quadraticConstants, 
        setDisplayQuadratic, 
        setQuadraticCoordinates, 
        cubicConstants, 
        setDisplayCubic, 
        setCubicCoordinates, 
        hyperbolicConstants, 
        setDisplayHyperbolic, 
        setHyperbolicCoordinates, 
        exponentialConstants, 
        setDisplayExponential, 
        setExponentialCoordinates, 
        logarithmicConstants, 
        setDisplayLogarithmic, 
        setLogarithmicCoordinates, 
        logisticConstants, 
        setDisplayLogistic, 
        setLogisticCoordinates, 
        sinusoidalConstants, 
        setDisplaySinusoidal, 
        setSinusoidalCoordinates
    ) 

    return (
        <main>
            <h1>{title}</h1>

            <GraphSection 
                independent={independent}
                dependent={dependent}
                precision={precision}
                xMinimum={xMinimum}
                xMaximum={xMaximum}
                yMinimum={yMinimum}
                yMaximum={yMaximum}
                increment={increment}
                zoom={zoom}
                setZoom={setZoom}
                originalPoints={originalPoints}
                originalCoordinates={originalCoordinates}
                displayOriginal={displayOriginal}
                setDisplayOriginal={setDisplayOriginal}
                setOriginalCoordinates={setOriginalCoordinates}
                linearConstants={linearConstants}
                linearCoordinates={linearCoordinates}
                displayLinear={displayLinear}
                setDisplayLinear={setDisplayLinear}
                setLinearCoordinates={setLinearCoordinates}
                quadraticConstants={quadraticConstants}
                quadraticCoordinates={quadraticCoordinates}
                displayQuadratic={displayQuadratic}
                setDisplayQuadratic={setDisplayQuadratic}
                setQuadraticCoordinates={setQuadraticCoordinates}
                cubicConstants={cubicConstants}
                cubicCoordinates={cubicCoordinates}
                displayCubic={displayCubic}
                setDisplayCubic={setDisplayCubic}
                setCubicCoordinates={setCubicCoordinates}
                hyperbolicConstants={hyperbolicConstants}
                hyperbolicCoordinates={hyperbolicCoordinates}
                displayHyperbolic={displayHyperbolic}
                setDisplayHyperbolic={setDisplayHyperbolic}
                setHyperbolicCoordinates={setHyperbolicCoordinates}
                exponentialConstants={exponentialConstants}
                exponentialCoordinates={exponentialCoordinates}
                displayExponential={displayExponential}
                setDisplayExponential={setDisplayExponential}
                setExponentialCoordinates={setExponentialCoordinates}
                logarithmicConstants={logarithmicConstants}
                logarithmicCoordinates={logarithmicCoordinates}
                displayLogarithmic={displayLogarithmic}
                setDisplayLogarithmic={setDisplayLogarithmic}
                setLogarithmicCoordinates={setLogarithmicCoordinates}
                logisticConstants={logisticConstants}
                logisticCoordinates={logisticCoordinates}
                displayLogistic={displayLogistic}
                setDisplayLogistic={setDisplayLogistic}
                setLogisticCoordinates={setLogisticCoordinates}
                sinusoidalConstants={sinusoidalConstants}
                sinusoidalCoordinates={sinusoidalCoordinates}
                displaySinusoidal={displaySinusoidal}
                setDisplaySinusoidal={setDisplaySinusoidal}
                setSinusoidalCoordinates={setSinusoidalCoordinates}
            />

            <ExecutiveButtons 
                stored={stored}
                user={user}
                source={source}
                title={title}
                independent={independent}
                dependent={dependent}
                precision={precision}
                dataSet={points}
                favorite={favorite}
                note={note}
            />

            <Note 
                note={note}
                source={source}
            />

            <HighlightedModels 
                bestFit={bestFit}
                favorite={favorite}
            />

            <FutureEvaluations 
                independent={independent}
                dependent={dependent}
                precision={precision}
                xMinimum={xMinimum}
                xMaximum={xMaximum}
                linearConstants={linearConstants}
                displayLinear={displayLinear}
                quadraticConstants={quadraticConstants}
                displayQuadratic={displayQuadratic}
                cubicConstants={cubicConstants}
                displayCubic={displayCubic}
                hyperbolicConstants={hyperbolicConstants}
                displayHyperbolic={displayHyperbolic}
                exponentialConstants={exponentialConstants}
                displayExponential={displayExponential}
                logarithmicConstants={logarithmicConstants}
                displayLogarithmic={displayLogarithmic}
                logisticConstants={logisticConstants}
                displayLogistic={displayLogistic}
                sinusoidalConstants={sinusoidalConstants}
                displaySinusoidal={displaySinusoidal}
            />

            <ModelsAnalyses 
                precision={precision}
                linearConstants={linearConstants}
                linearCorrelation={linearCorrelation}
                linearPoints={linearPoints}
                displayLinear={displayLinear}
                quadraticConstants={quadraticConstants}
                quadraticCorrelation={quadraticCorrelation}
                quadraticPoints={quadraticPoints}
                displayQuadratic={displayQuadratic}
                cubicConstants={cubicConstants}
                cubicCorrelation={cubicCorrelation}
                cubicPoints={cubicPoints}
                displayCubic={displayCubic}
                hyperbolicConstants={hyperbolicConstants}
                hyperbolicCorrelation={hyperbolicCorrelation}
                hyperbolicPoints={hyperbolicPoints}
                displayHyperbolic={displayHyperbolic}
                exponentialConstants={exponentialConstants}
                exponentialCorrelation={exponentialCorrelation}
                exponentialPoints={exponentialPoints}
                displayExponential={displayExponential}
                logarithmicConstants={logarithmicConstants}
                logarithmicCorrelation={logarithmicCorrelation}
                logarithmicPoints={logarithmicPoints}
                displayLogarithmic={displayLogarithmic}
                logisticConstants={logisticConstants}
                logisticCorrelation={logisticCorrelation}
                logisticPoints={logisticPoints}
                displayLogistic={displayLogistic}
                sinusoidalConstants={sinusoidalConstants}
                sinusoidalCorrelation={sinusoidalCorrelation}
                sinusoidalPoints={sinusoidalPoints}
                displaySinusoidal={displaySinusoidal}
            />

            <DataSection 
                title={title}
                independent={independent}
                dependent={dependent}
                precision={precision}
                dataSet={dataSet}
                points={originalPoints}
                favorite={favorite}
                note={note}
                user={user}
                stored={stored}
                source={source}
            />
        </main>
    )
}

export default Analysis