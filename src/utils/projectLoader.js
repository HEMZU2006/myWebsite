import fm from 'front-matter';

export async function getProjects() {
    const modules = import.meta.glob('/src/content/projects/*.md', { query: '?raw', import: 'default' });
    const projects = [];

    for (const path in modules) {
        const content = await modules[path]();
        const { attributes, body } = fm(content);
        const slug = path.split('/').pop().replace('.md', '');
        projects.push({ ...attributes, slug, body });
    }

    // Sort by priority if available, otherwise by date or title
    return projects.sort((a, b) => (a.priority || 99) - (b.priority || 99));
}

export async function getProjectBySlug(slug) {
    const projects = await getProjects();
    return projects.find(project => project.slug === slug);
}
