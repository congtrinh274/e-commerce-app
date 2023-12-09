import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import styles from './welcome.styles';
import { COLORS, SIZES } from '../../constants';
import { Feather, Ionicons } from '@expo/vector-icons';

const Welcome = () => {
    const navigation = useNavigation();
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.welcomeText(COLORS.black, SIZES.xSmall)}>Find the most</Text>
                <Text style={styles.welcomeText(COLORS.primary, 0)}>Classy cosmetics</Text>
            </View>

            <View style={styles.searchContainer}>
                <TouchableOpacity>
                    <Feather name="search" size={24} style={styles.searchIcon} />
                </TouchableOpacity>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value=""
                        onPressIn={() => navigation.navigate('Search')}
                        placeholder="What are you looking for?"
                    />
                </View>
                <View>
                    <TouchableOpacity style={styles.searchBtn}>
                        <Ionicons name="arrow-forward-outline" size={SIZES.xLarge} color={COLORS.offWhite} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Welcome;
