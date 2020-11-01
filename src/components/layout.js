import React from "react"
import "./sidebar.css"
import "./styles.css"

export default function layout({ children }) {
  return (
    <div>
      <aside className="sidebar">
        <nav>
          <ul className="sidebar__nav">
            <li>
              <a href="/" className="sidebar__nav__link">
                <i className="mdi mdi-home"></i>
                <span className="sidebar__nav__text">Home</span>
              </a>
            </li>
            <li>
              <a href="/about" className="sidebar__nav__link">
                <i className="mdi mdi-alert-octagon-outline"></i>
                <span className="sidebar__nav__text">About me</span>
              </a>
            </li>
            <li>
              <a href="/myworks" className="sidebar__nav__link">
                <i className="mdi mdi-code-not-equal-variant"></i>
                <span className="sidebar__nav__text">My works</span>
              </a>
            </li>
            <li>
              <a href="/testimonials" className="sidebar__nav__link">
                <i className="mdi mdi-format-quote-open-outline"></i>
                <span className="sidebar__nav__text">Testimonials</span>
              </a>
            </li>
            <li>
              <a href="/camera" className="sidebar__nav__link">
                <i className="mdi mdi-camera"></i>
                <span className="sidebar__nav__text">Camera</span>
              </a>
            </li>
            <li>
              <a href="/contact" className="sidebar__nav__link">
                <i className="mdi mdi-card-account-mail"></i>
                <span className="sidebar__nav__text">Contact me</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="main">{children}</main>
    </div>
  )
}
