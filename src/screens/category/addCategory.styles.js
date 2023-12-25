import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

const styles = StyleSheet.create({
    topBarContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        color: COLORS.text,
        fontSize: SIZES.medium,
        fontFamily: 'medium',
        textAlign: 'center',
    },
    iconContainer: {
        marginRight: 8,
    },
});

export default styles;
