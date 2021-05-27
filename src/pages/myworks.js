import React from "react"
import Layout from "../components/layout"
import "../../static/css/card.css"

export default function myworks() {
  return (
    <Layout>
      <section id="myworks">
        <h2>My works</h2>
        <div class="main">
          {/* <h1>My Projects</h1> */}
          <ul class="cards">
            <li class="cards_item">
              <div class="card">
                <div class="card_image">
                  <img src="https://w3layouts.b-cdn.net/wp-content/uploads/2020/04/fashion2-990x431.jpg" />
                </div>
                <div class="card_content">
                  <h2 class="card_title">Barsfashion - Ecommerce</h2>
                  <p class="card_text">
                    Ecommerce website made with React, React Redux,
                    Node/Express, and MongoDB. Hosted on Heroku.
                  </p>
                  <a
                    target="_blank"
                    href="https://github.com/kiranojhanp/barsfashion.git"
                    class="btn card_btn"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card_image">
                  <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--LbKsQr_0--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://blogs-static-assets.s3.amazonaws.com/node/oauth-basic.png" />
                </div>
                <div class="card_content">
                  <h2 class="card_title">Social Authentication</h2>
                  <p class="card_text">
                    Backend for Social Authentication using NodeJS
                  </p>
                  <a
                    target="_blank"
                    href="https://github.com/kiranojhanp/mern-google-login.git"
                    class="btn card_btn"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card_image">
                  <img src="https://blog.hubstaff.com/wp-content/uploads/2017/12/how-to-automate-expense-tracking-the-5-best-apps2.jpg" />
                </div>
                <div class="card_content">
                  <h2 class="card_title">Expense Tracker App</h2>
                  <p class="card_text">
                    Expense tracker app made using react native and redux.
                    integrated social login.
                  </p>
                  <a
                    target="_blank"
                    href="https://github.com/kiranojhanp/ExpenseTracker.git"
                    class="btn card_btn"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card_image">
                  <img src="https://raw.githubusercontent.com/thiagodnf/guess-the-number/master/img/logo.png?token=AAG9XwrL-t72tifQ-eA47lewNBqqV9Nwks5cDnuJwA%3D%3D" />
                </div>
                <div class="card_content">
                  <h2 class="card_title">Guess The Number Game</h2>
                  <p class="card_text">
                    Guess a number game developed using react native
                  </p>
                  <a
                    target="_blank"
                    href="https://github.com/kiranojhanp/course-goal-app-academind.git"
                    class="btn card_btn"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card_image">
                  <img src="https://i.imgur.com/hRLyxcS.png" />
                </div>
                <div class="card_content">
                  <h2 class="card_title">My Portfolio</h2>
                  <p class="card_text">
                    A basic portfolio website made using GatsbyJS and Sass. Uses
                    chartJS to display skills.
                  </p>
                  <a
                    target="_blank"
                    href="https://github.com/kiranojhanp/portfolio-with-gatsby-and-sass.git"
                    class="btn card_btn"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </li>
            <li class="cards_item">
              <div class="card">
                <div class="card_image">
                  <img src="https://i.morioh.com/2019/10/31/c2e266641eb1.jpg" />
                </div>
                <div class="card_content">
                  <h2 class="card_title">Flutter desktop portfolio</h2>
                  <p class="card_text">
                    A portfolio application I made on Flutter
                  </p>
                  <a
                    target="_blank"
                    href="https://github.com/kiranojhanp/Flutter-Portfolio.git"
                    class="btn card_btn"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* <h3 class="made_by">Made with ♡</h3> */}
      </section>
    </Layout>
  )
}
