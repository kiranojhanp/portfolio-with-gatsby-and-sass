import React from "react"
import Layout from "../components/layout"
import Particles from "react-tsparticles"

export default function Home() {
  return (
    <Layout>
      <section id="main-page">
        <div className="container">
          <h1>
            <span>Kiran</span>
          </h1>
          <span className="des">MERN & Flutter developer</span>
          <a className="btn" href="./me.jpg" download>
            Hire me
          </a>
        </div>
      </section>

      <Particles
        id="tsparticles"
        options={{
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              onDiv: {
                enable: true,
                selectors: ".container",
                mode: "bounce",
                type: "rectangle",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 200,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            background: {
              color: {
                value: "#F2F5EA",
              },
            },
            color: {
              value: "#e75a7c",
            },
            links: {
              color: "#e75a7c",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: false,
                value_area: 800,
              },
              value: 85,
            },
            opacity: {
              value: 0.2,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: false,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
    </Layout>
  )
}
