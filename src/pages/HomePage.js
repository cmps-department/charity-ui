import heart from "../images/heart.png";

function HomePage() {
  return (
    <main>
      <div className="container px-6">
        <h1 className="font-bold text-3xl">
          <img src={heart} alt="Heart" className="inline-block mr-[15px]" />
          Привіт, волонтере !
        </h1>
      </div>
    </main>
  );
}

export default HomePage;
