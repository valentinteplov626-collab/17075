import {
    getTranslations,
    isFallbackTranslation
} from "./shared-4NBZDGOX.js";
import {
    getCurrentLanguage
} from "./shared-O2PRP3GE.js";
import "./shared-A4NYGF2N.js";
var translateElements = async (loadFallbackTranslation2, macroses, localePath) => {
    const lang = getCurrentLanguage();
    document.documentElement.setAttribute("lang", lang);
    const translations = await getTranslations(loadFallbackTranslation2, localePath);
    if (["ar", "he", "fa", "ur", "az", "ku", "ff", "dv"].includes(lang)) {
        const isFallback = isFallbackTranslation(localePath);
        if (!isFallback) {
            document.documentElement.setAttribute("dir", "rtl");
        }
    }
    const nonTranslatedKeys = [];
    Object.entries(translations).forEach((translation) => {
        const key = translation[0];
        let value = translation[1];
        const macros = macroses == null ? void 0 : macroses[key];
        value = macros ? value.replaceAll(macros.macros, macros.macrosValue) : value;
        const elementToTranslate = document.querySelectorAll(
            `[data-translate="${key}"]`
        );
        if (elementToTranslate == null ? void 0 : elementToTranslate.length) {
            elementToTranslate.forEach((element) => {
                if (element) {
                    const useHTML = element.hasAttribute("data-translate-html");
                    if (useHTML) {
                        element.innerHTML = value;
                    } else {
                        if (!element.childNodes.length) element.textContent = value;
                        element.childNodes.forEach((node) => {
                            if (node.nodeType === Node.TEXT_NODE) {
                                node.nodeValue = value;
                            }
                        });
                    }
                }
            });
            return;
        }
        nonTranslatedKeys.push(key);
    });
    if (nonTranslatedKeys.length) {
        console.warn(
            `Some keys from locales folder weren't used for translation when loading the landing page for the first time:`,
            nonTranslatedKeys.join(", ")
        );
    }
};
var loadFallbackTranslation = async () => {
    return await import("./shared-HDCZ7IOL.js").then(
        (m) => m.default
    );
};
var initTranslation = async () => {
    translateElements(loadFallbackTranslation);
};
initTranslation();