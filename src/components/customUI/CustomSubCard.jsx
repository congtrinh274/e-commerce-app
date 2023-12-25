import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../../constants';

const CustomSubCard = ({ amount = 0, text = 'Waiting' }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.amountText}>{amount}</Text>
            <Text style={styles.stateText}>{text}</Text>
        </TouchableOpacity>
    );
};

export default CustomSubCard;

const styles = StyleSheet.create({
    container: {
        width: 80,
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: COLORS.gray2,
        borderRadius: 10,
    },
    amountText: {
        fontFamily: 'bold',
        fontSize: SIZES.medium,
        marginBottom: 8,
        color: COLORS.red,
    },
    stateText: {
        fontSize: SIZES.xSmall,
        color: COLORS.black,
    },
});
