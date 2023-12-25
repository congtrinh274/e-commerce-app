import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../constants';
import CustomText from '../../components/customUI/CustomText';
import AddCategoryForm from './components/AddCategoryForm';
import Separate from '../../components/customUI/Separate';
import styles from './addCategory.styles';

const AddCategory = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <View style={styles.topBarContainer}>
                <View style={styles.flexContainer}>
                    <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.goBack()}>
                        <Ionicons name="ios-arrow-back" size={32} color={COLORS.lightGreen} />
                    </TouchableOpacity>
                    <View>
                        <CustomText style={styles.title}>Add Category</CustomText>
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
            <AddCategoryForm />
        </SafeAreaView>
    );
};

export default AddCategory;
