(function() {

  function basicDirectEmbed() {
    var parenturl = false;
    this.init = init;
    
    function init() {
      console.log("alive");

      const thisField = document.getElementById("input_4");
      const sFTriggerField = document.getElementById("input_7");
      thisField.addEventListener("change", function(data){
        console.log("change", data);
        sFTriggerField.value = data;
        var event = new KeyboardEvent('keyup', {
          bubbles: true,
          cancelable: true,
          key: "Enter",
        });
        sFTriggerField.dispatchEvent(event);
      })
    }

//     if ('URLSearchParams' in window) {
//   const url = new URL(window.location)
//   url.searchParams.set("foo", "bar")
//   history.pushState(null, '', url);
// }
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
