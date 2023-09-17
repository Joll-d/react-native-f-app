import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Barcode from "react-native-barcode-builder";
import {styles} from "./styles";

const CodesScreen: React.FC = () => {
    const [activeScreen, setActiveScreen] = useState('QRCode');
    const [inputText, setInputText] = useState(' ');

    const toggleScreen = () => {
        setActiveScreen(activeScreen === 'QRCode' ? 'Barcode' : 'QRCode');
    };

    return (
        <View>
            <Button title="Toggle Screen" onPress={toggleScreen} />
            <View style={[{backgroundColor: "white"}, {margin: 10}]}>
                <Text>Enter Text:</Text>
                <TextInput
                    style={{ borderWidth: 1, borderColor: 'gray', marginBottom: 10 }}
                    onChangeText={(text) => setInputText(text)}
                    value={inputText}
                />
                {activeScreen === 'QRCode' && (<QRCode value={inputText} size={200} />)}
                {activeScreen === 'Barcode' && (<Barcode value={inputText} format="CODE128" width={2} height={60}/>)}
            </View>
        </View>
    );
};

export { CodesScreen };
