import done from "../../images/messagesImg/Done.png";

function Done() {
  return (
    <>
      <div
        className="w-full bg-gradient-to-br from-or-300 from-0% to-or-500
                       to-100% rounded-3xl flex p-6"
      >
        <div className="flex flex-col justify-center align-center">
          <img
            src={done}
            alt="done"
            style={{ width: "250px", height: "200px" }}
          />
        </div>
        <div className="p-4 flex flex-col justify-center mx-auto">
          <div className="flex items-center my-4">
            <h2 className="text-4xl font-bold mb-2 text-left">
              Ми закрили збір!
            </h2>
          </div>
          <p className="text-gray-700 text-xl text-left my-4">
            Збір від Володимира Андрєєва був закритий! Дякуємо кожному, за
            допомогу. Тепер Ви можете перейти та подивитися на звіт автора.
          </p>
        </div>
      </div>
    </>
  );
}

export default Done;
