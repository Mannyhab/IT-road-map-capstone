import React from 'react';
import DescriptionComponent from './DescriptionComponent';

function SoftwareDevelopment() {
    const description = "Software development involves the process of designing and creating computer software.";

    return (
        <DescriptionComponent 
            title="Software Development" 
            description={description} 
            buttonText="Explore More"
            onButtonClick={() => {
                // Use React Router's useHistory to navigate to the SoftwareDevelopmentPage
            }}
        />
    );
}

export default SoftwareDevelopment;

