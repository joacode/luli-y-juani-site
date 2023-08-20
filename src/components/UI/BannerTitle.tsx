import React, { CSSProperties, FC, ReactElement } from 'react'
import styled from 'styled-components'
import { theme } from 'styles/theme'
import { useDeviceDetect } from 'src/hooks/useDeviceDetect'
import Typography from './Typography'

const Container = styled.div`
    position: relative;
    z-index: 2;
    height: 100vh;
    width: 100vw;
    display: inline-grid;
    justify-content: center;
    align-content: center;
`

const BannerTypography = styled(Typography)`
    @media (max-width: 425px) {
        margin-top: calc(100vh - 12.6rem);
        height: 200px;
        text-align: center;
    }

    @media (max-width: 375px) {
        margin-bottom: 50px;
    }
`

const BannerTitle: FC<{
    containerStyle?: CSSProperties
}> = ({ containerStyle }): ReactElement => {
    const { isDesktop } = useDeviceDetect()
    return (
        <Container style={containerStyle}>
            <BannerTypography
                color={theme.colors.black}
                style={{
                    width: 'fit-content',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    letterSpacing: '0.3rem',
                    fontSize: 20,
                }}
            >
                ¡NOS CASAMOS!
            </BannerTypography>
            <Typography
                variant="bannerTitle"
                color={theme.colors.black}
                style={{
                    fontFamily: `Amelia_Giovani`,
                    marginTop: '30px',
                    width: isDesktop ? 'initial' : 'min-content',
                    textAlign: isDesktop ? 'initial' : 'center',
                }}
            >
                Juani & Luli
            </Typography>
        </Container>
    )
}

export default BannerTitle

BannerTitle.defaultProps = {
    containerStyle: {},
}
