import React, { useEffect } from "react";
import { GoogleReviewsSection, Title } from "./GoogleReviews.styled";

const GoogleReviews: React.FC = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://static.elfsight.com/platform/platform.js";
        script.async = true;
        script.onload = () => {
        // Skrypt został załadowany
        };
        document.body.appendChild(script);
    })

    return <GoogleReviewsSection>
        <Title>Opinie naszych klientów</Title>
        <div className="elfsight-app-202b3f18-4694-46fa-b129-e2b07cead9ba" data-elfsight-app-lazy></div>
    </GoogleReviewsSection>;
};

export default GoogleReviews;
