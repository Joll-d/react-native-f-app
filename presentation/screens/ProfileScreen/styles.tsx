import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 16,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
    infoContainer: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
});


export default styles;
