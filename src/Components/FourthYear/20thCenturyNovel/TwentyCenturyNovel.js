import React from 'react';
import useAuth from '../../../hooks/useAuth';

const TwentyCenturyNovel = () => {
    const user = useAuth();
    console.log(user.user.displayName)
    return (
        <div>
            <h4>Twenty Century Novel</h4>
            <p>name: {user.user.displayName}</p>
        </div>
    );
};

export default TwentyCenturyNovel;