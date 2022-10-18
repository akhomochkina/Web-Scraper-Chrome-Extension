chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if (msg.command == "shareItems") {
    var obj = msg.data;
    console.log(obj);
  }
});
