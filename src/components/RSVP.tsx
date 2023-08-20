import React, { MutableRefObject, ReactElement, FC } from 'react'
import styled from 'styled-components'
import AssistanceForm from './UI/AssistanceForm'
import FlowersBackground from './UI/FlowersBackground'
import PageTitle from './UI/PageTitle'

const Container = styled.div`
    width: 100%;
    overflow: hidden;
    height: 100vh;

    @media (max-width: 768px) {
        height: 1000px;
    }
`

const BottomContainer = styled.div`
    display: flex;
    width: 78vw;
    max-width: fit-content;
    margin-left: auto;
    margin-right: auto;
    margin-top: 45px;
    z-index: 2;
    position: relative;

    @media (min-width: 2500px) {
        margin-top: 250px;
    }

    @media only screen and (max-width: 1110px) and (min-width: 768px) {
        margin-top: 45px;
    }

    @media (max-width: 768px) {
        margin-top: 65px;
        display: flex;
        flex-wrap: wrap;
    }

    @media (max-width: 425px) {
        display: flex;
        flex-wrap: wrap;
    }
`

interface RSVPProps {
    rsvp: MutableRefObject<unknown>
}

const RSVP: FC<RSVPProps> = ({ rsvp }): ReactElement => {
    return (
        <Container ref={rsvp} id="rsvp">
            <FlowersBackground upper />
            <PageTitle title="RSVP" />
            <BottomContainer>
                <AssistanceForm />
            </BottomContainer>
            <FlowersBackground lowerStyle={{ marginBottom: '-30px' }} />
        </Container>
    )
}

export default RSVP
