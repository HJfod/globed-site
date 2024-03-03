
/**
 * I need to use this rn cuz the tailwindcss vs code plugin doesn't preview 
 * colors that aren't hex :V
 * @param {number} h [0, 360]
 * @param {number} s [0, 1]
 * @param {number} v [0, 1]
 * @return {string}
 * @author https://stackoverflow.com/questions/17242144/javascript-convert-hsb-hsv-color-to-rgb-accurately
 */
const hsvToRgb = (h, s, v) => {
    h /= 360;

    const component = (c) => {
        const hex = Math.round(c * 255).toString(16);
        return hex.length === 1 ? `0${hex}` : hex;
    }

    let r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        s = h.s, v = h.v, h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    
    return `#${component(r)}${component(g)}${component(b)}`;
}

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        fontFamily: {
            'head': ['"Figtree"', 'sans-serif'],
            'body': ['"Open Sans"', 'sans-serif'],
        },
        colors: {
            wallpaper: {
                lightest: hsvToRgb(190, 1.00, 0.70),
                lighter:  hsvToRgb(190, 1.00, 0.60),
                light:    hsvToRgb(190, 1.00, 0.50),
                default:  hsvToRgb(190, 1.00, 0.40),
                dark:     hsvToRgb(190, 1.00, 0.30),
                darker:   hsvToRgb(190, 1.00, 0.20),
                darkest:  hsvToRgb(190, 1.00, 0.10),
            },
            accent: {
                lightest: hsvToRgb(60, 0.13, 1.00),
                lighter:  hsvToRgb(60, 0.40, 1.00),
                light:    hsvToRgb(60, 0.40, 0.80),
                default:  hsvToRgb(45, 0.47, 0.94),
                dark:     hsvToRgb(23, 0.73, 0.96),
                darker:   hsvToRgb(23, 0.73, 0.96),
                darkest:  hsvToRgb(22, 1.00, 0.51),
            },
            tertiary: {
                lightest: hsvToRgb(160, 0.30, 1.00),
                lighter:  hsvToRgb(152, 0.45, 1.00),
                light:    hsvToRgb(148, 0.98, 1.00),
                default:  hsvToRgb(127, 0.90, 1.00),
                dark:     hsvToRgb(145, 1.00, 0.46),
                darker:   hsvToRgb(158, 1.00, 0.34),
                darkest:  hsvToRgb(158, 1.00, 0.12),
            },
            quardiary: {
                lightest: hsvToRgb(200, 0.30, 1.00),
                lighter:  hsvToRgb(192, 0.45, 1.00),
                light:    hsvToRgb(188, 0.98, 1.00),
                default:  hsvToRgb(167, 0.90, 1.00),
                dark:     hsvToRgb(185, 1.00, 0.46),
                darker:   hsvToRgb(198, 1.00, 0.34),
                darkest:  hsvToRgb(198, 1.00, 0.12),
            },
            qvintiary: {
                lightest: hsvToRgb(56,  0.30, 1.00),
                lighter:  hsvToRgb(58,  0.45, 1.00),
                light:    hsvToRgb(60,  0.68, 1.00),
                default:  hsvToRgb(61,  0.72, 0.98),
                dark:     hsvToRgb(61,  0.80, 0.76),
                darker:   hsvToRgb(63,  0.90, 0.44),
                darkest:  hsvToRgb(63,  1.00, 0.22),
            },
        },
        extend: {
            maxWidth: {
                'paragraph': 'min(36rem, 90vw)',
            }
        },
    },
    plugins: [],
}
