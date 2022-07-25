import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const NCNDetails = () => {
    const {novelId} = useParams()
    
    return (
        <div>
            <h2>Details: {novelId}</h2>
        </div>
    );
};

export default NCNDetails;