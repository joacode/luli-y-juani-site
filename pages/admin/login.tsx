import { useRouter } from 'next/router'
import React, { ReactElement, useCallback, useState } from 'react'
import Button from 'src/components/UI/Button'
import InputItem from 'src/components/UI/InputItem'
import { loginMessage } from 'src/components/UI/message'
import { ChangeGuest } from 'src/models/guest'
import styled from 'styled-components'
import { theme } from 'styles/theme'

const UpperContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const LoginPage = (): ReactElement => {
    const router = useRouter()
    const [user, setUser] = useState({ name: '', password: '' })

    const onChange = (
        key: ChangeGuest['key'],
        value: ChangeGuest['value']
    ): void => {
        setUser(prevState => ({
            ...prevState,
            [key]: value,
        }))
    }

    const onSubmit = useCallback(() => {
        if (
            user.name === process.env.NEXT_PUBLIC_NAME &&
            user.password === process.env.NEXT_PUBLIC_PASSWORD
        ) {
            loginMessage('success')
            sessionStorage.setItem('auth', 'true')
            router.push('/admin/juaniylulicom')
        } else {
            loginMessage('error')
        }
    }, [user])

    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                background: theme.colors.background,
            }}
        >
            <div style={{ width: 500, marginTop: 250 }}>
                <UpperContainer>
                    <InputItem
                        label="Nombre"
                        onChange={onChange}
                        placeholder="Nombre"
                        keyName="name"
                    />
                    <InputItem
                        label="Contraseña"
                        onChange={onChange}
                        placeholder="Contraseña"
                        password
                        keyName="password"
                    />
                </UpperContainer>
                <div style={{ padding: 15 }}>
                    <Button
                        appearance="primary"
                        style={{
                            background: theme.colors.pink,
                        }}
                        onClick={onSubmit}
                    >
                        ENVIAR
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
