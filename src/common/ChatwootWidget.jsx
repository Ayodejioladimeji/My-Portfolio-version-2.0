import { useEffect } from "react";

const ChatwootWidget = () => {
  useEffect(() => {
    // Add Chatwoot Settings
    window.chatwootSettings = {
      hideMessageBubble: false,
      position: "right",
      locale: "en",
      type: "expanded_bubble",
      launcherTitle: "Chat with me",
    };
    (function (d, t) {
      var BASE_URL = "https://app.chatwoot.com";
      var g = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
      g.src = BASE_URL + "/packs/js/sdk.js";
      g.defer = true;
      g.async = true;
      s.parentNode.insertBefore(g, s);
      g.onload = function () {
        window.chatwootSDK.run({
          websiteToken: "L1ckGkjkmbjVakyPC48idixz",
          baseUrl: BASE_URL,
        });
      };
    })(document, "script");
  }, []);
  return null;
};
export default ChatwootWidget;
