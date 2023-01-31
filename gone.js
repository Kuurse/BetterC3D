function pageContainsText(text) {
    return (
      document.documentElement.textContent || document.documentElement.innerText
    ).indexOf(text) >= -1;
}

if (
    pageContainsText("Unfortunately the creation you are looking for is gone…")
    ||
    pageContainsText("Oh dear, this page is not working!")
    
  ) {
    // browser.scripting.executeScript(
    //     {
    //         target: document,
    //         files: ["bg.js"]
    //     }
    // )
    console.log("gone.js")
  }
  