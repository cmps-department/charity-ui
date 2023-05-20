import verified from "../../images/messagesImg/Verified.png";

function Verified() {
  return (
    <>
      <div
        className="w-full bg-gradient-to-br from-gr-300 from-0% to-gr-500
                       to-100% rounded-3xl flex p-6"
      >
        <div className="flex flex-col justify-center align-center">
          <img
            src={verified}
            alt="verified"
            style={{ width: "250px", height: "200px" }}
          />
        </div>
        <div className="p-4 flex flex-col justify-center mx-auto">
          <div className="flex items-center my-4">
            <h2 className="text-4xl font-bold mb-2 text-left">Перевірено!</h2>
          </div>
          <p className="text-gray-700 text-xl text-left my-4">
            Ваше оголошення від 01.05.2023 пройшло перевірку.
          </p>
          <p className="text-gray-700 text-xl text-left my-4">
            Подивитись:
            https://www.figma.com/file/429z7x135iGDmmGkkXGzkN/Project?type=design&node-id=531-1993&t=tTY2yWOfyaeX0WJz-4
          </p>
          <p className="text-gray-700 text-xl text-left my-4">
            Модератор: 039355
          </p>
        </div>
      </div>
    </>
  );
}

export default Verified;
