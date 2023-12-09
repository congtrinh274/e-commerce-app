import { FlatList, Text, View } from 'react-native';
import React from 'react';
import styles from './productRow.styles';
import { SIZES } from '../../constants';
import ProductCartView from './ProductCartView';

const productRow = () => {
    const products = [1, 2, 3, 4];
    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={({ item }) => <ProductCartView />}
                horizontal
                contentContainerStyle={{ columnGap: SIZES.medium }}
            />
        </View>
    );
};

export default productRow;
