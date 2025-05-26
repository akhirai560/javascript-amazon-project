export function formatCurrency(priceCents, numOfDecimels = 2) {
    return (Math.round(priceCents)/100).toFixed(numOfDecimels)
}