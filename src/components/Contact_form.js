import React from 'react'

function Contact_form () {
    return (
        <section id='contact' style={{ "padding": "60px 0px" }}>
            <div className="container-lg">
                <div className="text-center">
                    <h2 >Contact Us</h2>
                    <p className="text-muted lead">Questions to ask? Fill out the form to contact me directly...</p>
                </div>
                <div className="row justify-content-center my-5">

                    <div className="col-lg-6">
                        <form>

                            <label for="email" className='form-label'>Email:</label>
                            <div className="input-group mb-4">
                                <span className="input-group-text">
                                    <i class="bi bi-envelope-at-fill"></i></span>
                                <input type="email" id='email' className="form-control" placeholder='e.g. bahadur@example.com' />
                            </div>

                            <label for="name" className='form-label'>Name:</label>
                            <div className="input-group mb-4">
                                <span className="input-group-text">
                                    <i class="bi bi-person-fill"></i>    </span>
                                <input type="text" id='name' className="form-control" placeholder='e.g. Ali Bahadur' />
                            </div>

                            <label for="subject" className="form-label">What is your Question zAbout ?</label>
                            <div className="input-group mb4">
                                <span className="input-group-text">
                                    <i class="bi bi-chat-left-dots-fill"></i>                                </span>
                                <select id="subject" className="form-select">
                                    <option value="pricing" selected>Pricing query</option>
                                    <option value="content">Content Query</option>
                                    <option value="other">Other Query</option>
                                </select>
                            </div>


                            <div className="form-floating mb-4 mt-5">
                                <textarea id="query" className="form-control" style={{ height: "140px" }}></textarea>
                                <label for="query">Your Query</label>
                            </div>

                            <div className="mb-4 text-center">
                                <button type='submit' className='btn btn-secondary'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact_form