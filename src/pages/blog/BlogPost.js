import { useState } from 'react';

import { blogPosts } from '../../constant/blogPosts';
import SecondaryButton from '../../components/button/secondary-button';
import BlogCard from './../../components/cards/BlogCard';
import classes from './BlogPost.module.css';

import ReactGA from 'react-ga';
ReactGA.initialize("UA-255807593")
ReactGA.pageview(window.location.pathname + window.location.search);


const BlogPost = () => {
    const [selectedCategory, setSelectedCategory] = useState('education');

    const filteredPosts = selectedCategory
        ? blogPosts.filter((post) => post.category === selectedCategory)
        : blogPosts;

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <article className={classes.blog}>
            <div className='container'>
                <h1 className='text-center'>Our Blog</h1>

                <div className={classes['blog__header']}>
                    <SecondaryButton
                        text='Education'
                        isActive={selectedCategory === 'education' ? true : false}
                        onClick={() => handleCategoryChange('education')}
                    />
                    <SecondaryButton
                        text='Youtube'
                        isActive={selectedCategory === 'youtube' ? true : false}
                        onClick={() => handleCategoryChange('youtube')}
                    />
                    <SecondaryButton
                        text='Student Highlight'
                        isActive={selectedCategory === 'student' ? true : false}
                        onClick={() => handleCategoryChange('student')}
                    />
                    <SecondaryButton
                        text='Tutor Highlight'
                        isActive={selectedCategory === 'tutor' ? true : false}
                        onClick={() => handleCategoryChange('tutor')}
                    />
                </div>

                {filteredPosts.length > 0 ? (
                    <div className={classes['blog__grid']}>
                        {filteredPosts.map((post) => {
                            return <BlogCard key={post.id} post={post} />;
                        })}
                    </div>
                ) : (
                    <div className={classes['blog__posts-empty']}>
                        <p>Posts not Found!</p>
                    </div>
                )}
            </div>
        </article>
    );
};

export default BlogPost;
