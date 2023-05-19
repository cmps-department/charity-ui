import favorites from "../images/title/favorites.png";

import Title from "../components/Title";
import CardList from "../components/CardList";

function FavoritesPage() {
  return (
    <>
      <Title imageUrl={favorites} alt="heart" title="Обране"/>
      <CardList />
    </>
  );
}

export default FavoritesPage;
