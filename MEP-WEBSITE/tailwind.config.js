/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                minimunBlue: "#d6eaff",
                minimunGreen: "#f0ffff",

                mainGreenAqua: "#00af90",
                mainLittleDarkYellow: "#dc9832",
                mainColorHover: "#9c86ff",
                mainBGHover: "#5008c3",
                custtomBGButton: "#4a2670",
                titlePurple: "#ccc0ff",

                brownBordersLine: "#9b8d7f4d",
                tripleBoxBackground: "#121f22",
                tripleBoxBorderColor: "#9c7653",
                trpBoxtextColor: "#9b8d7f36",
                customBorderColor: "#9b8d7f26",
                customBorderColorHover: "#9b8d7fb3",
                nonBlack: "#101015",
            },
            fontFamily: {
                kurale: ["Kurale", "serif"],
                nokora: ["Nokora", "sans-serif"],
            },
            backgroundImage: (theme) => ({
                BGCImage:
                    "linear-gradient( to bottom, rgba(0, 0, 0, 0.92) 10%, #0a0a0a 25%, #0f1c20 40%, #102424 65%, #0f1c20 90%)",
                    navMenu:
                    "linear-gradient(to left, rgb(0,0,0,0), rgb(63, 65, 49) 25%)",
            }),
        },
    },
    plugins: [],
};
