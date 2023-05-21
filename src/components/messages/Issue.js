import error from "../../images/messagesImg/Error.png";

function Issue() {
  return (
    <>
      <div
        className="w-full bg-gradient-to-br from-or-300 from-0% to-or-500
                       to-100% rounded-3xl flex p-6"
      >
        <div className="flex flex-col justify-center align-center">
          <img
            src={error}
            alt="error"
            style={{ width: "200px", height: "200px" }}
          />
        </div>
        <div className="p-4 flex flex-col justify-center mx-auto">
          <div className="flex items-center my-4">
            <h2 className="text-4xl font-bold mb-2 text-left">Упс!</h2>
          </div>
          <p className="text-gray-700 text-xl text-left my-4">
            На жаль, Ваше оголошення від 30.04.2023 не пройшло перевірку.
          </p>
          <p className="text-gray-700 text-xl text-left my-4">
            Причина: “Недостовірні дані оплати. Спробуйте знову та укажіть
            коректні дані.”
          </p>
          <p className="text-gray-700 text-xl text-left my-4">
            Модератор: 012345
          </p>
        </div>
      </div>
    </>
  );
}

export default Issue;
