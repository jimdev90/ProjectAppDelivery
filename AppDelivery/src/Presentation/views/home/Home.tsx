import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Image, Text, View, TouchableOpacity, ToastAndroid } from 'react-native';
import { RoundedButton } from '../../../Presentation/components/RoundedButton';
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../../../App';
import useViewModel from './ViewModel';
import { CustomTextInput } from '../../components/CustomTextInput';
import styles from './Styles';

export const HomeScreen = () => {

    const { email, password, onChange, login, errorMessage } = useViewModel();

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    useEffect(() => {
        if (errorMessage !== '') {
            ToastAndroid.show(errorMessage, ToastAndroid.LONG);
        }
    }, [errorMessage])


    return (
        <View style={styles.container}>
            <Image
                style={styles.imageBackground}
                source={require('../../../../assets/chef.jpg')}
            />
            <View style={styles.logoContainer}>
                <Image source={require('../../../../assets/logo.png')} style={styles.logoImage} />
                <Text style={styles.logoText}>FOOD APP</Text>
            </View>
            <View style={styles.form}>
                <Text style={styles.formText}>INGRESAR</Text>
                <CustomTextInput
                    image={require('../../../../assets/email.png')}
                    placeholder='Correo Electrónico'
                    keyboardType='email-address'
                    property='email'
                    value={email}
                    onChangeText={onChange}
                />

                <CustomTextInput
                    image={require('../../../../assets/password.png')}
                    placeholder='Contraseña'
                    keyboardType='default'
                    property='password'
                    value={password}
                    onChangeText={onChange}
                    secureTextEntry={true}
                />
                 <View style={styles.formForgotPassword}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ForgotPasswordScreen')}
                    >
                        <Text style={styles.formForgotPasswordText}>Olvidé mi contraseña</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 30 }}>
                    <RoundedButton
                        text='ENTRAR'
                        onPress={() => login()}
                    />
                </View>
                <View style={styles.formRegister}>
                    <Text>No tienes cuenta?</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('RegisterScreen')}
                    >
                        <Text style={styles.formRegisterText}>Registrate</Text>
                    </TouchableOpacity>
                </View>
            
            </View>
        </View>
    );
}

