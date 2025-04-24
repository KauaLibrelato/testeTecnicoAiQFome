export function capitalizeFirstLetter(text?: string) {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export function formatCurrency(value: number) {
    if (isNaN(value)) return "R$ 0,00";
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(value);
}
