chrome.tabs.onUpdated.addListener(function(){
  chrome.tabs.query(
 {
  lastFocusedWindow: true,
  active: true
 },
 function (tabs)
 {
  var currenturl = tabs[0].url
  var urlstatus = tabs[0].status
  var domain = currenturl.split("/")[2].split(".").slice(0,2) // [books, google] OR [www, google]
  var check = currenturl.split("/")[3] // [books, google] OR [www, google]
  if (domain[0] === "books"
  && domain[1] === "google"
  && check.split("?")[0].substring(0,5) === "books"
  && check.split("?")[1].split("&")[0].split("=")[0] === "id") {
    console.log("hello");
    var id = check.split("?")[1].split("&")[0].split("=")[1]
    var newurl = "https://www.google.com/books/edition/0/" + id
    chrome.tabs.update(null, {url:newurl});
  };
 });
});
