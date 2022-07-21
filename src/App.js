import React, { useState } from 'react';
import HomeScreen from './components/HomeScreen';
import QuestionsScreen from './components/QuestionsScreen';

export default function App() {
const [visible, setVisible] = useState(true);

    return (
        <>
        {visible ? <HomeScreen setVisible={setVisible}/> : <QuestionsScreen />}
        </>
    );
}

