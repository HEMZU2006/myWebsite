import fm from 'front-matter';

export async function getBlogs() {
    const modules = import.meta.glob('/src/content/blogs/*.md', { query: '?raw', import: 'default' });
    const blogs = [];

    for (const path in modules) {
        const content = await modules[path]();
        const { attributes, body } = fm(content);
        const slug = path.split('/').pop().replace('.md', '');
        blogs.push({ ...attributes, slug, body });
    }

    return blogs.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getBlogBySlug(slug) {
    const blogs = await getBlogs();
    return blogs.find(blog => blog.slug === slug);
}
