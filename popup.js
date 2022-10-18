function testFunction() {
  document
    .getElementsByClassName(
      "d--fl ai--c social-action-bar__action social-action-bar__share"
    )
    .click();
}

document.querySelector(".share-btn").addEventListener("click", function () {
  testFunction();
});

chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
  var activeTab = tabs[0];
  var obj = {};

  chrome.tabs.sendMessage(activeTab.id, { command: "shareItems", data: obj });
});
