import { useSelector, useDispatch } from "react-redux";

import {
  setDiscription,
  setFinalAmount,
  setDonationLink,
  setDonationCards,
  setPhone,
} from "../store/slices/postCreationSlice";

import info from "../images/info.png";

function PostForm() {
  const {
    description,
    finalAmount,
    donationLink,
    donationCards,
    phone,
  } = useSelector((state) => state.postData);

  const dispatch = useDispatch();

  return (
    <>
      <h2 className="font-bold text-xl mb-5 mt-7">Опис*</h2>
      <textarea
        value={description}
        onChange={(e) => dispatch(setDiscription(e.target.value))}
        id="description"
        name="description"
        placeholder="Опишіть на що Ви збираєте гроші..."
        className="block w-full border border-input rounded-3xl p-5.5 mb-3 h-80 min-h-[350px] max-h-[500px]"
        required
        minLength={90}
        maxLength={9000}
      />
      <div className="flex justify-between">
        <span>
          {description.length < 90
            ? `Напишіть ще ${90 - description.length} символів`
            : null}
        </span>
        <span>{`${description.length}/9000`}</span>
      </div>
      <h2 className="font-bold text-xl mb-5 mt-7">Дані*</h2>
      <input
        value={finalAmount}
        onChange={(e) => dispatch(setFinalAmount(parseInt(e.target.value)))}
        id="finalAmount"
        name="finalAmount"
        type="number"
        placeholder="Потрібна сума"
        className="px-5 py-2.5 appearance-none border border-input rounded-3xl mr-3.5"
        required
        min={0}
      />
      <span>грн.</span>
      <p className="my-5">Варіанти для донатів</p>
      <label
        htmlFor="donationLink"
        className="flex justify-between gap-x-12 mb-5"
      >
        <input
          value={donationLink}
          onChange={(e) => dispatch(setDonationLink(e.target.value))}
          id="donationLink"
          name="donationLink"
          type="url"
          placeholder="Швидке посилання"
          className="px-5 py-2.5 appearance-none border border-input rounded-3xl w-5/12"
          required
        />
        <p className="w-right-section">
          Саме сюди будуть перенаправленні користувачі, натискаючи кнопу
          “Задонатити”. Це може бути як номер картки, так і посилання на
          Моно-банку або інший сервіс.
        </p>
      </label>
      <textarea
        value={donationCards}
        onChange={(e) => dispatch(setDonationCards(e.target.value))}
        id="donationCards"
        name="donationCards"
        placeholder="Напишіть ще варіанти, куди можна задонатити"
        className="block border border-input rounded-3xl p-5.5 mb-7 w-5/12 h-80 min-h-[350px] max-h-[500px]"
      />
      <p className="my-5">Контакти</p>
      <input
        value={phone}
        onChange={(e) => dispatch(setPhone(e.target.value))}
        id="phone"
        name="phone"
        type="tel"
        placeholder="Номер телефону"
        className="block px-5 py-2.5 mb-7 appearance-none border border-input rounded-3xl w-5/12"
        required
      />
      <div className="flex">
        <button
          type="submit"
          className="w-5/12 box-border ease-in duration-200 
                font-semibold uppercase 
                bg-primary-100 text-center py-3 rounded-3xl border-3 border-primary-100 hover:bg-transparent mr-12"
        >
          Опублікувати
        </button>
        <div className="w-right-section flex gap-3.5">
          <p className="min-w-[30px] flex flex-col justify-center">
            <img
              src={info}
              alt="additional Information"
              className="inline-block"
            />
          </p>
          <p className="flex-grow">
            Для завантаження оголошення на сайт потрібен деякий час на
            модерацію. Це може зайняти деякий час, після чого ви отримаєте
            повідомлення про успіх.
          </p>
        </div>
      </div>
    </>
  );
}

export default PostForm;
