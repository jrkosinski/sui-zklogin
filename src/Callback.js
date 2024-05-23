import React, { useEffect } from 'react';
import axios from 'axios';

const Callback = () => {
    useEffect(() => {
        const handleCallback = async () => {
            try {
                const params = new URLSearchParams(
                    window.location.hash.substring(1)
                );
                const jwtToken = params.get('id_token');

                sessionStorage.setItem('sui_jwt_token', jwtToken);

                const urlParams = new URLSearchParams(window.location.search);
                const nonceToken = urlParams.get('nonce_token');

                console.log('nonce from querystring:', nonceToken);
                if (nonceToken && nonceToken.length)
                    sessionStorage.setItem('nonce_token', nonceToken);

                window.location.href = '/auth';
            } catch (error) {
                console.error('Error handling callback:', error);
            }
        };

        handleCallback();
    }, []);

    return (
        <div>
            <p>Processing callback...</p>
        </div>
    );
};

export default Callback;
