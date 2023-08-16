var contextMenus  = {};

contextMenus.startAutoFollow = chrome.contextMenus.create(
    {
        "id" : "1",
        "title" : "Start auto Like/Follow",
        "contexts": ["page"]
    },
    function () {
        if(chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message)
        }
    }
)

chrome.contextMenus.onClicked.addListener(contextMenusHandler);

function contextMenusHandler(info, tab) {

    if(info.menuItemId === contextMenus.startAutoFollow) {
        chrome.scripting.executeScript( {
            target: {tabId: tab.id, allFrames: true},
            files: ['js/autoFollow.js']
        })
    }
}