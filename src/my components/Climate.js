import React from 'react'
import "./Climate.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Climate() {

  const click1 = () => {
    let msg = document.getElementById("message").value;
    let mail = document.getElementById("email").value;
    let name1 = document.getElementById("name1").value;
   
    let existingFormData = JSON.parse(localStorage.getItem("formData")) || [];

    let newFormData = {
      name: name1,
      email: mail,
      message: msg
    };

   
    existingFormData.push(newFormData);

    localStorage.setItem("formData", JSON.stringify(existingFormData));

    document.getElementById("message").value = "";
    document.getElementById("email").value = "";
    document.getElementById("name1").value = "";
  }
  return (
    <div className='body'>

      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">Climate Action Club</a>
          <img src='https://i.pinimg.com/originals/00/6b/9e/006b9e0c2f9eaf08edbb6408e4bff6be.png' height="50px" style={{ borderRadius: "100px" }} />
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-end " id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#why">Why</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#get-involved">Get Involved</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="container text-center">
          <h1>Join the Climate Action Movement</h1>
          <h6>Hands together, we can make a difference!</h6>
          <a href="#join-us" class="btn btn-success btn-lg">Join Us</a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2>About Climate Action</h2>
          <div className="d-flex row justify-content-evenly">
            <div className="col-md-6 col-lg-3 mb-2">
              <img src="https://i.gzn.jp/img/2022/07/06/individuals-fight-climate-change-effective-things/00.jpg" height="200px" width="200px"  />
            </div>
            <div className="col-md-6 col-lg-3 mb-2">
              <img src="https://blog.solarclue.com/wp-content/uploads/2023/09/Benefits-of-1.png" height="200px" width="200px"  />
            </div>
            <div className="col-md-6 col-lg-3 mb-2">
              <img src="https://images.yourstory.com/cs/wordpress/2018/05/electric_car.png" height="200px" width="200px"  />
            </div>
            <div className="col-md-6 col-lg-3 mb-2">
              <img src="https://media.istockphoto.com/id/1032603574/photo/green-globe-with-world-map-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=fWef4pXM443Wb7IeDRy3cqA62GmdcSwU4zIbG0xMrlg=" height="200px" width="200px"  />
            </div>
          </div>
          <p>
            Climate action is the urgent response to the ongoing climate crisis, encompassing the efforts to reduce or eliminate human impact on the Earth's climate. This includes initiatives to curtail greenhouse gas emissions, mainly from fossil fuel burning, industrial processes, and deforestation.
            
          </p>
        </div>
      </section>

      {/* Why Section  */}
      <section id="why" className="section bg-light">
        <div className="container">
          <h2>Why Climate Action Matters</h2>
          <div className="d-flex row justify-content-evenly">
            <div className="col-md-6 col-lg-3 mb-2">
              <img src="https://ecdn.dhakatribune.net/contents/cache/images/1200x630x1xxxxx1/uploads/dten/2023/01/11/tunisia-drought.jpeg" height="200px" width="200px"  />
            </div>
            <div className="col-md-6 col-lg-3 mb-2">
              <img src="https://asean.org/wp-content/uploads/elementor/thumbs/36-1-pb9u0gftfm9vrw4by5hcyq2wsqgajqc0us7zfnl8s0.jpg" height="200px" width="200px"  />
            </div>
            <div className="col-md-6 col-lg-3 mb-2">
              <img src="https://media.greenmatters.com/brand-img/lKTBzA97y/0x0/climate-action-1650987221207.jpg" height="200px" width="200px"  />
            </div>
            <div className="col-md-6 col-lg-3 mb-2">
              <img src="https://ftmm.unair.ac.id/wp-content/uploads/2023/10/Blog-Images2@2x.jpg" height="200px" width="200px"  />
            </div>
          </div>
          <p>
          Climate change matters because it threatens the very foundation of our planet's ability to support life. Rising temperatures disrupt weather patterns, leading to more extreme weather events like heatwaves, droughts, floods, and wildfires. These events harm ecosystems, displace communities, and threaten food and water security for billions of people.
          The impacts of climate change are already being felt around the world, from melting glaciers and rising sea levels to changes in agriculture and the spread of diseases. If we don't take action to reduce greenhouse gas emissions and mitigate climate change, the consequences will become even more severe in the future.
          </p>
        </div>
      </section>

      {/* Get Involved Section  */}
      <section id="get-involved" className="section">
        <div className="container">
          <h2>Get Involved</h2>
          <p>
            Join the movement! Here are some ways you can contribute to climate action:
          </p>
          <ul>
            <li>Reduce your carbon footprint</li>
            <li>Support renewable energy initiatives</li>
            <li>Advocate for sustainable policies</li>
            <li>Plant trees and participate in local environmental projects</li>
          </ul>
        </div>
      </section>

      {/* Take Action Section  */}
      <section id="take-action" className="section">
        <div className="container">
          <h2>Take Action</h2>
          <p>
            Ready to make a difference? Here are actionable steps you can take to contribute to climate action:
          </p>
          <ol>
            <li>Use energy-efficient appliances</li>
            <li>Reduce, reuse, and recycle</li>
            <li>Support sustainable businesses</li>
            <li>Engage in local environmental initiatives</li>
          </ol>
        </div>
      </section>

      {/* Join with us  */}
      <section id="join-us" className="section bg-light">
        <div className="container">
          <h2>Join with Us</h2>
          <form>
            <div className="row">
              <div className="form-group col-6">
                <label for="name">Your Name</label>
                <input type="text" className="form-control"  id="name1" placeholder="name" />
              </div>
              <div className="form-group col-6">
                <label for="email">Your Email</label>
                <input type="email" className="form-control"  id="email" placeholder="name@example.com" />
              </div>
            </div>
            <div className="form-group">
              <label for="message">Your Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Type your message here..."></textarea>
            </div>
            <button type="submit" onClick={click1} className="btn btn-success mt-3">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container" id="contact">
          <div className="row">
            <div className="col-md-6">
              <h3>Contact Us</h3>
              <p>
                Have questions or suggestions? Feel free to reach out to us.
              </p>
              <p>Email: info@climateactionclub.com</p>
            </div>
            <div className="col-md-6">
              <h3>Follow Us</h3>
              <ul className="social-icons">
                <li><a href="#" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a></li>

                <li><a href="#" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a></li>
                <li><a href="#" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li><a href="#" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></li>
              </ul>
            </div>
          </div>
          <p>&copy; 2024 Climate Action Club. All rights reserved.</p>
        </div>
      </footer>



    </div>
  )
}

