import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, Fontisto } from '@expo/vector-icons';

import styles from './home.styles';
import Welcome from '../../components/home/Welcome';
import Carousel from '../../components/home/Carousel';
import Heading from '../../components/home/Heading';
import ProductRow from '../../components/product/ProductRow';

const Home = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <View style={styles.appBarWrapper}>
                <View style={styles.appBar}>
                    <View style={{ flexDirection: 'row' }}>
                        <Ionicons name="location-outline" size={24} />
                        <Text style={styles.location}>Danang Vietnam</Text>
                    </View>

                    <View style={{ alignItems: 'flex-end' }}>
                        <View style={styles.cartCount}>
                            <Text style={styles.cartNumber}>8</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                            <Ionicons name="cart-outline" size={28} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <ScrollView>
                <Welcome />
                <Carousel />
                <Heading />
                <ProductRow handler={() => navigation.navigate('ProductDetails')} />
                <View style={{ paddingBottom: 100 }}></View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
