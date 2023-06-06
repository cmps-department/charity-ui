import errorCreation from '../images/messagesImg/error-creation.png';

function ErrorCreation() {
    return (
        <div className='bg-error text-white flex justify-center items-center gap-4 rounded-3xl py-1 mt-4'>
            <img src={errorCreation} alt="error creation" />
            <span>Помилка створення оголошення</span>
        </div>
    )
}

export default ErrorCreation;