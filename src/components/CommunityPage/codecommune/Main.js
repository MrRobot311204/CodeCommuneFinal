import React from 'react';
import { FilterList } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import AllQuestions from './AllQuestions';
import './css/Main.css';

function Main() {
    return (
        <div className="main">
            <div className='main-container'>
                <div className='main-top'>
                    <h2>Posts</h2>
                    <Link>
                        <button>Ask Questions</button>
                    </Link>
                </div>
                <div className='main-description'>
                    <p>All Posts</p>
                    <div className='main-filter'>
                        <div className='main-tabs'>
                            <div className='main-tab'>
                                <Link>Newest</Link>
                            </div>
                            <div className='main-tab'>
                                <Link>Active</Link>
                            </div>
                            <div className='main-tab'>
                                <Link>More</Link>
                            </div>
                        </div>
                        <div className='main-filter-item'>
                            <FilterList />
                            <p>Filter</p>
                        </div>
                    </div>
                </div>
                <div className='questions'>
                    <div className='question'>
                        <AllQuestions />
                        <AllQuestions />
                        <AllQuestions />
                        <AllQuestions />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;