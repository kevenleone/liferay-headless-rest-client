import { applyScalarSettings, scalarConfigBase } from "./settings.mjs";

const settingsBtn = document.getElementById("settings");
const modalBackdrop = document.getElementById("settings-modal-backdrop");
const cancelBtn = document.querySelector(".cancel-btn");
const form = document.getElementById("settings-form");

settingsBtn.addEventListener("click", () => {
    modalBackdrop.style.display = "flex";
});

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

Scalar.createApiReference("scalar", scalarConfigBase);
