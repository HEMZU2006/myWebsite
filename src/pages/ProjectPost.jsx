import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getProjectBySlug } from '../utils/projectLoader';
import './ProjectPost.css';

const ProjectPost = () => {
    const { slug } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadProject() {
            const data = await getProjectBySlug(slug);
            setProject(data);
            setLoading(false);
        }
        loadProject();
    }, [slug]);

    if (loading) return <div className="loading">Loading...</div>;
    if (!project) return <div className="not-found">Project not found</div>;

    return (
        <div className="project-post-container">
            <Link to="/" className="back-link">&larr; Back to Home</Link>

            <article className="project-post-content">
                <header className="project-header">
                    <h1 className="project-title">{project.title}</h1>
                    <div className="project-meta">
                        {project.tags && (
                            <div className="project-tags">
                                {project.tags.map((tag, index) => (
                                    <span key={index} className="project-tag">{tag}</span>
                                ))}
                            </div>
                        )}
                    </div>
                    {project.image && (
                        <div className="project-hero-image">
                            <img src={project.image} alt={project.title} />
                        </div>
                    )}
                </header>

                <div className="markdown-body">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {project.body}
                    </ReactMarkdown>
                </div>
            </article>
        </div>
    );
};

export default ProjectPost;
