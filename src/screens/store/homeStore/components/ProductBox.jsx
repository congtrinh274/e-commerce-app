import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import ProductRow from './ProductRow';
import { COLORS, SIZES } from '../../../../constants';

const ProductBox = ({ heading = 'Products', selectedCategory }) => {
    return (
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <Text style={styles.headingTitle}>{heading}</Text>
                <TouchableOpacity>
                    <Ionicons name="ios-add-outline" style={styles.addIcon} />
                </TouchableOpacity>
            </View>
            <ProductRow icon="create" selectedCategory={selectedCategory} />
        </View>
    );
};

export default ProductBox;

const styles = StyleSheet.create({
    container: {
        marginTop: 12,
        alignItems: 'center',
    },
    headingContainer: {
        padding: 12,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headingTitle: {
        fontFamily: 'bold',
        fontSize: SIZES.large,
        color: COLORS.leaveGreen,
    },
    addIcon: {
        right: 0,
        color: COLORS.lightGreen,
        fontSize: 32,
    },
});
