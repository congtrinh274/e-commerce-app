import { StyleSheet, FlatList, Platform, View, Text } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { COLORS, SIZES } from '../../../constants';
import CustomText from '../../../components/customUI/CustomText';
import CategoryCard from '../../../components/customUI/CategoryCard';

const CategoryBox = () => {
    const store = useSelector((state) => state.store.store);
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.headerTitle}>
                    <Ionicons name="md-logo-dropbox" size={24} color={COLORS.red} />
                    <CustomText style={styles.title}>Your categories</CustomText>
                </View>
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
        marginTop: 100,
        width: '100%',
        borderRadius: 6,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android: {
                elevation: 4,
            },
        }),
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
        marginTop: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 4,
    },
});
