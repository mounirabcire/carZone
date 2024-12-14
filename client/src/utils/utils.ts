type CurrencyLang = "en-US" | "fr-FR" | "ar-DZ";
type Currency = "USD" | "EUR" | "DZD";

export const currencyFormat = (
    language: CurrencyLang,
    currency: Currency,
    amount: number | null
) => {
    if (amount === null) return;
    // en-US | fr-FR | ar-DZ => Based on the language settings
    // USD | EUR | DZD => The currency we want to display based on user settings
    return new Intl.NumberFormat(language, {
        style: "currency",
        currency: currency,
    }).format(amount);
};
