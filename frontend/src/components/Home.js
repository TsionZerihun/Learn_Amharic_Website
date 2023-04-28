import React, { Component } from 'react';

export default function Home()  {
    
            
   
        return (
              <section>


                <nav className="navbar navbar-expand-lg  navbar-dark py-3">
                <div className="container">
                    <a href="#" className="navbar-brand"> Frontend BS React </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu"></button>

                    <div className="collapse navbar-collapse" id="navmenu">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a href="#learn" className="nav-link"> What you'll learn</a>
                            </li>
                            <li className="nav-item">
                                <a href="#questions" className="nav-link"> Questions</a>
                            </li>
                        </ul>
                    </div>

                </div>
                </nav>

                <section className="bg-dark text-light p-5 text-center text-sm-start">
                    <div className="container">
                        <div className="d-sm-flex align-items-center justify-content-between">
                            <div>
                                <h1> Become Fluent in <span className="text-warning"> Amharic</span> </h1>
                                <p>Teaching the foundation of Amharic in an Engaging and Fun way!!!</p>
                                <button  className="btn btn-primary btn-lg"> Start the Course</button>
                                <a href="/frontend/templates/frontend/test.html" className="btn btn-dark"> Learn More</a>

                            </div>
                            
                        </div>
                    </div>
                </section>

                <section className="bg-warning w-100 text-light p-5">
                    <div className="container">
                        <div className="d-md-flex justify-content-between align-items-center">
                            <h3 className="mb-3 mb-md-0"> Sign Up for Newsletter</h3>

                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Enter Email"/>
                                <button className="btn btn-dark btn-lg" type="button">send</button>
                            </div>
                            
                        </div>
                    </div>

                </section>

                <section className="p-5">
                    <div className="container">
                        <div className="row text-center g-4">		

                            <div className="col-md mb-3">
                                <div className="card bg-dark text-light">
                                    <div className="card-body text-center">
                                        <div className="h1 mb-3">
                                            <i className="bi bi-laptop"></i>
                                        </div>
                                        
                                    <h3 className="card-title mb-3"> Introduction </h3>
                                    <p className="card-text">Some simple examples of greetings and self introductions</p>
                                    <a href="#" onClick= {() => alert('clicked')} className="btn btn-primary"> Learn alertNow</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md mb-3">
                                <div className="card bg-secondary text-light">
                                    <div className="card-body text-center">
                                        <div className="h1 mb-3">
                                            <i className="bi bi-person-square"></i>
                                        </div>
                                        
                                    <h3 className="card-title mb-3"> Pronouns </h3>
                                    <p className="card-text">Basic Pronouns</p>
                                    <a href="#" className="btn btn-dark"> Learn Now</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md mb-3">
                                <div className="card bg-dark text-light">
                                    <div className="card-body text-center">
                                        <div className="h1 mb-3">
                                            <i className="bi bi-people"></i>
                                        </div>
                                        
                                    <h3 className="card-title mb-3"> Days of the week</h3>
                                    <p className="card-text">Days of the week </p>
                                    <a href="#" className="btn btn-primary"> Learn Now</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="row text-center g-4">
                            <div className="col-md mb-3 ">
                                <div className="card bg-dark text-light">
                                    <div className="card-body text-center">
                                        <div className="h1 mb-3">
                                            <i className="bi bi-laptop"></i>
                                        </div>
                                        
                                    <h3 className="card-title mb-3"> Introduction </h3>
                                    <p className="card-text">Some simple examples of greetings and self introductions</p>
                                    <a href="#" className="btn btn-primary"> Learn More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md mb-3">
                                <div className="card bg-secondary text-light">
                                    <div className="card-body text-center">
                                        <div className="h1 mb-3">
                                            <i className="bi bi-person-square"></i>
                                        </div>
                                        
                                    <h3 className="card-title mb-3"> Pronouns </h3>
                                    <p className="card-text">Basic Pronouns, simple examples and practice questions</p>
                                    <a href="#" className="btn btn-dark"> Learn More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md mb-3">
                                <div className="card bg-dark text-light">
                                    <div className="card-body text-center">
                                        <div className="h1 mb-3">
                                            <i className="bi bi-people"></i>
                                        </div>
                                        
                                    <h3 className="card-title mb-3"> Vocabulary </h3>
                                    <p className="card-text">Some basic vocabulay with sample examples </p>
                                    <a href="#" className="btn btn-primary"> Learn More</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

              </section>
            
            
        
        
        );
    
}