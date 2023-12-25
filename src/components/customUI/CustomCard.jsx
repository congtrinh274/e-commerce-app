import { StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants';

const CustomCard = ({ title, value, iconName, onPress, type = 'danger' }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={[styles.iconContainer, styles[`${type}`]]}>
                <Ionicons name={iconName} size={40} color={COLORS.white} />
            </View>
            <Text style={styles.cardPrimaryText}>{title}</Text>
            <Text style={styles.cardSecondaryText}>{value}</Text>
        </TouchableOpacity>
    );
};

export default CustomCard;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: 170,
        height: 170,
        backgroundColor: COLORS.white,
        padding: 20,
        borderRadius: 10,
        margin: 5,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android: {
                elevation: 4,
            },
        }),
    },
    iconContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        borderRadius: 5,
        padding: 5,
    },
    cardPrimaryText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    cardSecondaryText: {
        fontSize: 15,
        fontWeight: '800',
    },
    primary: {
        backgroundColor: COLORS.primary,
    },
    secondary: {
        backgroundColor: COLORS.tertiary,
    },
    warning: {
        backgroundColor: COLORS.warning,
    },
    muted: {
        backgroundColor: COLORS.muted,
    },
});
