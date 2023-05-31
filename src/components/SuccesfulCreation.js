import succesfulCreation from "../images/messagesImg/succesful-creation.png";

function SuccesfulCreation() {
    return (
        <div className="bg-succesful text-white flex justify-center items-center gap-4 rounded-3xl py-1 mt-4">
            <img src={succesfulCreation} alt="succesful creation" />
            <span>Оголошення передано на розгляд</span>
        </div>
    )
}

export default SuccesfulCreation;