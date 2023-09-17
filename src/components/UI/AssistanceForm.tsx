import React, {
    FC,
    ReactElement,
    useCallback,
    useContext,
    useState,
} from 'react'
import styled from 'styled-components'
import { theme } from 'styles/theme'
import { SpecialMenu } from 'src/models/specialMenu'
import { useRouter } from 'next/router'
import { CivilAssistance, PartyAssistance } from 'src/models/assistance'
import { GuestsService } from 'src/services/guestsService'
import {
    civilAssistanceData,
    partyAssistanceData,
} from 'src/constants/assistance'
import { specialMenu } from 'src/constants/menu'
import SelectItem from './SelectItem'
import Button from './Button'
import InputItem from './InputItem'
import { ChangeGuest, GuestInterface } from '../../models/guest'
import AppContext from '../../contexts/AppContext'
import { addGuestMessage } from './message'
import Typography from './Typography'

const Container = styled.div`
    width: 100%;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 768px) {
        margin-bottom: 70px;
    }
`

const UpperContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const AssistanceForm: FC = (): ReactElement => {
    const router = useRouter()
    const { windowDimensions } = useContext(AppContext)
    const [loading, setLoading] = useState(false)
    const [guest, setGuest] = useState<GuestInterface>({
        name: '',
        lastName: '',
        civilAssistance: CivilAssistance.EMPTY,
        partyAssistance: PartyAssistance.EMPTY,
        menu: SpecialMenu.EMPTY,
        song: '',
    })

    const hasCivilField = router?.pathname === '/guests'

    const civilValidation = hasCivilField
        ? guest?.civilAssistance !== CivilAssistance.EMPTY
        : true

    const changeGuest = (
        key: ChangeGuest['key'],
        value: ChangeGuest['value']
    ): void => {
        setGuest(prevState => ({
            ...prevState,
            [key]: value,
        }))
    }

    const refetch = useCallback(() => {
        setTimeout(router.reload, 3000)
    }, [])

    const onSubmit = useCallback(() => {
        if (
            guest?.name !== '' &&
            guest?.lastName !== '' &&
            civilValidation &&
            guest?.partyAssistance !== PartyAssistance.EMPTY &&
            guest?.menu !== SpecialMenu.EMPTY
        ) {
            setLoading(true)
            GuestsService.create({ ...guest, active: true })
                .then(() => {
                    addGuestMessage('success')
                    sessionStorage.setItem('scrollToForm', 'true')
                    refetch()
                })
                .catch(() => addGuestMessage('error'))
                .finally(() => setLoading(false))
        } else {
            addGuestMessage('error')
        }
    }, [guest])

    return (
        <Container>
            <UpperContainer>
                <InputItem
                    label="Tu nombre"
                    onChange={changeGuest}
                    defaultValue={guest?.name || ''}
                    placeholder={
                        windowDimensions.width <= 485 ||
                        windowDimensions.width > 768
                            ? 'Nombre'
                            : 'Ingresa tu nombre'
                    }
                    keyName="name"
                />
                <InputItem
                    label="Tu apellido"
                    onChange={changeGuest}
                    placeholder={
                        windowDimensions.width <= 485 ||
                        windowDimensions.width > 768
                            ? 'Apellido'
                            : 'Ingresa tu apellido'
                    }
                    keyName="lastName"
                />
            </UpperContainer>
            <div>
                {router.pathname === '/guests' && (
                    <SelectItem
                        label="Confirmar asistencia al Civil"
                        onChange={changeGuest}
                        placeholder="Asistencia 3 de Noviembre"
                        data={civilAssistanceData}
                        keyName="civilAssistance"
                    />
                )}
                <SelectItem
                    label="Confirmar asistencia a la Iglesia y Fiesta"
                    onChange={changeGuest}
                    placeholder="Asistencia 11 de Noviembre"
                    data={partyAssistanceData}
                    keyName="partyAssistance"
                />
                <SelectItem
                    label="Menu"
                    onChange={changeGuest}
                    placeholder="Selecciona tu menu"
                    data={specialMenu}
                    keyName="menu"
                />
                <InputItem
                    label="Una canción que no puede faltar en la pista"
                    onChange={changeGuest}
                    placeholder="Menea para mi - Damas Gratis"
                    keyName="song"
                />
            </div>
            <div style={{ padding: 15 }}>
                <Button
                    background={theme.colors.header}
                    onClick={onSubmit}
                    loading={loading}
                    style={{
                        width: '200px',
                        height: '60px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        display: 'block',
                    }}
                >
                    <Typography
                        color={theme.colors.white.normal}
                        style={{ fontSize: '18px' }}
                    >
                        ENVIAR
                    </Typography>
                </Button>
            </div>
        </Container>
    )
}

export default AssistanceForm
