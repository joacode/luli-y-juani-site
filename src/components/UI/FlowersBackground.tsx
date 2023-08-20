/* eslint-disable react/require-default-props */
import React, {
    CSSProperties,
    FC,
    ReactElement,
    PropsWithChildren,
} from 'react'
import { useDeviceDetect } from 'src/hooks/useDeviceDetect'
import styled from 'styled-components'

const Background = styled.img`
    width: inital;
    height: initial;
`

interface FlowersBackgroundProps extends PropsWithChildren {
    upper?: boolean
    upperStyle?: CSSProperties
    lowerStyle?: CSSProperties
}

// eslint-disable-next-line react/require-default-props
const FlowersBackground: FC<FlowersBackgroundProps> = ({
    upper = false,
    upperStyle,
    lowerStyle,
}): ReactElement => {
    const { isDesktop } = useDeviceDetect()
    return upper ? (
        <Background
            src="/images/flowers-upper.png"
            alt="bUpper"
            style={{
                maxWidth: '50vw',
                marginBottom: isDesktop ? '-320px' : '-35px',
                marginLeft: 'calc(100% - 47vw)',
                ...upperStyle,
            }}
        />
    ) : (
        <Background
            src="/images/flowers-lower.png"
            alt="bLower"
            style={{
                maxWidth: '50vw',
                marginTop: isDesktop ? '-220px' : '970px',
                ...lowerStyle,
            }}
        />
    )
}

export default FlowersBackground
