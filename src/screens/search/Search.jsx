import { TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather, Ionicons } from '@expo/vector-icons';

import styles from './search.styles';
import { COLORS, SIZES } from '../../constants';

const Search = () => {
    return (
        <SafeAreaView>
            <View style={styles.searchContainer}>
                <TouchableOpacity>
                    <Ionicons name="arrow-forward-outline" size={SIZES.xLarge} style={styles.searchIcon} />
                </TouchableOpacity>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value=""
                        onPressIn={() => {}}
                        placeholder="What are you looking for?"
                    />
                </View>
                <View>
                    <TouchableOpacity style={styles.searchBtn}>
                        <Feather name="search" size={24} color={COLORS.offWhite} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Search;
