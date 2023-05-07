import React from 'react'
import Book from '../img/book.jpg'
function Glance () {
    return (
        <section id='topics' style={{ "padding": "60px 0px" }}>
            <div className="container-md">
                <div className="text-center">
                    <h2 >Inside The Book</h2>
                    <p className="text-muted lead">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="row my-5 g-5 justify-content-around align-items-center">
                    
                    <div className="col-6 col-lg-4 text-center">
                        <img src={Book} className='img-fluid rounded ' style={{ "width": "80%" }} alt="Book" />
                    </div>

                    <div className="col-lg-6">
                        {/* Accordion */}
                        <div className="accordion" id='chapters'>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id='heading-1' >
                                    <button className="accordion-button" type='button' data-bs-toggle='collapse' data-bs-target='#chapter-1' aria-expanded="true" aria-controls='chapter-1'
                                    >
                                        Chapter 1 - Your First Web Page
                                    </button>
                                </h2>
                                <div id="chapter-1" className='accordion-collapse collapse show' aria-labelledby='heading-1' data-bs-parent='#chapters' >
                                    <div className="accordion-body">
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas exercitationem alias consequatur natus tenetur sequi veniam provident beatae.
                                        </p>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas exercitationem alias consequatur natus tenetur sequi veniam provident beatae.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id='heading-2' >
                                    <button className="accordion-button" type='button' data-bs-toggle='collapse' data-bs-target='#chapter-2' aria-expanded="true" aria-controls='chapter-2'
                                    >
                                        Chapter 2 - Mastering CSS
                                    </button>
                                </h2>
                                <div id="chapter-2" className='accordion-collapse collapse  ' aria-labelledby='heading-2' data-bs-parent='#chapters' >
                                    <div className="accordion-body">
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas exercitationem alias consequatur natus tenetur sequi veniam provident beatae asperiores.
                                        </p>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas exercitationem alias consequatur natus tenetur sequi veniam provident beatae asperiores.
                                        </p>                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id='heading-3' >
                                    <button className="accordion-button" type='button' data-bs-toggle='collapse' data-bs-target='#chapter-3' aria-expanded="true" aria-controls='chapter-3'
                                    >
                                        Chapter 3 - The Power Of Javascript
                                    </button>
                                </h2>
                                <div id="chapter-3" className='accordion-collapse collapse ' aria-labelledby='heading-3' data-bs-parent='#chapters' >
                                    <div className="accordion-body">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas exercitationem alias consequatur natus tenetur sequi veniam provident beatae asperiores.
                                        </p>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas exercitationem alias consequatur natus tenetur sequi veniam provident beatae asperiores.
                                        </p>  
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id='heading-3' >
                                    <button className="accordion-button" type='button' data-bs-toggle='collapse' data-bs-target='#chapter-3' aria-expanded="true" aria-controls='chapter-3'
                                    >
                                        Chapter 4 - Sharing Data (Mongo DB Databases)
                                    </button>
                                </h2>
                                <div id="chapter-3" className='accordion-collapse collapse ' aria-labelledby='heading-3' data-bs-parent='#chapters' >
                                    <div className="accordion-body">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas exercitationem alias consequatur natus tenetur sequi veniam provident beatae asperiores.
                                        </p>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas exercitationem alias consequatur natus tenetur sequi veniam provident beatae asperiores.
                                        </p>  
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id='heading-4' >
                                    <button className="accordion-button" type='button' data-bs-toggle='collapse' data-bs-target='#chapter-4' aria-expanded="true" aria-controls='chapter-4'
                                    >
                                        Chapter 1 - Your First Web Page
                                    </button>
                                </h2>
                                <div id="chapter-4" className='accordion-collapse collapse ' aria-labelledby='heading-4' data-bs-parent='#chapters' >
                                    <div className="accordion-body">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas exercitationem alias consequatur natus tenetur sequi veniam provident beatae asperiores.
                                        </p>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas exercitationem alias consequatur natus tenetur sequi veniam provident beatae asperiores.
                                        </p>  
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id='heading-5' >
                                    <button className="accordion-button" type='button' data-bs-toggle='collapse' data-bs-target='#chapter-5' aria-expanded="true" aria-controls='chapter-5'
                                    >
                                        Chapter 5 - User Authentication
                                    </button>
                                </h2>
                                <div id="chapter-5" className='accordion-collapse collapse ' aria-labelledby='heading-5' data-bs-parent='#chapters' >
                                    <div className="accordion-body">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas exercitationem alias consequatur .
                                        </p>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas exercitationem alias consequatur natus tenetur sequi veniam provident beatae asperiores.
                                        </p>  
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                
                </div>
            </div>
        </section>
    )
}

export default Glance

