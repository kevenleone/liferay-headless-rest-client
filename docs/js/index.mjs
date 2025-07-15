import { applyScalarSettings } from "./settings.mjs";

const cancelBtn = document.querySelector(".cancel-btn");
const form = document.getElementById("settings-form");
const modalBackdrop = document.getElementById("settings-modal-backdrop");
const settingsBtn = document.getElementById("settings");

cancelBtn.addEventListener("click", () => {
    modalBackdrop.style.display = "none";
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const settings = Object.fromEntries(formData.entries());

    applyScalarSettings(settings);

    modalBackdrop.style.display = "none";
});

settingsBtn.addEventListener("click", () => {
    modalBackdrop.style.display = "flex";
});
