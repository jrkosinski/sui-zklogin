import React, { useState, useEffect, useCallback } from 'react';
import AuthButton from './AuthComponent';
import { AuthService } from './utils/authService';
import './App.css';

const App = () => {
    const [balance, setBalance] = useState('0');
    const [walletAddress, setWalletAddress] = useState('0x0');

    const getBalance = useCallback(async () => {
        try {
            if (AuthService.isAuthenticated()) {
                setBalance(1);
                setWalletAddress(AuthService.walletAddress());
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
            <h1>{walletAddress}</h1>
        </>
    );
};

export default App;
