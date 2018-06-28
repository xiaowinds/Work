import Vue from 'vue';

// å¨å±æ³¨åcountæä»¤
Vue.directive('count', {

  // è¢«ç»å®åç´ æå¥ç¶èç¹æ¶è°ç¨(ä»ä¿è¯ç¶èç¹å­å¨ï¼ä½ä¸ä¸å®å·²è¢«æå¥ææ¡£ä¸­
  // åªè°ç¨ä¸æ¬¡
  inserted(el, binding, vnode, oldVnode) {

    // å¦ææ²¡æè®¾ç½®æå¤§å¼ï¼åé»è®¤æå¤å¯è¾å¥50ä¸ªå­ç¬¦
    let max = binding.value || 50
    // é¦åè®¾ç½®inputæ¡çå®½åº¦ï¼çåºæç¤ºæ°å¼çå®½åº¦
    el.style.width = 'calc(100% - 43px)'
    // è·å¾inputåç´ åå¼å§çvalueçé¿åº¦
    let initValueLength = el.getElementsByTagName('input')[0].value.length;
    // æ°å»ºä¸ä¸ªspanæ ç­¾
    let node = document.createElement('span')
    // è®¾ç½®éé¢çææ¬
    node.innerHTML = ' ' + initValueLength + '/' + max
    // å°åææ°å»ºçspanåç´ æè½½å°ç¶åç´ åï¼ä½¿å¶æä¸ºç¶åç´ çæåä¸ä¸ªå­åç´ 
    el.parentNode.appendChild(node)
  },

  // æä»¤æå¨ç»ä»¶ç VNode åå¶å­ VNode å¨é¨æ´æ°åè°ç¨
  componentUpdated(el, binding, vnode, oldVnode) {

    let max = binding.value || 50
    // å½åè¾å¥å­ç¬¦çé¿åº¦
    let curLen = el.getElementsByTagName('input')[0].value.length
    // æ¹åspanæ ç­¾çææ¬
    el.parentNode.lastChild.innerHTML = ' ' + curLen + '/' + max
    // æ¿å°æåä¸ä¸ªspanæ ç­¾åç´ 
    let span = el.parentNode.lastChild
    // è®¡ç®é¿åº¦ï¼å¦æé¿åº¦è¶è¿æå¤§é¿åº¦ï¼å°±æ·»å ä¸ä¸ªclass
    if (curLen > max) {
      span.setAttribute('class', 'exceedMax');
    } else {
      span.setAttribute('class', '');
    }
  }
});
