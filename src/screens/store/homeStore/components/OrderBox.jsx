import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../../../../constants';
import CustomText from '../../../../components/customUI/CustomText';
import CustomSubCard from '../../../../components/customUI/CustomSubCard';

const OrderBox = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.headerTitle}>
                    <Ionicons name="cart" size={24} color={COLORS.lightGreen} />
                    <CustomText style={styles.title}>Orders</CustomText>
                </View>
                <TouchableOpacity onPress={() => {}} style={styles.btnContainer}>
                    <View style={styles.ShowShopBtn}>
                        <CustomText style={styles.textSign}>Show Orders History</CustomText>
                        <Ionicons name="arrow-forward-outline" size={20} color={COLORS.lightGreen} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.itemContainer}>
                <CustomSubCard amount={0} text="Pending" />
                <CustomSubCard amount={0} text="Canceled" />
                <CustomSubCard amount={0} text="Return" />
                <CustomSubCard amount={0} text="Feedback" />
            </View>
        </View>
    );
};

export default OrderBox;

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
        justifyContent: 'space-between',
        marginBottom: 4,
    },
});
