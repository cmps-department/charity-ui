import spinner from '../images/spinner.svg';


function Spinner() {
    return (
        <div className='py-[200px] flex justify-center items-center'>
            <img width={150}  src={spinner} alt="spinner" />
        </div>
    )
}

export default Spinner;