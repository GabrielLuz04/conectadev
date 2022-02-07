import React from 'react';

import { Header } from './components/Header';
import { Main } from './components/Main';
import './style.css';

export function Home() {
    return (
        <div className="page">
            <Header />
            <Main />
        </div>
    )
}