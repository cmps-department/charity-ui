import inf from "../../images/messagesImg/Attention.png";

function Views() {
  return (
    <>
      <div className="w-full bg-gradient-to-br from-sky-100 to-sky-300 rounded-3xl flex p-6">
            <div className="flex flex-col justify-center align-center">
            <img src={inf} alt="inf" style={{width: '230px', height: '200px' }}/>
            </div>
        <div className="p-4 flex flex-col justify-center mx-auto">
          <div className="flex items-center my-4">
            <h2 className="text-4xl font-bold mb-2 text-left">
              Перегляди</h2>
          </div>
          <p className="text-gray-700 text-xl text-left my-4">
            Ваше оголошення від 23.04.2023 переглянули 1 000 людей! 
            Сподіваємось, що незабаром збір буде закрито.</p>
        </div>
      </div>
    </>
  );
}

export default Views;
