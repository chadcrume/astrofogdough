import type { App } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
// import Ripple from 'primevue/ripple';

export default (app: App) => {
    // app.directive('ripple', Ripple);
    app.use(PrimeVue, {
        theme: {
            preset: Aura
        }
    });
};