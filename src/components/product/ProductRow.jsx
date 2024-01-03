import { FlatList, Text, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './productRow.styles';
import { SIZES } from '../../constants';
import ProductCartView from './ProductCartView';

const ProductRow = ({ icon, handler }) => {
    const products = useSelector((state) => state.store.store.products);

    return (
        <View style={styles.container}>
            {products ? (
                <FlatList
                    data={products}
                    renderItem={({ item }) => <ProductCartView icon={icon} data={item} handler={handler} />}
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

export default ProductRow;
