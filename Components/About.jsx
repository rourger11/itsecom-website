
export const About=()=>{
    return(
        <div className="about-page" style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", padding: "50px 0" }}>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="display-4 text-primary fw-bold">About Us</h1>
              <p className="lead text-muted">
                Welcome to our company! We are dedicated to delivering top-notch services with a passion for innovation.
              </p>
            </div>
          </div>
          
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card shadow-lg border-0 p-4">
                <h3 className="text-dark">Our Mission</h3>
                <p className="text-muted">We strive to provide the best solutions with cutting-edge technology and innovation.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-lg border-0 p-4">
                <h3 className="text-dark">Our Vision</h3>
                <p className="text-muted">To be a global leader in our industry by offering exceptional value to our clients.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-lg border-0 p-4">
                <h3 className="text-dark">Our Values</h3>
                <p className="text-muted">Integrity, Innovation, and Excellence are the core principles that drive us forward.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}