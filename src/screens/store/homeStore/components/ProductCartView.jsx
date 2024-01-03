import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../../../../constants';
import { useNavigation } from '@react-navigation/native';

const ProductCartView = ({ icon = 'add-circle', data }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity>
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

const styles = StyleSheet.create({
    container: {
        width: 182,
        height: 240,
        marginEnd: 22,
        borderRadius: SIZES.medium,
        backgroundColor: COLORS.secondary,
    },
    imageContainer: {
        flex: 1,
        width: 170,
        marginLeft: SIZES.small / 2,
        marginTop: SIZES.small / 2,
        borderRadius: SIZES.small,
        overflow: 'hidden',
    },
    image: {
        aspectRatio: 1,
        resizeMode: 'cover',
    },
    details: {
        padding: SIZES.small,
    },
    title: {
        fontFamily: 'medium',
        fontSize: SIZES.large,
        marginBottom: 4,
    },
    description: {
        fontFamily: 'regular',
        fontSize: SIZES.small,
        color: COLORS.gray,
        marginBottom: 8,
    },
    price: {
        fontFamily: 'medium',
        fontSize: SIZES.medium,
        color: COLORS.red,
    },
    addBtn: {
        position: 'absolute',
        bottom: 0,
        right: 8,
    },
});

export default ProductCartView;
