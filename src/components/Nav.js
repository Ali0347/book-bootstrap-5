import React from 'react'

function Nav () {
  return (
    <nav className='navbar navbar-expand-lg navbar-light '>
      <div className="container-xl">

        <a href="#intro" className='navbar-brand'>
          <span className="fw-bold text-secondary">
          <i class="bi bi-globe-central-south-asia me-2" me-2></i>
            Science Technology - Ali Bahadur
          </span>
        </a>
        {/* toggle button for mobile nav */}
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#main-nav' aria-controls='main-nav' aria-expanded='false' aria-label='Toggle navigation'>
          <span className="navbar-toggler-icon"></span>
        </button>

      {/* navbar links */}
      <div class="collapse navbar-collapse  justify-content-end align-center" id="main-nav">
      <ul class="navbar-nav  mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link"  href="#">About The Book</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#reviews">Reviews</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"  href="#contact">Order</a>
        </li>
        <li class="nav-item me-2">
          <a class="nav-link" href="#pricing">pricing</a>
        </li>
       <li className="nav-item  d-none d-md-inline">
        <a href="#pricing" className="btn btn-secondary">Buy Now</a>
       </li>
      </ul>
    </div>

      </div>
    </nav>
  )
}

export default Nav