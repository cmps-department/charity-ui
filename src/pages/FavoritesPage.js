import favorites from "../images/title/favorites.png";


import Title from "../components/Title";
import CardList from "../components/CardList";

function FavoritesPage() {
  return (
    <main className="container max-w-xl mx-auto my-15 px-4">
      <Title imageUrl={favorites} alt="heart" title="Обране"/>
      <CardList />
    </main>
  );
}

export default FavoritesPage;
