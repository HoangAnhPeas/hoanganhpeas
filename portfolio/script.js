async function loadProjects() {
    const res = await fetch('https://stake-departmental-pull-dependence.trycloudflare.com/projects');
    const projects = await res.json();

    const container = document.getElementById('project-list');

    projects.forEach(project => {
        const div = document.createElement('div');
        div.className = 'project';

        div.innerHTML = `
            <img src="${project.image}">
            <div>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <p class="tech">${project.tech.join(' • ')}</p>
                <a href="${project.link}">View Project</a>
            </div>
        `;

        container.appendChild(div);
    });
}

loadProjects();