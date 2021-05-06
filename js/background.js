chrome.tabs.onUpdated.addListener(function() {
  chrome.tabs.query({
      lastFocusedWindow: true,
      active: true
    },
    function(tabs) {
      var currenturl = tabs[0].url;
      var domain = currenturl.split('/')[2].substring(0, 16);
      var url = new URL(currenturl);
      var args = new URLSearchParams(url.search);
      var id = args.get('id');
      if (domain == 'books.google.com' && id != null) {
        var newurl = "https://www.google.com/books/edition/_/" + id
        chrome.tabs.update(null, {
          url: newurl
        });
      };
    });
});
