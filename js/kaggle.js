// Fetching the JSON data from kaggle_projects.json
fetch('assets/kaggle_projects.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(projects => {
        const kaggleList = document.getElementById('kaggle-list');

        projects.forEach(project => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a href="${project.url}" target="_blank">${project.name}</a>: ${project.description} <span>(Difficulty: ${project.difficulty}, Technologies: ${project.technologies.join(', ')})</span>`;
            kaggleList.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
