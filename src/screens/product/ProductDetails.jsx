import { Image, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import styles from './productDetails.styles';
import { Ionicons, SimpleLineIcons, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';
import { COLORS, SIZES } from '../../constants';

const ProductDetails = ({ navigation }) => {
    const [count, setCount] = useState(1);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.upperRow}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back-circle" size={30} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {}}>
                    <Ionicons name="heart" size={30} color={COLORS.primary} />
                </TouchableOpacity>
            </View>
            <Image
                source={{
                    uri: 'https://file.hstatic.net/200000201143/article/chup_anh_my_pham__dea9c6ccbcac478ab445986be908c965_1024x1024.jpeg',
                }}
                style={styles.image}
            />
            <View style={styles.details}>
                <View style={styles.titleRow}>
                    <Text style={styles.title}>Product</Text>
                    <View style={styles.priceWrapper}>
                        <Text style={styles.price}>$ 688.88</Text>
                    </View>
                </View>

                <View style={styles.ratingRow}>
                    <View style={styles.rating}>
                        {[1, 2, 3, 4, 5].map((index) => (
                            <Ionicons key={index} name="star" size={24} color="gold" />
                        ))}
                        <Text style={styles.ratingText}> (4.9)</Text>
                    </View>
                    <View style={styles.rating}>
                        <TouchableOpacity onPress={increment}>
                            <SimpleLineIcons name="plus" size={20} />
                        </TouchableOpacity>

                        <Text style={styles.ratingText}> {count} </Text>

                        <TouchableOpacity onPress={decrement}>
                            <SimpleLineIcons name="minus" size={20} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.descriptionWrapper}>
                    <Text style={styles.description}>Description</Text>
                    <Text style={styles.descText}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                    </Text>
                </View>

                <View style={{ marginBottom: SIZES.small }}>
                    <View style={styles.location}>
                        <View style={{ flexDirection: 'row' }}>
                            <Ionicons name="location-outline" size={20} />
                            <Text> Danang Vietnam</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <MaterialCommunityIcons name="truck-delivery-outline" size={20} />
                            <Text> Free shipping</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.cartRow}>
                    <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
                        <Text style={styles.cartTitle}>BUY NOW</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {}} style={styles.addCart}>
                        <Fontisto name="shopping-bag" size={24} color={COLORS.lightWhite} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default ProductDetails;
