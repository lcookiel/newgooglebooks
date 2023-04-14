chrome.tabs.onUpdated.addListener(function () {
  chrome.tabs.query({
    lastFocusedWindow: true,
    active: true
  },
    function (tabs) {
      var currenturl = tabs[0].url;
      var googlebooksmatch = RegExp("(?:https?:\/\/)?(?:www.)?books.google.[a-zA-Z]*").test(currenturl);

      if (googlebooksmatch) {
        var url = new URL(currenturl);
        var args = new URLSearchParams(url.search);
        var id = args.get('id');
        if (id != null) {
          var newurl = "https://www.google.com/books/edition/_/" + id;
          chrome.tabs.update(null, {
            url: newurl
          });
        };
      }
    });
});
