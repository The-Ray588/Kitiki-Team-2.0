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
const observer =
new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList
            .add("show");

        }

    });

},
{
    threshold:0.2
}

);
document
.querySelectorAll(".fade-up")
.forEach(element=>{

    observer.observe(element);

});
const profile = {

    nickname:
    localStorage.getItem(
      "nickname"
    ) || "Гость",

    role:
    localStorage.getItem(
      "role"
    ) || "Посетитель"

};
function saveProfile(){

    localStorage.setItem(
      "nickname",
      profile.nickname
    );

    localStorage.setItem(
      "role",
      profile.role
    );

}
const nicknameInput =
document.getElementById(
"nicknameInput"
);
if(nicknameInput){

    nicknameInput.value =
    profile.nickname;

    nicknameInput.addEventListener(
    "input",
    ()=>{

        profile.nickname =
        nicknameInput.value;

        saveProfile();

    });

}
const roleSelect =
document.getElementById(
"roleSelect"
);
if(roleSelect){

    roleSelect.value =
    profile.role;

    roleSelect.addEventListener(
    "change",
    ()=>{

        profile.role =
        roleSelect.value;

        saveProfile();

    });

}
const avatarUpload =
document.getElementById(
"avatarUpload"
);
if(avatarUpload){

avatarUpload.addEventListener(
"change",
(event)=>{

const file =
event.target.files[0];

if(!file) return;

const reader =
new FileReader();

reader.onload =
function(e){

localStorage.setItem(
"avatar",
e.target.result
);

};

reader.readAsDataURL(
file
);

});

    }
localStorage.setItem(
"banner",
e.target.result
);
window.addEventListener(
"load",
()=>{

const avatar =
localStorage.getItem(
"avatar"
);

const banner =
localStorage.getItem(
"banner"
);

if(
avatar &&
document.querySelector(
".profile-avatar img"
)
){

document.querySelector(
".profile-avatar img"
).src = avatar;

}

if(
banner &&
document.querySelector(
".profile-banner"
)
){

document.querySelector(
".profile-banner"
).style.backgroundImage =
`url(${banner})`;

}

});

