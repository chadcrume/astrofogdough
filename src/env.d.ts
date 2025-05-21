// This file helps set up typescript intellisense for astro

// These 2 interfaces set up typescript intellisense for env vars
interface ImportMetaEnv {
    readonly PUBLIC_COINGECKOAPI_KEY: string;
    readonly PUBLIC_COINGECKOAPI_PING: string;
    // more env variables...
}
interface ImportMeta {
    readonly env: ImportMetaEnv;
}