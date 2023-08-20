import React, { FC, MutableRefObject, ReactElement } from 'react'
import styled from 'styled-components'
import { useDeviceDetect } from 'src/hooks/useDeviceDetect'
import BannerTitle from './UI/BannerTitle'
import FlowersBackground from './UI/FlowersBackground'

const Container = styled.div`
    display: flex;
    width: 100%;
    overflow: hidden;
    height: 100vh;
    justify-content: center;
    align-items: center;
`

interface BannerProps {
    banner: MutableRefObject<unknown>
}

const desktopUpperStyle = {
    maxWidth: '25vw',
    marginBottom: '-630px',
    marginLeft: 'calc(100% - 25vw)',
    position: 'absolute',
    top: 0,
    right: 0,
}

const upperMobileStyle = {
    maxWidth: '60vw',
    marginBottom: '-310px',
    marginLeft: 'calc(100% - 60vw)',
    position: 'absolute',
    top: 0,
    right: 0,
}

const desktopLowerStyle = {
    maxWidth: '25vw',
    marginTop: '-575px',
    position: 'absolute',
    bottom: 0,
    left: 0,
}

const lowerMobileStyle = {
    maxWidth: '60vw',
    marginTop: '-300px',
    position: 'absolute',
    bottom: 0,
    left: 0,
}

const Banner: FC<BannerProps> = ({ banner }): ReactElement => {
    const { isDesktop } = useDeviceDetect()
    return (
        <Container ref={banner}>
            <FlowersBackground
                upper
                upperStyle={isDesktop ? desktopUpperStyle : upperMobileStyle}
            />
            <BannerTitle />
            <FlowersBackground
                lowerStyle={isDesktop ? desktopLowerStyle : lowerMobileStyle}
            />
        </Container>
    )
}

export default Banner
