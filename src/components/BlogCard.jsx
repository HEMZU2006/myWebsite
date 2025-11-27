import React from 'react';
import { Link } from 'react-router-dom';
import './BlogCard.css';

const BlogCard = ({ title, date, excerpt, link }) => {
    const isInternal = link.startsWith('/');

    if (isInternal) {
        return (
            <Link to={link} className="blog-card">
                <div className="blog-content">
                    <span className="blog-date">{date}</span>
                    <h3 className="blog-title">{title}</h3>
                    <p className="blog-excerpt">{excerpt}</p>
                    <span className="read-more">Read Article &rarr;</span>
                </div>
            </Link>
        );
    }

    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="blog-card">
            <div className="blog-content">
                <span className="blog-date">{date}</span>
                <h3 className="blog-title">{title}</h3>
                <p className="blog-excerpt">{excerpt}</p>
                <span className="read-more">Read Article &rarr;</span>
            </div>
        </a>
    );
};

export default BlogCard;
