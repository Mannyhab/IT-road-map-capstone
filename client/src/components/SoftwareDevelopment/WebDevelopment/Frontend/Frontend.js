import React from 'react';
import { Link } from 'react-router-dom';
import DescriptionComponent from '../../DescriptionComponent';
function Frontend() {
    const description = "Frontend Development is all about creating visual elements that users see and interact within a web application.";

    return (
        <DescriptionComponent 
            title="Frontend Development" 
            description={description} 
            buttonText="Explore Technology Stack"
            onButtonClick={() => {
                // Use React Router's useHistory to navigate to the FrontendStacksPage
            }}
        />
    );
}

export default Frontend;
