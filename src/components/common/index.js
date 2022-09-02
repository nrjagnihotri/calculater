import { useTranslation } from 'react-i18next'
//import i18n from '../../configs/i18n'


export const isValid = (val, extra = null) => {
    return (val !== "" && val !== null && val !== undefined && val !== extra)
}
console.log("isValid", isValid)

export const log = (log, log2 = "") => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        console.log(log, log2)
    } else {
        return false
    }
}

/**
 * Translate
 * @param {*} id
 * @param {*} values
 * @param {*} create
 * @returns
 */
export const FM = (id, values) => {
    // const { i18n, t } = useTranslation()

    if (values === null) values = {}
    return i18n.t(id, { ...values })
}

const capitalize = (str, lower = false) => (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase())

export const getInitials = (name) => {
    name = capitalize(name)
    const rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu')

    let initials = [...name.matchAll(rgx)] || []

    initials = (
        (initials.shift()?.[1] || '') + (initials.pop()?.[1] || '')
    ).toUpperCase()
    return initials
}

/**
 * Create Ability
 */
export const createAbility = (permissions = {}) => {
    const abilities = []
    if (permissions) {
        const keys = Object.keys(permissions)
        keys?.forEach((key, index) => {
            for (const [k, val] of Object.entries(permissions[key])) {
                if (val) abilities.push({
                    action: k,
                    subject: key
                })
            }
        })
    }
    return abilities
}