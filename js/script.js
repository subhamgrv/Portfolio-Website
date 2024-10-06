document.addEventListener("DOMContentLoaded", function() {
    // Handle Projects
    const projectForm = document.getElementById("project-form");
    const projectList = document.getElementById("project-list");

    projectForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form from refreshing the page
        
        // Get project data from the form
        const projectName = document.getElementById("project-name").value;
        const projectDescription = document.getElementById("project-description").value;

        // Create a new list item
        const li = document.createElement("li");
        li.textContent = `${projectName} - ${projectDescription}`;

        // Append new project to the list
        projectList.appendChild(li);

        // Clear form inputs after submission
        projectForm.reset();
    });

    // Handle Kaggle Projects
    const kaggleForm = document.getElementById("kaggle-form");
    const kaggleList = document.getElementById("kaggle-list");

    kaggleForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form from refreshing the page
        
        // Get Kaggle data from the form
        const kaggleName = document.getElementById("kaggle-name").value;
        const kaggleURL = document.getElementById("kaggle-url").value;

        // Create a new list item with a link
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = kaggleURL;
        a.textContent = kaggleName;
        a.target = "_blank"; // Open in new tab

        li.appendChild(a);

        // Append new Kaggle project to the list
        kaggleList.appendChild(li);

        // Clear form inputs after submission
        kaggleForm.reset();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Theme color changer
    const colorButtons = document.querySelectorAll('.theme-selector .color');

    colorButtons.forEach(colorBtn => {
        colorBtn.addEventListener('click', function() {
            // Get the chosen color from the data attribute
            const selectedColor = colorBtn.getAttribute('data-color');
            document.documentElement.style.setProperty('--theme-color', selectedColor);
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const sidebar = `
        <aside class="sidebar">
            <nav>
                <ul>
                    <li><a href="index.html" class="active">Home</a></li>
                    <li><a href="certifications.html">Certifications</a></li>
                    <li><a href="projects.html">Projects</a></li>
                    <li><a href="kaggle.html">Kaggle Projects</a></li>
                    <li><a href="About me.html">About me</a></li>
                </ul>
            </nav>
        </aside>
    `;
    document.getElementById("sidebar-placeholder").innerHTML = sidebar;
});

