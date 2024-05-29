export default defineNuxtPlugin (nuxtApp => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "2d6cb4ba-d7ce-4d0f-811a-c9f0a2227698";

    (function() {
      var d = document;
      var s = d.createElement("script");
  
      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();
  });

