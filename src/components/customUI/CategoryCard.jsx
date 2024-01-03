import { Image, StyleSheet, Text, TouchableOpacity, Platform } from 'react-native';
import React, { useState } from 'react';
import { COLORS, SIZES } from '../../constants';

const CategoryCard = ({ icon = 'logo-electron', name = 'Categories', active = false, onPress }) => {
    const apiBaseUrl = 'http://192.168.1.12:3000';
    const absoluteIconPath = `${apiBaseUrl}/${icon.replace(/\\/g, '/')}`;

    return (
        <TouchableOpacity style={[styles.container, active && styles.active]} onPress={onPress}>
            <Image style={styles.icon} source={{ uri: absoluteIconPath }} />
            <Text style={styles.name}>{name}</Text>
        </TouchableOpacity>
    );
};

export default CategoryCard;

const styles = StyleSheet.create({
    container: {
        padding: 16,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.secondary,
        borderRadius: 10,
        margin: 4,
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
    active: {
        backgroundColor: COLORS.lighterGreen,
    },
    icon: {
        width: 24,
        height: 24,
    },
    name: {
        marginLeft: 6,
        fontFamily: 'medium',
        fontSize: SIZES.small,
        color: COLORS.black,
    },
});
