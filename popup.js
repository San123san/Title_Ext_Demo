const btn = document.getElementById("title-display");
const titleDisplay = document.getElementById("title-tab")

btn.addEventListener('click', async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    console.log(tab);
    titleDisplay.innerHTML = "The Title of this tab is: <div> <br> <span id='titletab'>" + (tab.title || "No Title") + "</span> <div>";
    btn.style.display = 'none'; 
});
