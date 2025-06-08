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

export {};
