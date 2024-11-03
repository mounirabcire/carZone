import { useTranslation } from "react-i18next";
import i18n from "./utils/i18n";

const languages = [
    {
        code: "en",
        name: "English",
    },
    {
        code: "fr",
        name: "Français",
    },
    {
        code: "ar",
        name: "العربية",
    },
];
function App() {
    const { t } = useTranslation();
    return (
        <div>
            <h1>{t("welcomeReact")}</h1>
            <ul>
                {languages.map((language) => (
                    <li key={language.code}>
                        <button
                            onClick={() => i18n.changeLanguage(language.code)}
                        >
                            {language.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
