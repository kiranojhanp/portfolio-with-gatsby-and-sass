import React from "react"
import Layout from "../components/layout"

import Chart from "../components/Chart"

export default function about() {
  return (
    <Layout>
      <section id="aboutme">
        <h2>About me</h2>
        <p>
          <strong>
            I am a fullstack MERN developer with a year of experience. I also
            have good experience with php & mySQL.
          </strong>
        </p>
        <p>
          I am doing last semester of my bachelors at Softwarica college,
          dillibazar. I have good concepts of methodologies like waterfall,
          agile, etc. I also have good knowledge of database concepts like
          normalization. I was taught MERN & android at my college but I am
          mostly a self taught for flutter. I have used Dr. angela yu course and
          various youtube videos int his process.
        </p>
        <p>
          <strong>My skillset can be viewed in this following chart:</strong>
        </p>
        <Chart />
      </section>
    </Layout>
  )
}
