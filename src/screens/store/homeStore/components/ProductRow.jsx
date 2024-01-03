import { FlatList, Text, View, StyleSheet } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { SIZES } from '../../../../constants';
import ProductCartView from './ProductCartView';

const ProductRow = ({ icon, selectedCategory }) => {
    const products = useSelector((state) => state.store.store.products);
    const filterProducts = selectedCategory
        ? products.filter((product) => product.category === selectedCategory)
        : [...products];

    return (
        <View style={styles.container}>
            {filterProducts.length > 0 ? (
                <FlatList
                    data={filterProducts}
                    renderItem={({ item }) => <ProductCartView icon={icon} data={item} />}
                    horizontal
                    contentContainerStyle={{ columnGap: SIZES.medium }}
                />
            ) : (
                <View>
                    <Text>Chưa có sản phẩm nào!</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.medium,
        marginLeft: 12,
    },
});

export default ProductRow;
