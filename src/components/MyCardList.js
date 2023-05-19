import MyCard from "./MyCard";

function MyCardList() {
  return (
    <div className="flex flex-wrap justify-between gap-[15px] mt-8">
      <MyCard />
      <MyCard />
      <MyCard />
      <MyCard />
      <MyCard />
      <MyCard />
      <MyCard />
      <MyCard />
    </div>
  );
}

export default MyCardList;
