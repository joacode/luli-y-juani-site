import React, { FC, MutableRefObject, ReactElement } from 'react'
import { Grid as RSGrid } from 'rsuite'
import styled from 'styled-components'
import { theme } from 'styles/theme'
import { useRouter } from 'next/router'
import Typography from './UI/Typography'
import Box from './UI/Box'
import FlowersBackground from './UI/FlowersBackground'
import PageTitle from './UI/PageTitle'

const Grid = styled(RSGrid)`
    width: fit-content;
    margin-top: 70px;

    @media (min-width: 2500px) {
        margin-top: 250px;
    }

    @media (max-width: 1149px) {
        height: 100vw;
        width: fit-content;
        align-items: center;
        display: grid;
    }

    @media (max-width: 425px) {
        height: 100vw;
        width: fit-content;
        align-items: center;
        display: grid;
        margin-top: 0;
    }
`

const Container = styled.div`
    width: 100%;
    overflow: hidden;
    height: 100vh;

    @media (max-width: 1149px) {
        height: 963px;
    }

    @media (max-width: 1149px) {
        height: 1700px;
    }
`

const BoxTitleContainer = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    margin-top: 10px;
`

const Img = styled.img`
    width: 160px;
    border-radius: 50%;
    margin-top: -10px;
    margin-bottom: -10px;
`

const ImgContainer = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    width: 170px;
    height: 170px;
    margin-left: auto;
    margin-right: auto;
    margin-top: -20px;
    margin-bottom: -10px;
`
const locationConfig = [
    {
        title: 'Civil',
        path: 'https://goo.gl/maps/7Nro4d87cpXvUn4Y7',
        dressCode: 'Smart Casual',
        img: '/images/heart-test.png',
        address: 'Av. Centenario 77,',
        location: 'San Isidro',
        name: 'Registro civil de San Isidro',
        date: '03.11.23 13:30 hs',
        marginText: '*Recepción civil: Catamarca 724, Acassuso',
        style: { width: '150px' },
        containerStyle: { marginBottom: '90px' },
        hidden: true,
    },
    {
        title: 'Ceremonia',
        path: 'https://goo.gl/maps/AQNc9GyyRAhPqaZr7',
        dressCode: 'Elegante',
        img: '/images/rings.png',
        address: 'Urquiza y Albarellos,',
        location: 'Acassuso',
        name: 'Parroquia Niño Jesús de Praga',
        date: '11.11.2023 15:30 hs',
        style: { width: '180px' },
        hidden: false,
    },
    {
        title: 'Party',
        path: 'https://goo.gl/maps/DBK8KowDvMNRBesx6',
        dressCode: 'Elegante',
        img: '/images/partytest.png',
        address: 'Juan Díaz de Solís 1970,',
        location: 'Olivos',
        name: 'Salon del Río',
        date: '11.11.2023 18:00 hs',
        hidden: false,
    },
]

interface EventsProps {
    events: MutableRefObject<unknown>
}

const Events: FC<EventsProps> = ({ events }): ReactElement => {
    const router = useRouter()
    return (
        <Container ref={events}>
            <FlowersBackground upper />
            <PageTitle title="EVENTOS" style={{ marginTop: '65px' }} />
            <Grid style={{ zIndex: 1 }}>
                {locationConfig.map(location => {
                    return (
                        !location.hidden && (
                            <Box style={location?.containerStyle}>
                                <BoxTitleContainer>
                                    <Typography
                                        variant="bannerTitle"
                                        color={theme.colors.blue.cake}
                                        style={{
                                            width: 'fit-content',
                                            fontSize: 20,
                                            letterSpacing: '5px',
                                            fontWeight: 1000,
                                            marginTop: '15px',
                                        }}
                                    >
                                        {location.title.toUpperCase()}
                                    </Typography>
                                </BoxTitleContainer>
                                <Typography
                                    style={{
                                        fontSize: '13px',
                                        fontWeight: 1000,
                                        marginLeft: 'auto',
                                        marginRight: 'auto',
                                        marginTop: '10px',
                                        width: '130px',
                                        textAlign: 'center',
                                    }}
                                >
                                    {location.date.toUpperCase()}
                                </Typography>
                                <Typography
                                    style={{
                                        fontSize: '13px',
                                        fontWeight: 500,
                                        marginLeft: 'auto',
                                        marginRight: 'auto',
                                        marginTop: '10px',
                                        width: 'fit-content',
                                        textAlign: 'center',
                                    }}
                                >
                                    {`Dress code: ${location.dressCode}`}
                                </Typography>
                                <ImgContainer>
                                    <Img
                                        src={location.img}
                                        alt={location.path}
                                        style={location?.style}
                                    />
                                </ImgContainer>
                                <div style={{ marginBottom: 10 }}>
                                    <Typography
                                        style={{
                                            width: 'fit-content',
                                            fontSize: '13px',
                                            fontWeight: 800,
                                            marginLeft: 'auto',
                                            marginRight: 'auto',
                                        }}
                                        variant="italic"
                                    >
                                        {location.name}
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: '13px',
                                            fontWeight: 500,
                                            marginLeft: 'auto',
                                            marginRight: 'auto',
                                            marginTop: '10px',
                                            width: '165px',
                                            textAlign: 'center',
                                        }}
                                        variant="italic"
                                    >
                                        {location.address}
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: '13px',
                                            fontWeight: 500,
                                            marginLeft: 'auto',
                                            marginRight: 'auto',
                                            width: '125px',
                                            textAlign: 'center',
                                        }}
                                        variant="italic"
                                    >
                                        {location.location}
                                    </Typography>
                                    <a
                                        href={location.path}
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <Typography
                                            style={{
                                                width: 'fit-content',
                                                fontSize: '13px',
                                                fontWeight: 800,
                                                marginLeft: 'auto',
                                                marginRight: 'auto',
                                                borderBottom: '1px solid',
                                                marginTop: 15,
                                            }}
                                        >
                                            VER MAPA
                                        </Typography>
                                    </a>
                                    {router.pathname === '/guests' &&
                                        location.marginText && (
                                            <Typography
                                                style={{
                                                    fontSize: '13px',
                                                    fontWeight: 500,
                                                    width: 'fit-content',
                                                    textAlign: 'center',
                                                    color: 'black',
                                                    position: 'absolute',
                                                    marginTop: '26px',
                                                    marginLeft: '10px',
                                                    opacity: 0.6,
                                                }}
                                            >
                                                {location.marginText}
                                            </Typography>
                                        )}
                                </div>
                            </Box>
                        )
                    )
                })}
            </Grid>
            <FlowersBackground />
        </Container>
    )
}

export default Events
