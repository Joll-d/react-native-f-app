import React from 'react';
import Navigation from './app/navigation/Navigation';
import {RootSiblingParent} from 'react-native-root-siblings';

const App: React.FC = () => {
    return (
        <RootSiblingParent>
            <Navigation/>
        </RootSiblingParent>
    );
};

export default App;