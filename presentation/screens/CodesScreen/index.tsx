import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
// import Barcode from 'react-native-barcode-builder';

const QRCodeScreen: React.FC = () => {
    return (
        <View>
            <Text>This is the QRCode Screen</Text>
        </View>
    );
};

const BarcodeScreen: React.FC = () => {
    return (
        <View>
            <Text>This is the Barcode Screen</Text>
        </View>
    );
};

const CodesScreen: React.FC = () => {
    const [activeScreen, setActiveScreen] = useState('QRCode');
    const [inputText, setInputText] = useState('');

    const toggleScreen = () => {
        setActiveScreen(activeScreen === 'QRCode' ? 'Barcode' : 'QRCode');
    };

    const generateQRCode = () => {
        if (inputText) {
            return <QRCode value={inputText} size={200} />;
        } else {
            return <Text>No input text for QRCode</Text>;
        }
    };

    const generateBarcode = () => {
        if (inputText) {
            return <Text>Barcode</Text>
        } else {
            return <Text>No input text for Barcode</Text>;
        }
    };

    return (
        <View>
            <Button title="Toggle Screen" onPress={toggleScreen} />
            <View>
                <Text>Enter Text:</Text>
                <TextInput
                    style={{ borderWidth: 1, borderColor: 'gray', marginBottom: 10 }}
                    onChangeText={(text) => setInputText(text)}
                    value={inputText}
                />
                {activeScreen === 'QRCode' && generateQRCode()}
                {activeScreen === 'Barcode' && generateBarcode()}
            </View>
        </View>
    );
};

export { CodesScreen };
