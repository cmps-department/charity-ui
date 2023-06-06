import Title from "../components/Title";
import Applications from "../components/Applications";

import moderation from "../images/title/moderation.png";

function ModeratedApplicationsPage() {
    return (
        <>
            <Title imageUrl={moderation} alt="moderation" title="Оголошення - модерація" />
            <Applications status="PENDING" />
        </>
    )
}

export default ModeratedApplicationsPage;