import mongoose, { Schema, Model } from 'mongoose'
import { CivilAssistance, PartyAssistance } from './assistance'
import { SpecialMenu } from './specialMenu'

export interface ChangeGuest {
    key:
        | 'name'
        | 'lastName'
        | 'civilAssistance'
        | 'partyAssistance'
        | 'menu'
        | 'song'
        | 'password'
    value: string | CivilAssistance | PartyAssistance | SpecialMenu
}

export interface GuestInterface {
    name: string
    lastName: string
    civilAssistance: CivilAssistance
    partyAssistance: PartyAssistance
    menu: SpecialMenu
    song: string
    active?: boolean
}

export interface GuestUpdateRequest {
    _id: string
    name?: string
    lastName?: string
    civilAssistance?: CivilAssistance
    partyAssistance?: PartyAssistance
    menu?: SpecialMenu
    song?: string
    active?: boolean
}

export interface GuestFilter {
    name?: string
    lastName?: string
    civilAssistance?: CivilAssistance
    partyAssistance?: PartyAssistance
    menu?: SpecialMenu
    song?: string
    active?: boolean
}

const guestSchema = new Schema<GuestInterface>({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    civilAssistance: ['ALL', 'CEREMONY', 'PARTY', 'DONT', 'EMPTY'],
    partyAssistance: ['ALL', 'CEREMONY', 'DONT', 'EMPTY'],
    menu: ['VEGGIE', 'VEGAN', 'COELIAC', 'DEFAULT', 'EMPTY'],
    song: { type: String },
    active: { type: Boolean, default: true },
})

const Guest: Model<GuestInterface> =
    mongoose.models.Guest ||
    mongoose.model<GuestInterface>('Guest', guestSchema)

export default Guest
