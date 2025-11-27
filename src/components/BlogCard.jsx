import React from 'react';
import './BlogCard.css';

const BlogCard = ({ title, date, excerpt, link }) => {
    return (
        <a href={link} className="blog-card">
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
