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

                (window.location.href =
                    '/auth?nonce_token=' +
                        sessionStorage.getItem('nonce_token') ?? ''),
                    nonceToken;
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
