(function () {
    // Apne main website ka config.json URL mention karo
    const CONFIG_URL = "https://yasirakhtar.co/auth/projects.json";
  
    // Function to check project status
    function checkProjectStatus(projectName) {
      fetch(CONFIG_URL)
        .then(response => response.json())
        .then(data => {
          const project = data.projects.find(p => p.name === projectName);
          
          if (project) {
            if (project.disable) {
              disableProject(project.info);
            }
          } else {
            console.warn("Project not found in config.json!");
          }
        })
        .catch(error => console.error("Error loading config:", error));
    }
  
    // Disable function: Page opacity 0 + Popup
    function disableProject(message) {
      document.body.style.transition = "opacity 0.5s ease-in-out";
      document.body.style.opacity = "0";
  
      // Create popup
      const popup = document.createElement("div");
      popup.style.position = "fixed";
      popup.style.top = "50%";
      popup.style.left = "50%";
      popup.style.transform = "translate(-50%, -50%)";
      popup.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
      popup.style.color = "white";
      popup.style.padding = "20px";
      popup.style.borderRadius = "8px";
      popup.style.textAlign = "center";
      popup.style.zIndex = "1000";
      popup.innerHTML = `<h2>Project Disabled</h2><p>${message}</p>`;
      document.body.appendChild(popup);
    }
  
    // Get project name from script tag attribute
    document.addEventListener("DOMContentLoaded", () => {
      const scriptTag = document.querySelector("script[data-project]");
      if (scriptTag) {
        const projectName = scriptTag.getAttribute("data-project");
        checkProjectStatus(projectName);
      } else {
        console.warn("Project name attribute not found in script tag!");
      }
    });
  })();
  