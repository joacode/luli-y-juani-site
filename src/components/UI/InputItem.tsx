import React, { CSSProperties, FC, ReactElement } from 'react'
import styled from 'styled-components'
import { Input as RSInput } from 'rsuite'
import { ChangeGuest } from 'src/models/guest'
import Typography from './Typography'

const Input = styled(RSInput)`
    display: inline-block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
`

const ItemContainer = styled.div`
    padding: 0px 15px;
    margin-bottom: 16px;
`

interface InputItemProps {
    label: string
    onChange: (key: string, value: string) => void
    defaultValue?: string | boolean
    keyName: ChangeGuest['key']
    style?: CSSProperties
    placeholder?: string
    password?: boolean
}

const InputItem: FC<InputItemProps> = ({
    label,
    onChange,
    defaultValue,
    keyName,
    style,
    placeholder,
    password,
}): ReactElement => {
    return (
        <ItemContainer style={style}>
            <Typography
                style={{
                    marginBottom: 8,
                    fontSize: 17,
                    display: 'inline-block',
                }}
            >
                {label}
            </Typography>
            <Input
                defaultValue={defaultValue}
                onChange={(value: ChangeGuest['value']): void =>
                    onChange(keyName, value)
                }
                placeholder={placeholder}
                renderValue
                type={!password ? 'text' : 'password'}
            />
        </ItemContainer>
    )
}

export default InputItem

InputItem.defaultProps = {
    defaultValue: '',
    style: null,
    placeholder: '',
    password: false,
}
