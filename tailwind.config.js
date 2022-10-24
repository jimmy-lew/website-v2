module.exports = {
    theme: {
        extend: {
            fontFamily: {
                cubano: ['Cubano']
            },
            colors: {
                "primary-100": "#14171A",
            }
        }
    },
    daisyui: {
        themes: [
        {
            mytheme: {
                "primary": "#292E34",

                "secondary": "#FF6600",

                "accent": "#09BB6F",

                "neutral": "#12171B",

                "base-100": "#000",

                "info": "#0ea5e9",

                "success": "#22c55e",

                "warning": "#f59e0b",

                "error": "#be123c",
            },
        },
        ],
    },
    plugins: [require('daisyui')]
}
