import { useAuth } from "react-oidc-context";
import { useGetPostsQuery } from "../store/api/ApplicationApi";
import jwtDecode from "jwt-decode";

import Application from "./Application";
import Spinner from './Spinner';

function Applications({ status = "APPROVED" }) {
  const { data, isLoading, isError, isSuccess } = useGetPostsQuery(status);
  console.log(status);
  console.log(data);
  
  function renderApplications() {
    return data.map((application) => (
        <Application application={application} key={application.id}/>
      ))
  }

  return (
    <div className="flex flex-wrap gap-[15px] mt-8">
      {isLoading ? <Spinner /> : null}
      {isError ? <p>Виникла помилка, повторіть запит пізніше...</p> : null}
      {isSuccess ? renderApplications() : null}
    </div>
  );
}

export default Applications;
