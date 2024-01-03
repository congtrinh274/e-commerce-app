import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../../constants';
import CustomText from '../../../components/customUI/CustomText';
import styles from './homeStore.styles';
import { OrderBox, CategoryBox, ProductBox } from './components';
import Separate from '../../../components/customUI/Separate';

const HomeStore = () => {
    const store = useSelector((state) => state.store.store);
    const navigation = useNavigation();

    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleSelectCategory = (categoryID) => {
        setSelectedCategory(categoryID);
    };
    console.log(selectedCategory);
    return (
        <SafeAreaView>
            <View style={styles.topBarContainer}>
                <View style={styles.flexContainer}>
                    <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.goBack()}>
                        <Ionicons name="ios-arrow-back" size={32} color={COLORS.lightGreen} />
                    </TouchableOpacity>
                    <View>
                        <CustomText style={styles.title}>Your Shop</CustomText>
                    </View>
                </View>
                <View style={styles.flexContainer}>
                    <TouchableOpacity style={styles.iconContainer} onPress={() => {}}>
                        <Ionicons name="settings" size={24} color={COLORS.primary} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconContainer} onPress={() => {}}>
                        <Ionicons name="notifications" size={24} color={COLORS.primary} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconContainer} onPress={() => {}}>
                        <Ionicons name="chatbox" size={24} color={COLORS.primary} />
                    </TouchableOpacity>
                </View>
            </View>
            <Separate />
            <ScrollView>
                <View style={styles.headerContainer}>
                    <View style={styles.flexContainer}>
                        <Image
                            style={styles.imageBox}
                            source={require('../../../../assets/Images/defaultProfile.png')}
                        />
                        <View style={styles.shopInfoContainer}>
                            <CustomText style={styles.shopNameText}>{store.name}</CustomText>
                            <CustomText style={styles.bioText}>{store.bio}</CustomText>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => {}} style={styles.btnContainer}>
                        <View style={styles.ShowShopBtn}>
                            <CustomText style={styles.textSign}>Show shop</CustomText>
                        </View>
                    </TouchableOpacity>
                </View>
                <Separate />
                <OrderBox />
                <Separate />
                <CategoryBox onSelectCategory={handleSelectCategory} />
                <Separate />
                <ProductBox selectedCategory={selectedCategory} />
                <View style={{ paddingBottom: 100 }}></View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeStore;
