import './LoadSpinner.scss'

const LoadSpinner = () => {
    return (
        <div className='ldsContainer'>
        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default LoadSpinner
