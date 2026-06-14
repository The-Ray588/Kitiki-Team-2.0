const translations = {

    ru: {

        heroTitle:
        "Воплощаем идеи в Minecraft-искусство.",

        heroSubtitle:
        "От рендера до анимации — всё в одном месте.",

        about:
        "О нас",

        services:
        "Наши услуги",

        team:
        "Наша команда",

        prices:
        "Цены"

    },

    en: {

        heroTitle:
        "Bringing ideas to life through Minecraft art.",

        heroSubtitle:
        "From renders to animations — everything in one place.",

        about:
        "About Us",

        services:
        "Services",

        team:
        "Our Team",

        prices:
        "Prices"

    }

};
let currentLanguage = "ru";

const languageBtn =
document.getElementById("languageBtn");
languageBtn.addEventListener(
"click",
() => {

    currentLanguage =
    currentLanguage === "ru"
    ? "en"
    : "ru";

    updateLanguage();

});
function updateLanguage(){

    const lang =
    translations[currentLanguage];

    document.getElementById(
        "heroTitle"
    ).textContent =
    lang.heroTitle;

    document.getElementById(
        "heroSubtitle"
    ).textContent =
    lang.heroSubtitle;

    languageBtn.textContent =
    currentLanguage === "ru"
    ? "🇷🇺 RU"
    : "🇬🇧 EN";

}
