import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Font awesome 
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Icons: Regular
import { faHandshake, faWindowClose, faEnvelope, faCheckCircle, faMoneyBillAlt, faCalendarCheck,  } from '@fortawesome/free-regular-svg-icons'


// Icons: Brand
import { faTwitter, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import store from './store'

library.add(faHandshake);
library.add(faCalendarCheck);
library.add(faMoneyBillAlt);
library.add(faTwitter);
library.add(faInstagram);
library.add(faGithub);
library.add(faLinkedin);
library.add(faCheckCircle);
library.add(faEnvelope);
library.add(faWindowClose);

// Import bulma css
require('./assets/lib/bulma.css')

createApp(App).use(store)
    .component("font-awesome-icon", FontAwesomeIcon)
    .use(router)
    .mount('#app')

