import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import styles from './productCartView.styles';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const ProductCartView = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('ProductDetails')}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{
                            uri: 'https://file.hstatic.net/200000201143/article/chup_anh_my_pham__dea9c6ccbcac478ab445986be908c965_1024x1024.jpeg',
                        }}
                        style={styles.image}
                    />
                </View>

                <View style={styles.details}>
                    <Text style={styles.title} numberOfLines={1}>
                        Product
                    </Text>
                    <Text style={styles.supplier} numberOfLines={1}>
                        Product
                    </Text>
                    <Text style={styles.price} numberOfLines={1}>
                        $123
                    </Text>
                </View>
                <TouchableOpacity style={styles.addBtn}>
                    <Ionicons name="add-circle" size={35} color={COLORS.primary} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

export default ProductCartView;
