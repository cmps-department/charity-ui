import spinner from '../images/spinner.svg';


function Spinner({ width = 150, padding = 200 }) {
    return (
        <div className={`py-[${padding}px] flex justify-center items-center`}>
            <img width={width}  src={spinner} alt="spinner" />
        </div>
    )
}

export default Spinner;