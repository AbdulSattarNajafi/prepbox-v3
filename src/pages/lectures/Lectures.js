import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../components/elements/loader';
import ReactPlayer from 'react-player';
import axios from 'axios';
import capitalizeString from '../../utils/capital';
import classes from './Lectures.module.css';

const Lectures = () => {
    const navigate = useNavigate();
    const { bookName, materialName, topicId } = useParams();
    const [lectures, setLecture] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const getLectures = async () => {
            try {
                setIsLoading(true);
                setError('');
                const response = await axios.get(
                    `https://app.prepanywhere.com/api/stu/static_books/lecture_details?id=${topicId}`
                );
                const data = response.data;
                const lectureData = data;

                setLecture(lectureData);
            } catch (error) {
                if (error.response) {
                    setError('No Data Found!');
                } else if (error.request) {
                    setError('Network Error');
                } else {
                    setError('Something went wrong, Please try again!');
                }
            } finally {
                setIsLoading(false);
            }
        };
        getLectures();
    }, [topicId]);

    return (
        <section className={classes.solution}>
            <div className={classes['solution-container']}>
                {isLoading && <Loader />}
                {error && <p className='error-message'>{error}</p>}

                {!error && !isLoading && (
                    <div>
                        {lectures ? (
                            <div className={classes['solution-body']}>
                                <h2>{capitalizeString(bookName.replace(/-/g, ' '))}</h2>
                                <h3>
                                    {capitalizeString(
                                        materialName.replace('-', '.').replace(/-/g, ' ')
                                    )}
                                </h3>
                                {lectures &&
                                    lectures.map((lecture) => {
                                        return (
                                            <div>
                                                <p className={classes['lecture-name']}>
                                                    {lecture.name}
                                                </p>
                                                <div className={classes['solution-video']}>
                                                    <ReactPlayer
                                                        url={`https://www.youtube.com/watch?v=${lecture.youtube_code}`}
                                                        width='100%'
                                                        height='100%'
                                                        display='flex'
                                                        justify-content='center'
                                                        config={{
                                                            youtube: {
                                                                playerVars: { showinfo: 1 },
                                                            },
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        );
                                    })}
                            </div>
                        ) : (
                            <div className={classes['post__error']}>
                                <h2 className='text-blue'>Solution video not Found</h2>
                                <p>
                                    The Solution video you are looking for might have been removed,
                                    had it's name changed or is temporary unavailable.
                                </p>
                                <button
                                    type='button'
                                    aria-label='Questions Page'
                                    onClick={() => navigate(-1)}
                                >
                                    Go to Questions
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Lectures;
