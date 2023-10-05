import React from 'react'
import { View, Image, TextInput, StyleSheet, KeyboardType } from 'react-native'

interface Props {
    image: any,
    placeholder: string,
    value: string,
    keyboardType: KeyboardType,
    secureTextEntry? : boolean,
    property: string,
    onChangeText: (property: string, value: any) => void
}

export const CustomTextInput = ({
    image,
    placeholder,
    value,
    keyboardType,
    secureTextEntry = false,
    property,
    onChangeText
} : Props) => {
    return (
        <View style={styles.formInput}>
            <Image
                style={styles.formIcon}
                source={image}
            />
            <TextInput
                placeholder={placeholder}
                style={styles.formTextInput}
                keyboardType={keyboardType}
                value={value}
                onChangeText={(text) => onChangeText(property, text)}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    formInput: {
        flexDirection: 'row',
        marginTop: 30
    },
    formIcon: {
        width: 25,
        height: 25,
        marginTop: 5
    },

    formTextInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#aaaaaa',
        marginLeft: 15
    },
})
