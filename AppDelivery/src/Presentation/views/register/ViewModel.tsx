import React, { useState } from 'react'
import { ApiDelivery } from '../../../Data/sources/remote/api/ApiDelivery'
import { RegisterAuthUseCase } from '../../../Domain/useCases/auth/RegisterAuth'


const RegisterViewModel = () => {

    const [errorMessage, setErrorMessage] = useState('')
    const [values, setValues] = useState({
        name: '',
        lastname: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: ''
    })


    const onChange = (property: string, value: any) => {
        setValues({
            ...values,
            [property] : value
        })
    }

    const register = async () => {
        if (isValidForm()) {
            //const response =  await RegisterAuthUseCase(values);
            console.log("RESULT: " + JSON.stringify(values));
        }
    }

    const isValidForm =  (): boolean => {
        if (values.name === '') {
            setErrorMessage('Ingresa tu nombre')
            return false;
        }

        if (values.lastname === '') {
            setErrorMessage('Ingresa tus apellidos')
            return false;
        }

        if (values.email === '') {
            setErrorMessage('Ingresa tu correo electrónico')
            return false;
        }

        if (values.phone === '') {
            setErrorMessage('Ingresa tu teléfono')
            return false;
        }

        if (values.password === '') {
            setErrorMessage('Ingresa tu contraseña')
            return false;
        }

        if (values.confirmPassword === '') {
            setErrorMessage('Ingresa la confirmación de tu contraseña')
            return false;
        }

        if (values.password !== values.confirmPassword) {
            setErrorMessage('Las contraseñas no coinciden')
            return false;
        }

        return true;
    }


    return {
        ...values,
        onChange,
        register,
        errorMessage
    }
}

export default RegisterViewModel;
