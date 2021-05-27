import React from "react"
import Layout from "../components/layout"

import Chart from "../components/Chart"

export default function about() {
  return (
    <Layout>
      <section id="aboutme">
        <h2>About me</h2>
        <p>
          <strong>Hello, I am Kiran Ojha</strong>
        </p>
        <p>
          I am a highly self motivated developer who spends most of his time
          building applications and learning latest technologies. I primarily
          specialize on MERN stack and react native however, I am familiar with
          android and flutter too. I have a good experience working on agile
          processes, especially SCRUM. I am a recent graduate from Softwarica
          college, Dillibazar. <br />
        </p>
        <p>
          <strong>
            My current skillset with respect to my current is shown on this
            chart:
          </strong>
        </p>
        <Chart />
      </section>
    </Layout>
  )
}
