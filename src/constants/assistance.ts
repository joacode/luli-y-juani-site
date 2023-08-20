import { CivilAssistance, PartyAssistance } from 'src/models/assistance'

export const civilAssistanceData = [
    {
        label: 'Voy al registro y a la recepción',
        value: CivilAssistance.ALL,
    },
    {
        label: 'Voy al registro',
        value: CivilAssistance.CEREMONY,
    },
    {
        label: 'Voy a la recepción',
        value: CivilAssistance.PARTY,
    },
    { label: 'No voy a poder ir', value: CivilAssistance.DONT },
]

export const filteredCivilAssistanceData = [
    {
        label: 'Voy al registro',
        value: CivilAssistance.CEREMONY,
    },
    { label: 'No voy a poder ir', value: CivilAssistance.DONT },
]

export const partyAssistanceData = [
    {
        label: 'Voy a la ceremonia y a la fiesta',
        value: PartyAssistance.ALL,
    },
    { label: 'Voy a la ceremonia', value: PartyAssistance.CEREMONY },
    { label: 'Voy a la fiesta', value: PartyAssistance.PARTY },
    { label: 'No voy a poder ir', value: PartyAssistance.DONT },
]
