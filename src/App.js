import React, {useState, useEffect} from 'react';
import GlobalStyle from './Styles/global';
import Header from './components/Header';
import Resume from './components/Resume';
import Form from './components/Form';

const App = () => {
    const data = localStorage.getItem("transactions")

    return (
        <>
        <Header/>
        <Resume/>
        <Form/>
        <GlobalStyle />
        </>
    );
};

export default App;

