import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import styles from './productCartView.styles';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const ProductCartView = ({ icon = 'add-circle', handler, data }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={handler}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{
                            uri: data.images[0],
                        }}
                        style={styles.image}
                    />
                </View>

                <View style={styles.details}>
                    <Text style={styles.title} numberOfLines={1}>
                        {data.name}
                    </Text>
                    <Text style={styles.description} numberOfLines={1}>
                        {data.description}
                    </Text>
                    <Text style={styles.price} numberOfLines={1}>
                        {data.price}
                    </Text>
                </View>
                <TouchableOpacity style={styles.addBtn}>
                    <Ionicons name={icon} size={35} color={COLORS.primary} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

export default ProductCartView;
