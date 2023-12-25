import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../../constants';
import { Ionicons } from '@expo/vector-icons';

const CategoryCard = ({ icon = 'logo-electron', name = 'Categories' }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image style={styles.icon} source={{ uri: icon }} />
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
