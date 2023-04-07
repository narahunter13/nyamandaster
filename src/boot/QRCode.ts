import { boot } from 'quasar/wrappers';
import VueQrcode from 'vue-qrcode'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(({ app }) => {
  app.component('qr-code', VueQrcode);
})
