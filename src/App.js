import React, { useState, useEffect, useCallback } from 'react';
import AuthButton from './AuthComponent';
import { AuthService } from './authService';
import axios from 'axios';
import { config } from './config';
import './App.css';

const App = () => {
    const [walletAddress, setWalletAddress] = useState('0x0');

    const getData = useCallback(async () => {
        try {
            if (AuthService.isAuthenticated()) {
                setWalletAddress(AuthService.walletAddress());

                const urlParams = new URLSearchParams(window.location.search);
                const nonceToken = urlParams.get('nonce_token');

                console.log('nonce from querystring:', nonceToken);
                if (nonceToken && nonceToken.length)
                    sessionStorage.setItem('nonce_token', nonceToken);

                console.log('email:', AuthService.email());
                console.log('jwt:', AuthService.jwt());
                console.log('wallet:', AuthService.walletAddress());
                console.log('nonce_token:', AuthService.nonceToken());

                axios
                    .post(
                        config.API_URL,
                        {
                            username: AuthService.email(),
                            suiAddress: AuthService.walletAddress(),
                            oauthToken: AuthService.jwt(),
                            nonceToken: AuthService.nonceToken(),
                        },
                        {
                            headers: {
                                'content-type': 'application/json',
                            },
                        }
                    )
                    .then((response) => {
                        console.log(response);
                    });

                window.location.href = config.FINAL_REDIRECT_URL;
            }
        } catch (error) {
            console.log({ error });
        } finally {
        }
    });

    useEffect(() => {
        getData();
    }, [getData]);

    const logout = async () => {
        // logout
    };

    return (
        <>
            <AuthButton></AuthButton>
            <br />
            <b>{walletAddress}</b>
        </>
    );
};

export default App;
