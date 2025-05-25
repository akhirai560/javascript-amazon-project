export function formatCurrency(priceCents, numOfDecimels = 2) {
    return (priceCents/100).toFixed(numOfDecimels)
}