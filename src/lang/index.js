import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

// å½éå
const i18n = new VueI18n({
  locale: 'zh', // set locale
  messages: {
    zh: require('./zh.js'), // ä¸­æè¯­è¨å
    en: require('./en.js') // è±æè¯­è¨å
  }
})

export default i18n
