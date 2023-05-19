import Done from "./Done";
import Verified from "./Verified";
import Issue from "./Issue";
import Warning from "./Warning";
import Views from "./Views";


function MessagesList() {
  return (
    <div className="flex flex-wrap justify-between gap-[15px] mt-8">
      <Done/>
      <Verified/>
      <Issue/>
      <Warning/>
      <Views/>
      

    </div>
  );
}

export default MessagesList;





