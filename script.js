/* === Sidebar === */
function openSidebar() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("overlay").style.display = "block";
}
function closeSidebar() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("overlay").style.display = "none";
}
function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

/* Helper to hide/show menu button */
function hideMenuButton() {
    document.querySelector(".open-btn").style.display = "none";
}
function showMenuButton() {
    document.querySelector(".open-btn").style.display = "block";
}

/* === Individual Popups === */
function showCodeBox() { 
    document.getElementById('codeBox').style.display = 'flex'; 
    closeSidebar(); 
    hideMenuButton(); // hide menu button
}
function hideCodeBox() { 
    document.getElementById('codeBox').style.display = 'none'; 
    showMenuButton(); // show menu button
}

function showInfoBox() { 
    document.getElementById('infoBox').style.display = 'flex'; 
    closeSidebar(); 
    hideMenuButton(); 
}
function hideInfoBox() { 
    document.getElementById('infoBox').style.display = 'none'; 
    showMenuButton(); 
}

function showWifiCodeBox() { 
    document.getElementById('wifiCodeBox').style.display = 'flex'; 
    closeSidebar(); 
    hideMenuButton(); 
}
function hideWifiCodeBox() { 
    document.getElementById('wifiCodeBox').style.display = 'none'; 
    showMenuButton(); 
}

/* === Copy Text === */
function copyText(elementId) {
    const text = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard: ' + text);
    }).catch(err => { console.error('Failed to copy: ', err); });
}

/* === Google Translate === */
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,el,it,pt,ro,es,fr,ka,de,cs,hy,sq,ru',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
}
