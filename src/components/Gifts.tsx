import React, {
    ReactElement,
    FC,
    MutableRefObject,
    useContext,
    useState,
} from 'react'
import styled from 'styled-components'
import { theme } from 'styles/theme'
import AppContext from 'src/contexts/AppContext'
import { Modal } from 'rsuite'
import Typography from './UI/Typography'
import PinkBackground from './UI/PinkBackground'
import PageTitle from './UI/PageTitle'
import Button from './UI/Button'
import Divider from './UI/Divider'

const Container = styled.div`
    overflow: hidden;
    height: 100vh !important;
    background: transparent;
    z-index: 1;
    position: relative;
`

interface GiftsProps {
    gifts: MutableRefObject<unknown>
}

const Gifts: FC<GiftsProps> = ({ gifts }): ReactElement => {
    const { windowDimensions } = useContext(AppContext)
    const [openBankModal, setOpenBankModal] = useState(false)

    return (
        <>
            <PinkBackground reference={gifts} />
            <Container>
                <PageTitle
                    title="REGALOS"
                    color={theme.colors.white.normal}
                    style={{
                        marginTop: windowDimensions.height <= 667 ? 70 : 200,
                    }}
                />
                <Typography
                    color={theme.colors.white.normal}
                    style={{
                        width: '60%',
                        maxWidth: '667px',
                        margin: '70px',
                        marginBottom:
                            windowDimensions.width >= 1024 ? '40px' : '40px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop:
                            windowDimensions.width >= 2500 ? '130px' : '70px',
                        textAlign: 'center',
                        fontSize:
                            windowDimensions.width <= 425 ? '20px' : '25px',
                        fontWeight: 400,
                    }}
                >
                    Si nos querés ayudar a irnos de Luna de Miel, acá te decimos
                    cómo:
                </Typography>
                <Button
                    onClick={(): void => setOpenBankModal(true)}
                    background={theme.colors.header}
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
                        style={{ fontSize: '24px' }}
                    >
                        Regalo
                    </Typography>
                </Button>
            </Container>

            {openBankModal && (
                <Modal
                    open={openBankModal}
                    onClose={(): void => setOpenBankModal(false)}
                >
                    <Modal.Title>
                        <Typography style={{ fontSize: '24px' }}>
                            Gracias por ayudarnos!!
                        </Typography>
                    </Modal.Title>
                    <Modal.Body>
                        <Typography variant="gifts">
                            Podes acercarnos tu regalo en un sobre cuando
                            quieras. El día de la ceremonia también habrá una
                            caja para recibirlos.
                        </Typography>
                        <Typography variant="gifts">
                            Si estás full bancarizado, te dejamos los datos de
                            la cuenta:
                        </Typography>
                        <Divider color={theme.colors.header} />
                        <Typography variant="bank-data">
                            Banco Galicia
                        </Typography>
                        <Typography variant="bank-data">
                            LUCILA SANDRI
                        </Typography>
                        <Typography variant="bank-data">
                            CTA: 4020484-6 048-2
                        </Typography>
                        <Typography variant="bank-data">
                            CBU: 00700481-30004020484621
                        </Typography>
                        <Typography variant="bank-data">
                            ALIAS: JUANIYLULI
                        </Typography>
                    </Modal.Body>
                </Modal>
            )}
        </>
    )
}

export default Gifts
