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

/* === Individual Popups === */
function showCodeBox() { document.getElementById('codeBox').style.display = 'flex'; }
function hideCodeBox() { document.getElementById('codeBox').style.display = 'none'; }

function showInfoBox() { document.getElementById('infoBox').style.display = 'flex'; }
function hideInfoBox() { document.getElementById('infoBox').style.display = 'none'; }

function showWifiCodeBox() { document.getElementById('wifiCodeBox').style.display = 'flex'; }
function hideWifiCodeBox() { document.getElementById('wifiCodeBox').style.display = 'none'; }

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
