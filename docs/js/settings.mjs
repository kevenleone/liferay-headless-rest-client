import { resources, resourcesDomain } from "./resources.mjs";

const storageKey = "@liferay-headless-scalar/properties";

function getStorageScalarSettings() {
    try {
        return JSON.parse(localStorage.getItem(storageKey));
    } catch {
        return {};
    }
}

const liferayTheme = `
.dark-mode {
  color-scheme: dark;
  --scalar-color-1: #f0f1f2;
  --scalar-color-2: #cdced9;
  --scalar-color-3: #a1a1a8;
  --scalar-color-disabled: #6b6c7e;
  --scalar-color-ghost: #5b5c69;
  --scalar-color-accent: #80acff;

  --scalar-background-1: #272833;
  --scalar-background-2: #30313F;
  --scalar-background-3: #393A4A;
  --scalar-background-4: rgba(255, 255, 255, 0.06);
  --scalar-background-accent: rgba(128, 172, 255, 0.15);

  --scalar-border-color: rgba(255, 255, 255, 0.1);
  --scalar-scrollbar-color: rgba(255, 255, 255, 0.24);
  --scalar-scrollbar-color-active: rgba(255, 255, 255, 0.48);
  --scalar-lifted-brightness: 1.4;
  --scalar-backdrop-brightness: 0.5;

  --scalar-shadow-1: 0 1px 3px rgba(0, 0, 0, 0.3);
  --scalar-shadow-2: rgba(0, 0, 0, 0.3) 0px 3px 6px, rgba(0, 0, 0, 0.4) 0px 6px 20px;

  --scalar-button-1: #f0f1f2;
  --scalar-button-1-color: #000;
  --scalar-button-1-hover: #e5e5e5;

  --scalar-color-green: #26b226;
  --scalar-color-red: #fb565b;
  --scalar-color-yellow: #ffc426;
  --scalar-color-blue: #6ecfef;
  --scalar-color-orange: #ff8d4d;
  --scalar-color-purple: #b191f9;

.light-mode {
  color-scheme: light;
  --scalar-color-1: #2e3233; /* neutral-10 */
  --scalar-color-2: #6b6c7e; /* neutral-6 */
  --scalar-color-3: #a1a1a8; /* neutral-4 */
  --scalar-color-disabled: #cdced9; /* neutral-2 */
  --scalar-color-ghost: #e7e7ed; /* neutral-1 */
  --scalar-color-accent: #0b5fff; /* primary */

  --scalar-background-1: #fff; /* white */
  --scalar-background-2: #f7f8f9; /* neutral-0.5 */
  --scalar-background-3: #f0f1f2; /* light gray */
  --scalar-background-4: rgba(0, 0, 0, 0.06);
  --scalar-background-accent: rgba(11, 95, 255, 0.12);

  --scalar-border-color: rgba(0, 0, 0, 0.1);
  --scalar-scrollbar-color: rgba(0, 0, 0, 0.18);
  --scalar-scrollbar-color-active: rgba(0, 0, 0, 0.36);
  --scalar-lifted-brightness: 1;
  --scalar-backdrop-brightness: 1;

  --scalar-shadow-1: 0 1px 3px rgba(0, 0, 0, 0.1);
  --scalar-shadow-2: rgba(0, 0, 0, 0.06) 0px 3px 6px, rgba(0, 0, 0, 0.1) 0px 6px 20px;

  --scalar-button-1: #0b5fff; /* primary */
  --scalar-button-1-color: #ffffff;
  --scalar-button-1-hover: #0a4fcc;

  --scalar-color-green: #287d3c; /* success */
  --scalar-color-red: #da1414;   /* danger */
  --scalar-color-yellow: #b95000; /* warning */
  --scalar-color-blue: #2e5aac; /* info */
  --scalar-color-orange: #ffb46e; /* custom */
  --scalar-color-purple: #7c4eff; /* custom */
}
}`;

const scalarConfigBase = {
    defaultHttpClient: {
        targetKey: "node",
        clientKey: "fetch",
    },

    layout: "classic",

    servers: [
        {
            url: "http://localhost:{port}",
            description: "Localhost",
            variables: { port: { default: "8080" } },
        },
        {
            url: "{protocol}://{domain}",
            description: "Custom Server",
            variables: {
                domain: { default: "example.liferay.com" },
                protocol: { default: "https" },
            },
        },
    ],

    persistAuth: true,
    sources: resources.map((resource) => ({
        url: `${resourcesDomain}/${resource.replace("/", "-")}.json`,
        title: resource.replace(".json", ""),
    })),
    ...getStorageScalarSettings(),
};

const scalar = Scalar.createApiReference("scalar", scalarConfigBase);

export function applyScalarSettings(settings) {
    document.body.appendChild(document.createElement("scalar"));

    if (settings.theme === "liferay") {
        delete settings.theme;

        settings.customCss = liferayTheme;
    }

    if (settings.useScalarProxy == "on") {
        delete settings.useScalarProxy;

        settings.proxyUrl = "https://proxy.scalar.com";
    }

    localStorage.setItem(storageKey, JSON.stringify(settings));

    scalar.updateConfiguration({
        ...scalarConfigBase,
        ...settings,
    });
}
