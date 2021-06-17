import React from "react";
import Navtab from "./Navtab";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import "./Welcome.css";
function Welcome() {
  return (
    <div className="welcome">
      {/* <Navtab /> */}
      <div className="contents">
        <h3 style={{ color: "bisque" }}>Hi! My name is</h3>
        <h1
          className="home_name"
          style={{ color: "#FF7F50", fontSize: "5rem" }}
        >
          Shikhar{" "}
          <span class="home_name--last" style={{ color: "bisque" }}>
            Pathak
          </span>
        </h1>
        <br />
        <h2 style={{ color: "bisque" }}>
          Web Developer, Designer & Programmer
        </h2>
        <br />
        <div className="link-btn">
          <Button variant="outline-dark" className="custom-btn">
            <LinkContainer to="/home">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
          </Button>
        </div>
      </div>
      {/* <a href="./index2.html"><h3> <div class="mx-2 my-2 justify-content-right align-items-rights">
                <button class="btn btn-success">Know More</button>

            </div>
</h3></a> */}
    </div>
  );
}

export default Welcome;

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">

//      <!-- Bootstrap CSS -->
//      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
//      <!-- <link rel="stylesheet" href="style.css"> -->
//      <link rel="stylesheet" href="css/main.css">
//     <title>Personal Folio</title>
// </head>
// <body>

//     <main>

//         <section class="home">
//             <h3>Hi! My name is</h3>
//             <h1 class="home_name">John Ivar <span class="home_name--last">Shelby</span></h1>
//             <h2>Web Developer, Designer & Programmer</h2>
//             <br>
//             <a href="./index2.html"><h3> <div class="mx-2 my-2 justify-content-right align-items-rights">
//                 <button class="btn btn-success">Know More</button>

//             </div>
// </h3></a>

//             <div class="social-icons">
//                 <a href="#!">
//                     <i class="fab fa-twitter fa-2x"></i>
//                 </a>
//                 <a href="#!">
//                     <i class="fab fa-facebook fa-2x"></i>
//                 </a>
//                 <a href="#!">
//                     <i class="fab fa-instagram fa-2x"></i>
//                 </a>
//                 <a href="#!">
//                     <i class="fab fa-github fa-2x"></i>
//                 </a>
//             </div>
//         </section>
//         <footer>&copy; Copyright 2020</footer>
//     </main>
//     <script src="https://kit.fontawesome.com/5e66521a02.js" crossorigin="anonymous"></script>
//     <script src="js/name.js"></script>
//     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>

// </body>
// </html>
