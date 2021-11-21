let idNum = 3
export const idCounter = (): Number => {
    const newId: Number = idNum + 1
    idNum++
    return newId
}

export const getConteinerNum = (id: Number): any => {
    
    const substring: String = String(id)

    if (id < 10) {
        return `CONT100000${substring}`
    } else if (id >= 10 && id < 100) {
        return `CONT10000${substring}`
    } else if (id >= 100 && id < 1000) {
        return `CONT1000${substring}`
    } else if (id >= 1000 && id < 10000) {
        return `CONT100${substring}`
    } else if (id >= 10000 && id < 100000) {
        return `CONT10${substring}`
    } else if (id >= 100000 && id < 1000000) {
        return `CONT1${substring}`
    }
}