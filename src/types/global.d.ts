interface LiferayGlobal {
    Util: {
        fetch: typeof fetch;
    };
}

declare global {
    interface Window {
        Liferay: LiferayGlobal;
    }
}

// Extend the globalThis type
declare var globalThis: Window & typeof globalThis;

// This ensures the file is treated as a module
export {};
