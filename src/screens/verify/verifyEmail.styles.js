import { StyleSheet, Dimensions } from 'react-native';
import { COLORS, SIZES } from '../../constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: COLORS.leaveGreen,
        fontFamily: 'medium',
        fontSize: SIZES.xLarge,
        marginBottom: 10,
    },
    subTitle: {
        color: COLORS.lightGreen,
        fontFamily: 'medium',
        marginBottom: 10,
    },
    textDirection: {
        color: COLORS.lightGreen,
        fontFamily: 'medium',
        marginBottom: 10,
        textDecorationLine: 'underline',
    },
    link: {
        color: COLORS.red,
        fontFamily: 'bold',
        fontSize: SIZES.medium,
        marginBottom: 10,
        textDecorationLine: 'underline',
    },
});

export default styles;
