export default function (time: number): string {
    let remainingTime = ''

    const days = Math.trunc(time / (24 * 60 * 60))

    const hours = Math.trunc((time - (days * 24 * 60 * 60)) / (60 * 60))

    const min = Math.trunc((time - (days * 24 * 60 * 60) - (hours * 60 * 60)) / 60)

    remainingTime = `${days}D ${hours}H ${min}M`

    return remainingTime
}