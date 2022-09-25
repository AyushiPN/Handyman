import React from 'react'
import Grid from '@mui/material/Grid';
import beauty from '../../assets/2.png';
import plum from '../../assets/1.png';
import elec from '../../assets/3.png';
import Painter from '../../assets/painter.jpeg';
import Carpenter from '../../assets/carpenter.jpeg';
import Chef from '../../assets/chef.jpeg';
import {Link} from 'react-router-dom';
import './Category.css';


function Category() {
  return (
    <div className='category'>
        <div className='container mainHead'>
            <h1>Select a Service To Continue</h1>
        </div>
        <Grid container className="outer">
            <Grid xs={12} sm={6} md={4}>
                <div className='beauty cout'>
                    <Link to='/servicecard'>
                        <div className="card container">
                            <div className='cardImage'>
                                <img src ={beauty} alt='beauty' />
                            </div>
                            <div className='cardHeading'>
                                <p>Beautician</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </Grid>
            <Grid xs={12} sm={6} md={4}>
                <div className='plumber cout'>
                    <Link to='/about'>
                        <div className="card container">
                            <div className='cardImage'>
                                <img src ={plum} alt='plum' className='pulm'/>
                            </div>
                            <div className='cardHeading'>
                                <p>Plumber</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </Grid>
            <Grid xs={12} sm={6} md={4}>
                <div className='electrician cout'>
                    <Link to='/about'>
                        <div className="card container">
                            <div className='cardImage'>
                                <img src ={elec} alt='elec' />
                            </div>
                            <div className='cardHeading'>
                                <p>Electrician</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </Grid>
        </Grid>
        <Grid container className="outer1">
            <Grid xs={12} sm={6} md={4}>
                <div className='painter cout'>
                    <Link to='/about'>
                        <div className="card container">
                            <div className='cardImage'>
                                <img src ={Painter} alt='Painter' />
                            </div>
                            <div className='cardHeading'>
                                <p>Painter</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </Grid>
            <Grid xs={12} sm={6} md={4}>
                <div className='carpenter cout'>
                    <Link to='/about'>
                        <div className="card container">
                            <div className='cardImage'>
                                <img src ={Carpenter} alt='Carpenter' />
                            </div>
                            <div className='cardHeading'>
                                <p>Carpenter</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </Grid>
            <Grid xs={12} sm={6} md={4}>
                <div className='chef cout'>
                    <Link to='/about'>
                        <div className="card container">
                            <div className='cardImage'>
                                <img src ={Chef} alt='Chef' />
                            </div>
                            <div className='cardHeading'>
                                <p>Chef</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </Grid>
        </Grid>
    </div>
  )
}

export default Category