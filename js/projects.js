// Fetch projects from JSON file and display them dynamically
fetch('assets/projects.json')
    .then(response => response.json())
    .then(data => {
        const projects = data.projects;
        const projectGrid = document.getElementById('project-grid');

        // Clear any existing content (if needed)
        projectGrid.innerHTML = '';

        // Loop through each project and create the HTML for each
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');

            // Create the inner HTML for each project card
            projectCard.innerHTML = `
                <img src="${project.image}" alt="${project.name}">
                <h3>${project.name}</h3> <!-- Display project name below the image -->
                <div class="project-details">
                    <p><strong>Duration:</strong> ${project.duration}</p>
                    <p>${project.description}</p>
                    <p><strong>Features:</strong></p>
                    <ul>
                        ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                    <p><strong>Technologies Used:</strong></p>
                    <ul>
                        ${Object.entries(project.technologies_used).map(([key, value]) => {
                            return `<li><strong>${key}:</strong> ${Array.isArray(value) ? value.join(', ') : value}</li>`;
                        }).join('')}
                    </ul>
                </div>
            `;

            // Append the project card to the grid
            projectGrid.appendChild(projectCard);

            // Add click event listener to the image to toggle project details
            const projectImage = projectCard.querySelector('img');
            projectImage.addEventListener('click', () => {
                projectCard.classList.toggle('show-details'); // Toggle the visibility of the project details
            });
        });
    })
    .catch(error => {
        console.error('Error fetching projects:', error);
    });
