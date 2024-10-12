// Fetching the JSON data from certificates.json
fetch('assets/certificates.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(certifications => {
        const certificationGrid = document.getElementById('certification-grid');

        certifications.forEach(cert => {
            const certItem = document.createElement('div');
            certItem.classList.add('certification-item');

            certItem.innerHTML = `
                <div class="certification-image-container">
                    <img src="${cert.image}" alt="${cert.name}" class="certification-image">
                    <h3 class="certification-name">${cert.name}</h3>
                </div>
            `;

            certificationGrid.appendChild(certItem);
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
