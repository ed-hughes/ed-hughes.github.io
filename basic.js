(function() {

  function basicDirectEmbed() {
    var parenturl = false;
    this.init = init;
    
    function init() {
      console.log("alive");
    }
  }

  document.observe("dom:loaded", function() {
    console.log("dom:loaded");
    if (!$('stage')) {
      console.log("!stage isBuilder?");
      Element.prototype.triggerEvent = function(eventName) {
        if (document.createEvent) {
          var evt = document.createEvent('HTMLEvents');
          evt.initEvent(eventName, true, true);
          console.log({evt});
          return this.dispatchEvent(evt);
        }

        if (this.fireEvent) return this.fireEvent('on' + eventName);
      }

      var widget = new basicDirectEmbed();
      widget.init();
    }
  });

})();
