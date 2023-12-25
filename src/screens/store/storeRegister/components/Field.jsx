import { View, StyleSheet } from 'react-native';
import { COLORS } from '../../../../constants';
import { IconButton, TextInput } from 'react-native-paper';

const Field = ({ label, keyboardType, value, onChangeText, icon = false }) => {
    return (
        <View>
            <TextInput
                label={label}
                keyboardType={keyboardType}
                value={value}
                style={styles.textInput}
                selectionColor={COLORS.leaveGreen}
                theme={{ colors: { primary: COLORS.leaveGreen } }}
                onChangeText={onChangeText}
            />
            {icon && (
                <IconButton
                    icon={icon}
                    color={COLORS.lighterGreen}
                    size={24}
                    style={{ position: 'absolute', top: 12, right: 5 }}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    textInput: {
        fontSize: 14,
        backgroundColor: 'transparent',
        marginVertical: 5,
    },
});

export default Field;
