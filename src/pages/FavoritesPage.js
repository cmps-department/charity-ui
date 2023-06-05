import favorites from "../images/title/favorites.png";

import Title from "../components/Title";
import Applications from "../components/Applications";

function FavoritesPage() {
  return (
    <>
      <Title imageUrl={favorites} alt="heart" title="Обране"/>
      <Applications />
    </>
  );
}

export default FavoritesPage;
