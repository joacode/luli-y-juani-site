import React, { FC, MutableRefObject, ReactElement } from 'react'
import styled from 'styled-components'
import { useDeviceDetect } from 'src/hooks/useDeviceDetect'
import BannerTitle from './UI/BannerTitle'
import FlowersBackground from './UI/FlowersBackground'

const Container = styled.div`
    width: 100%;
    overflow: hidden;
    height: 100vh;
`

interface BannerProps {
    banner: MutableRefObject<unknown>
}

const desktopUpperStyle = {
    maxWidth: '25vw',
    marginBottom: '-630px',
    marginLeft: 'calc(100% - 25vw)',
}

const upperMobileStyle = {
    maxWidth: '60vw',
    marginBottom: '-310px',
    marginLeft: 'calc(100% - 60vw)',
}

const desktopLowerStyle = { maxWidth: '25vw', marginTop: '-575px' }

const lowerMobileStyle = {
    maxWidth: '60vw',
    marginTop: '-300px',
}

const Banner: FC<BannerProps> = ({ banner }): ReactElement => {
    const { isMobile } = useDeviceDetect()
    return (
        <Container ref={banner}>
            <FlowersBackground
                upper
                upperStyle={!isMobile ? desktopUpperStyle : upperMobileStyle}
            />
            <BannerTitle />
            <FlowersBackground
                lowerStyle={!isMobile ? desktopLowerStyle : lowerMobileStyle}
            />
        </Container>
    )
}

export default Banner
