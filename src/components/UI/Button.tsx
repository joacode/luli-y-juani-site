/* eslint-disable react/require-default-props */
import React, {
    CSSProperties,
    FC,
    PropsWithChildren,
    ReactElement,
} from 'react'
import { Button as RSuiteButton } from 'rsuite'
import styled from 'styled-components'

interface ButtonProps extends PropsWithChildren {
    onClick: (e: React.MouseEvent) => void
    style?: CSSProperties
    appearance?: 'default' | 'primary' | 'link' | 'subtle' | 'ghost'
    color?: CSSProperties['color']
    background?: CSSProperties['color']
    loading?: boolean
}

interface StyledButtonProps {
    maxWidth?: string
}

const StyledButton = styled(RSuiteButton)<StyledButtonProps>`
    width: 100%;

    @media (max-width: ${(props): string => props?.maxWidth}) {
        display: inline-block;
    }
`

const Button: FC<ButtonProps> = ({
    onClick,
    style,
    appearance,
    children,
    color,
    background,
    loading,
}): ReactElement => {
    return (
        <StyledButton
            appearance={appearance}
            style={{ ...style, background, color }}
            onClick={onClick}
            loading={loading}
        >
            {children}
        </StyledButton>
    )
}

export default Button
