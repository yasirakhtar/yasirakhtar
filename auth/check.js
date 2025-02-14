document.addEventListener("DOMContentLoaded", function () {
    const projectName = "testProject"; // Is project ka name yaha set karo
    const jsonURL = "https://yasirakhtar.co/auth/projects.json"; // JSON ka URL

    fetch(jsonURL)
        .then(response => response.json())
        .then(data => {
            const project = data.projects.find(proj => proj.name === projectName);
            if (project && project.disable) {
                showPopup(project.info, project.redirectURL || "https://test.ownsocialpanel.in");
            }
        })
        .catch(error => console.error("Error loading config:", error));
});

function showPopup(message, redirectURL) {
    // Popup element create karna
    const popup = document.createElement("div");
    popup.innerHTML = `
        <div style="
            position: fixed; 
            top: 50%; left: 50%; transform: translate(-50%, -50%);
            background: white; 
            padding: 20px; 
            box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
            z-index: 1000; 
            text-align: center;
            border-radius: 10px;
        ">
            <h3 style="margin: 0 0 10px;">Alert</h3>
            <p>${message}</p>
            <button onclick="closePopup()">OK</button>
        </div>
        <div id="overlay" style="
            position: fixed; 
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 999;
        "></div>
    `;

    document.body.appendChild(popup);

    // 10 sec baad opacity kam karna
    setTimeout(() => {
        let opacity = 1;
        const fadeInterval = setInterval(() => {
            if (opacity > 0) {
                opacity -= 0.05;
                document.body.style.opacity = opacity;
            } else {
                clearInterval(fadeInterval);
                window.location.href = redirectURL; // Redirect
            }
        }, 100);
    }, 10000);
}

function closePopup() {
    document.body.removeChild(document.body.lastChild); // Popup remove karna
}
