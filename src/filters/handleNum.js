import Vue from 'vue';

// æ°å­å ååç¬¦
Vue.filter('thousand', function (value) {
    return Number(value).toLocaleString();
});
