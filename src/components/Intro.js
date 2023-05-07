import React from 'react'
import Book from '../img/book.jpg'


function Intro () {





    return (

        <section id='intro ' style={{ "padding": "60px 0px" }}>
            <div className="container-lg">
                <div className="row justify-content-center align-items-center ">
                    <div className="col-md-5 text-center text-md-start">
                        <h1 className='display-2'>Science Technology</h1>
                        <h1 className='display-5 text-muted'>Your Best Skills</h1>
                        <p className="lead my-4 text-muted">Lorem ipsum dolor sit amet consectetur. Praesentium officia harum a!</p>
                        <a href='#pricing' className='btn btn-secondary btn-lg'>Buy Now</a>
                        <a href="#sidebar"  className='d-block mt-3' data-bs-toggle='offcanvas' role='button ' aria-controls='side-bar'>Explore my other books</a>
                    </div>
                    <div className="col-5 text-center ">
                        <img className='img-fluid p-5 rounded d-none d-md-block' src={Book} alt="Book" />

                    </div>
                </div>
            </div>
{/* offcanvas */}

            <div className="offcanvas offcanvas-start" id='sidebar' tabIndex={-1} aria-labelledby='sidebar-label'>
<div className="offcanvas-header">
    <h5 className="offcanvas-title" id='sidebar-lable'>
My Other Books
    </h5>
    <button className="btn-close" type='button' data-bs-dismiss='offcanvas' aria-label='Close'>

    </button>
</div>
<div className="offcanvas-body">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt corrupti optio vel eius quisquam repellendus voluptatibus commodi facere amet magni, quod laboriosam vero rerum provident fugit saepe doloribus iure eaque.</p>

{/* dropdown */}
<div className="dropdown mt-3">
<button className='btn btn-secondary dropdown-toggle' type='button' id='book-dropdown' data-bs-toggle='dropdown'>
Choose A Book Title
</button>
<ul className="dropdown-menu"  >
   <li > <a href="#" className="dropdown-item">Nakho laor aliia ls asdgf</a></li>
   <li><a href="#" className="dropdown-item">Sarf</a></li>
   <li><a href="#" className="dropdown-item">Arabic</a></li>
</ul>
</div>

</div>
            </div>
            <a href="" className='fixed-bottom py-0 btn bg-secondary text-light lead  fs-5'> <i class="bi bi-envelope-at-fill"></i> princeali4503050@gmail.com <span><i class="bi bi-telephone-fill"></i> 03472024381 &copy; </span></a>
        </section>
    )
}

export default Intro