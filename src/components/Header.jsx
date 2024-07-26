function Header(props) {
    return (  
        <nav class="navbar navbar-expand-lg bg-light fixed-top container-fliud">
    <div class="container-fluid">
      <i class="fa-duotone fa-citrus-slice"></i>
      <a class="navbar-brand" href="/"><i class="fa-regular fa-paper-plane"></i> MYTINERARY</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/">HOME</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">MY TRIPS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">ABOUT US</a>
          </li>
        </ul>

        {/* <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search..."
            aria-label="Search"
          />
          <button class="btn btn-outline-dark" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
        </form> */}
      </div>
    </div>
  </nav>
    );
}

export default Header;