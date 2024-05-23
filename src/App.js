import React, { useState, useEffect, useCallback } from 'react';
import AuthButton from './AuthComponent';
import { AuthService } from './utils/authService';
import axios from 'axios';
import './App.css';

const App = () => {
    const [balance, setBalance] = useState('0');
    const [walletAddress, setWalletAddress] = useState('0x0');

    const getBalance = useCallback(async () => {
        try {
            if (AuthService.isAuthenticated()) {
                setBalance(1);
                setWalletAddress(AuthService.walletAddress());

                console.log('email:', AuthService.email());
                console.log('jwt:', AuthService.jwt());
                console.log('wallet:', AuthService.walletAddress());
                console.log('nonce_token:', AuthService.nonceToken());

                axios
                    .post(
                        'http://54.95.68.79:3000/api/v1/oauth',
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
            }
        } catch (error) {
            console.log({ error });
        } finally {
        }
    });

    useEffect(() => {
        getBalance();
    }, [getBalance]);

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
