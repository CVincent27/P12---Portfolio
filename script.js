document.addEventListener('DOMContentLoaded', function () {
    fetch('projets.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('project');
            const projectsList = document.createElement('div');
            projectsList.className = 'projects-list';

            data.forEach(project => {
                const projectElement = document.createElement('div');
                projectElement.className = 'project';

                const skills = project.skills.map(skill => `<i class="${skill}"></i>`).join(' ');

                projectElement.innerHTML = `
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="skills">${skills}</div>
                `;
                projectsList.appendChild(projectElement);
            });

            container.appendChild(projectsList);
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des projets:', error);
        });
});
