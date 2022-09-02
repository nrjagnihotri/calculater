let id = 0
export const getUniqId = (prefix) => {
    id++
    return `${prefix}-${id}`
}

export const getSelectValues = (val = []) => {
    return val?.map(a => a.value)
}

export const makeSelectValues = (option = [], value = [], multi = false) => {
    let re = []
    if (!multi) {
        re = option?.find(c => String(c.value) === String(value))
    } else {
        if (value?.length > 0) {
            value?.forEach((v, i) => {
                const x = option?.find(a => String(a.value) === String(v))
                if (x) re.push(x)
            })
        }

    }
    return re
}