import { StyleSheet, FlatList, TouchableOpacity, View, Text } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../../../../constants';
import CustomText from '../../../../components/customUI/CustomText';
import CategoryCard from '../../../../components/customUI/CategoryCard';
import { useSelector } from 'react-redux';

const CategoryBox = () => {
    const store = useSelector((state) => state.store.store);
    const categories = store.categories;
    console.log(categories);
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.headerTitle}>
                    <Ionicons name="md-logo-dropbox" size={24} color={COLORS.red} />
                    <CustomText style={styles.title}>Categories</CustomText>
                </View>
                <TouchableOpacity onPress={() => {}} style={styles.btnContainer}>
                    <View style={styles.ShowShopBtn}>
                        <CustomText style={styles.textSign}>Add new category</CustomText>
                        <Ionicons name="add-circle" size={20} color={COLORS.lightGreen} marginLeft={6} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.itemContainer}>
                {store.categories.length !== 0 ? (
                    <FlatList
                        data={store.categories}
                        renderItem={({ item }) => <CategoryCard name={item.name} icon={item.icon} />}
                        horizontal
                        contentContainerStyle={{ columnGap: SIZES.medium }}
                        showsHorizontalScrollIndicator={false}
                    />
                ) : (
                    <Text style={{ textAlign: 'center' }}>There are no categories yet!</Text>
                )}
            </View>
        </View>
    );
};

export default CategoryBox;

const styles = StyleSheet.create({
    container: {
        padding: 8,
    },
    headerContainer: {
        padding: 8,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerTitle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: SIZES.medium,
        fontFamily: 'bold',
        marginLeft: 8,
        color: COLORS.leaveGreen,
    },
    ShowShopBtn: {
        justifyContent: 'flex-end',
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        flexDirection: 'row',
    },
    textSign: {
        fontSize: SIZES.small,
        fontFamily: 'medium',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 4,
    },
});
