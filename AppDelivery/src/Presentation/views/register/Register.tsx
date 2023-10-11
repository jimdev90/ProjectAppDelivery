import React, { useEffect } from 'react'
import { View, Text, Image, ScrollView, ToastAndroid } from 'react-native';
import { RoundedButton } from '../../../Presentation/components/RoundedButton';
import useViewModel from './ViewModel';
import { CustomTextInput } from '../../components/CustomTextInput';
import styles from './Styles';
import {image} from '../../../assets'
export const RegisterScreen = () => {

    const { name, lastname, email, phone, password, confirmPassword, onChange, register, errorMessage } = useViewModel();

    useEffect(() => {
        if(errorMessage != ''){
            ToastAndroid.show(errorMessage, ToastAndroid.LONG);
        }
    }, [errorMessage])
    

    return (
        <View style={styles.container}>
            <Image
                style={styles.imageBackground}
                source={image.BgChef}
            />
            <View style={styles.logoContainer}>
                <Image source={image.IconUserImage} style={styles.logoImage} />
                <Text style={styles.logoText}>SELECCIONA UNA IMAGEN</Text>
            </View>
            <View style={styles.form}>
                <ScrollView>
                    <Text style={styles.formText}>REGISTRARSE</Text>

                    <CustomTextInput
                        placeholder='Nombres'
                        image={image.IconUser}
                        keyboardType='default'
                        property='name'
                        value={name}
                        onChangeText={onChange}
                    />

                    <CustomTextInput
                        placeholder='Apellidos'
                        image={image.IconMyUser}
                        keyboardType='default'
                        property='lastname'
                        value={lastname}
                        onChangeText={onChange}
                    />

                    <CustomTextInput
                        placeholder='Correo Electrónico'
                        image={image.IconEmail}
                        keyboardType='email-address'
                        property='email'
                        value={email}
                        onChangeText={onChange}
                    />

                    <CustomTextInput
                        placeholder='Teléfono'
                        image={image.IconPhone}
                        keyboardType='numeric'
                        property='phone'
                        value={phone}
                        onChangeText={onChange}
                    />

                    <CustomTextInput
                        placeholder='Contraseña'
                        image={image.IconPassword}
                        keyboardType='default'
                        property='password'
                        value={password}
                        onChangeText={onChange}
                        secureTextEntry={true}
                    />

                    <CustomTextInput
                        placeholder='Confirmar Contraseña'
                        image={image.IconConfirmPassword}
                        keyboardType='default'
                        property='confirmPassword'
                        value={confirmPassword}
                        onChangeText={onChange}
                        secureTextEntry={true}
                    />

                    <View style={{ marginTop: 30 }}>
                        <RoundedButton
                            text='CONFIRMAR'
                            onPress={() => register()}
                        />
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}


