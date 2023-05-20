import inf from "../../images/messagesImg/Attention.png";

function Warning() {
  return (
    <>
      <div className="w-full bg-gradient-to-br from-sky-100 to-sky-300 rounded-3xl flex p-6">
        <div className="flex flex-col justify-center align-center">
          <img
            src={inf}
            alt="inf"
            style={{ width: "250px", height: "200px" }}
          />
        </div>
        <div className="p-4 flex flex-col justify-center mx-auto">
          <div className="flex items-center my-4">
            <h2 className="text-4xl font-bold mb-2 text-left">
              Зверніть увагу!
            </h2>
          </div>
          <p className="text-gray-700 text-xl text-left my-4">
            У Вас є оголошення, якому вже більше 3 місяців. Будь ласка,
            перевірте актуальність збору.
          </p>
          <p className="text-gray-700 text-xl text-left my-4">
            Оголошення:
            https://www.figma.com/file/429z7x135iGDmmGkkXGzkN/Project?type=design&node-id=531-1993&t=tTY2yWOfyaeX0WJz-4
          </p>
        </div>
      </div>
    </>
  );
}

export default Warning;
