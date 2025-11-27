import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getBlogBySlug } from '../utils/blogLoader';
import './BlogPost.css';

const BlogPost = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadPost() {
            const data = await getBlogBySlug(slug);
            setPost(data);
            setLoading(false);
        }
        loadPost();
    }, [slug]);

    if (loading) return <div className="loading">Loading...</div>;
    if (!post) return <div className="not-found">Post not found</div>;

    return (
        <div className="blog-post-container">
            <Link to="/" className="back-link">&larr; Back to Home</Link>

            <article className="blog-post-content">
                <header className="blog-header">
                    <h1 className="blog-title">{post.title}</h1>
                    <div className="blog-meta">
                        <span className="blog-date">{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                </header>

                <div className="markdown-body">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {post.body}
                    </ReactMarkdown>
                </div>
            </article>
        </div>
    );
};

export default BlogPost;
