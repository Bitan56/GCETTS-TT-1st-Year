const rollingText = document.getElementById("rolling-text")
const sideBarMenu = document.getElementById("side-bar-menu-list")

// the announcement bar
rollingText.innerHTML = "Our website has been <strong>UPGRADED !!</strong>";

sideBarMenu.innerHTML = `<button class="sidebar-menu-button" style="background-color: rgb(190, 189, 189);">Home</button>
            <button class="sidebar-menu-button" onclick="location.href = 'GCETTS-TT/pages/notes.html';">Notes</button>
            <button class="sidebar-menu-button" onclick="location.href = 'GCETTS-TT/pages/announcements.html';">Announcements</button>
            <button class="sidebar-menu-button" onclick="location.href = 'GCETTS-TT/pages/academic-essentials.html';">Academic Essentials</button>
            <button class="sidebar-menu-button" onclick="window.open('https://www.gcetts.ac.in/')">About our
                College</button>`