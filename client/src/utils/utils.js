export const currencyFormat = (language, currency, number) => {
    // en-US | fr-FR | ar-DZ => Based on the language settings
    // USD | EUR | DZD => The currency we want to display based on user settings
    return new Intl.NumberFormat(language, {
        style: "currency",
        currency: currency,
    }).format(number);
};
