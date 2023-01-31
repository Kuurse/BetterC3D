function onError(error) {
    console.log(`Error: ${error}`);
}

function onRemoved() {
    console.log(`Removed`);
}

function isErrorTab(tab){
    var c3dError = (tab.url.includes("https://cults3d.com/en/3d-model/") && 
      (tab.title.includes("Gone") || tab.title.includes("this page is not working!")));
    
    var thingiverseError = (tab.url.includes("thingiverse.com/thing:") &&
        tab.title === "404");

    return c3dError || thingiverseError;
}

function closeTabs(tabIds) {
    console.log("Tab ids", tabIds)
    tabIds.forEach(tab => {
        if (isErrorTab(tab) ){
            removing = browser.tabs.remove(tab.id);
            removing.then(onRemoved, onError);
        }
    });
}

browser.tabs.onUpdated.addListener(async (tab) => {
    var querying = browser.tabs.query({currentWindow: true});
    querying.then(closeTabs, onError);
});
  
