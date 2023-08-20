import noop from 'lodash/noop'
import React, { CSSProperties, FC, ReactElement } from 'react'
import styled from 'styled-components'
import { theme } from 'styles/theme'

interface TypographyProps {
    children: JSX.Element | JSX.Element[] | string | number
    variant?: string
    style?: CSSProperties
    color?: CSSProperties['color']
    onClick?: () => void
}

const Container = styled.div<{ variant: string }>`
    font-family: ${({ variant }): string => {
        if (variant === 'name') {
            return `Amelia_Giovani`
        }
        return `'Libre Baskerville', serif`
    }};
    font-size: ${({ variant }): string => {
        if (variant === 'bannerTitle') {
            return '90px'
        }
        if (variant === 'gifts') {
            return '18px'
        }
        if (variant === 'bank-data') {
            return '16px'
        }
        return '34px'
    }};
    letter-spacing: ${({ variant }): string => {
        if (variant === 'bannerTitle') {
            return '8px'
        }
    }};
    color: ${({ variant }): string => {
        if (variant === 'bannerTitle' || variant === 'bannerSubtitle') {
            return `${theme.colors.white.normal}`
        }
        return `${theme.colors.grey}`
    }};
    font-style: ${({ variant }): string => {
        if (variant === 'italic') {
            return 'italic'
        }
        return 'initial'
    }};
    ${({ variant }): string =>
        variant === 'gifts' ? `margin-bottom: 10px;` : ''}
`

const Typography: FC<TypographyProps> = ({
    children,
    variant,
    style,
    color,
    onClick,
}): ReactElement => {
    return (
        <Container
            variant={variant}
            style={{ ...style, color }}
            onClick={onClick}
        >
            {children}
        </Container>
    )
}

export default Typography

Typography.defaultProps = {
    variant: 'bannerSubtitle',
    style: {},
    color: 'black',
    onClick: noop,
}
