import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, SIZES } from '../../../../constants';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    group: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginVertical: 10,
    },
    header: {
        marginTop: height * 0.2,
        marginBottom: 10,
        marginHorizontal: 20,
    },
    title: {
        color: COLORS.lightGreen,
        fontSize: 32,
        letterSpacing: 5,
        fontFamily: 'bold',
        textAlign: 'center',
    },
    text: {
        color: '#fff',
    },
    Register: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        flexDirection: 'row',
        backgroundColor: COLORS.lighterGreen,
    },
    textSign: {
        fontSize: 15,
        color: '#fff',
        fontFamily: 'medium',
    },
    textSignSmall: {
        color: COLORS.lighterGreen,
        textAlign: 'center',
    },
    textInput: {
        fontSize: 14,
        backgroundColor: 'transparent',
        marginVertical: 5,
    },
    center: {
        alignItems: 'center',
    },
    faceid: {
        resizeMode: 'contain',
        height: 70,
        width: 70,
    },
    registerDirection: {
        color: COLORS.red,
        fontFamily: 'medium',
        fontSize: SIZES.medium,
        marginBottom: 10,
    },
});

export default styles;
