import { Image, StyleSheet, Text, TouchableOpacity, Platform } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../../constants';

const CategoryCard = ({ icon = 'logo-electron', name = 'Categories' }) => {
    const apiBaseUrl = 'http://192.168.1.11:3000'; // Thay thế bằng địa chỉ thực tế của server

    // Xử lý đường dẫn tương đối thành đường dẫn tuyệt đối
    const absoluteIconPath = `${apiBaseUrl}/${icon.replace(/\\/g, '/')}`;

    return (
        <TouchableOpacity style={styles.container}>
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
