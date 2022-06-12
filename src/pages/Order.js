import React from "react";
import Header from "../components/Header/Header";
import "../components/Header/Header.css";



function Order() {
  return (
    <>
      <Header/>
      {/* <script id="zelty-order-iframe">
      (function(){
      window._zwg = window._zwg || {}
      window._zwg.key = '6d237259969578f'
      window._zwg.stylesheet = 'app/assets/stylesheets/components/_zelty.scss'
      var z = document.createElement('script')
      z.type = 'text/javascript'
      z.src = 'https://order.zelty.fr/loader-iframe.js'
      var allScripts = document.getElementsByTagName('script'),
          s = allScripts[allScripts.length - 1];
      s.parentNode.insertBefore(z, s)
    })();
    </script>  */}
    </>
  );
}

export default Order;

