import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Font awesome 
import { library } from '@fortawesome/fontawesome-svg-core'

// Icons: Regular
import { faHandshake } from '@fortawesome/free-regular-svg-icons'
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons'
import { faMoneyBillAlt } from '@fortawesome/free-regular-svg-icons'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faWindowClose  } from '@fortawesome/free-regular-svg-icons'

// Icons: Brand
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
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

