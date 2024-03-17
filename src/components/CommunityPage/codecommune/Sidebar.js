import React from 'react';
import { Public } from '@mui/icons-material';
import { Stars } from '@mui/icons-material';
import { Work } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './css/Sidebar.css';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar-container'>
                <div className='sidebar-options'>
                    <div className='sidebar-option'>
                        <Link>Home</Link>
                    </div>
                    <div className='sidebar-option'>
                        <Link>Community</Link>
                        <div className='link'>
                            <div className='link-tag'>
                                <Public />
                                <Link>Question</Link>
                            </div>
                            <div className='tags'>
                                <p>Tags</p>
                                <p>Users</p>
                            </div>
                        </div>
                    </div>
                    <div className='sidebar-option'>
                        <p>Collectives</p>
                        <div className='link'>
                            <div className='link-tag'>
                                <Stars />
                                <Link>Explore Collectives</Link>
                            </div>
                        </div>
                    </div>
                    <div className='sidebar-option'>
                        <p>Find A Job</p>
                        <div className='link'>
                            <div className='link-tag'>
                                <Link>Jobs</Link>
                            </div>
                        </div>
                    </div>
                    <div className='sidebar-option'>
                        <p>Teams</p>
                        <div className='link'>
                            <div className='link-tag'>
                                <Work />
                                <Link>Companies</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;