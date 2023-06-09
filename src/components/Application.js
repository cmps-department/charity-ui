import { useNavigate } from "react-router-dom";
import { useUpdatePostMutation } from "../store/api/ApplicationApi";
import useUserInfo from "../hooks/useUserInfo";

import Image from "./Image";

const Application = ({ application }) => {
  const { id, authorId, fullDescription, targetAmount, donationLink, images, status } = application;
  const [updatePost] = useUpdatePostMutation();
  const user = useUserInfo(authorId);
  const navigate = useNavigate();

  function handleUpdate(newStatus) {
    const data = JSON.parse(JSON.stringify(application));
    data.status = newStatus;
    updatePost(data);
  }

  function handleNavigate(e) {
    const tagName = e.target.tagName;
    if (tagName === "A" || tagName === "BUTTON") return;
    if (status === "APPROVED") {
      navigate(`/applications/${id}`);
    } else if (status === "PENDING") {
      navigate(`/moderatedApplications/${id}`);
    }
  }

  return (
    <div
      className="max-w-[300px] bg-primary-400 border accent-200 rounded-3xl p-5 
                    outline outline-3 outline-transparent outline-offset-[-3px]
                    hover:outline-primary-100 ease-in duration-200 cursor-pointer"
      onClick={handleNavigate}
    >
      <div className="w-[256px] h-[256px] mb-[30px] overflow-hidden rounded-xl">
        <Image
          className="inline-block w-full h-full object-cover"
          size={{ width: 256, height: 256 }}
          imageId={images[0]}
          alt="application image"
        />
      </div>

      <div>
        <h5 className="max-w-[300px] font-bold uppercase text-xl mb-4">
          {`${user?.firstName} ${user?.lastName}`}
        </h5>

        <p className="font-normal text-100 mb-8">
          {fullDescription.length > 60
            ? fullDescription.slice(0, 60) + "..."
            : fullDescription}
        </p>
        <div className="text-center mb-3 flex justify-between items-center">
          <p className="font-normal text-100">Кінцева сума:</p>
          <p className="text-100 text-2xl font-semibold">{targetAmount}₴</p>
        </div>
        <div>
          {status === "APPROVED" ? (
            <div>
              <a
                href={donationLink}
                rel="noreferrer"
                target="_blank"
                className="max-w-[300px] block box-border ease-in duration-200 
                          font-semibold uppercase 
                          bg-primary-100 text-center py-3 rounded-xl border-3 border-primary-100 hover:bg-transparent"
              >
                Задонатити
              </a>
            </div>
          ) : null}
          {status === "PENDING" ? (
            <div className="flex justify-between font-bold mb-1">
              <button
                onClick={() => handleUpdate("REJECTED")}
                className="text-reject"
              >
                Відхилити
              </button>
              <button
                onClick={() => handleUpdate("APPROVED")}
                className="text-approve"
              >
                Схвалити
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Application;
