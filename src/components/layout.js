import React from "react"
import "../../static/css/styles.css"
import "../../static/css/sidebar.css"

import { AiFillHome, AiFillCamera, AiOutlineMail } from "react-icons/ai"
import { BsChatQuote, BsPersonBoundingBox } from "react-icons/bs"
import { BiCodeBlock } from "react-icons/bi"

export default function layout({ children }) {
  return (
    <div>
      <aside className="sidebar">
        <nav>
          <ul className="sidebar__nav">
            <li>
              <a href="/" className="sidebar__nav__link">
                <AiFillHome size="2.5em" />
                <span className="sidebar__nav__text">Home</span>
              </a>
            </li>
            <li>
              <a href="/about" className="sidebar__nav__link">
                <BsPersonBoundingBox size="2.5em" />
                <span className="sidebar__nav__text">About me</span>
              </a>
            </li>
            <li>
              <a href="/myworks" className="sidebar__nav__link">
                <BiCodeBlock size="2.5em" />
                <span className="sidebar__nav__text">My works</span>
              </a>
            </li>
            <li>
              <a href="/testimonials" className="sidebar__nav__link">
                <BsChatQuote size="2.5em" />
                <span className="sidebar__nav__text">Testimonials</span>
              </a>
            </li>
            <li>
              <a href="/camera" className="sidebar__nav__link">
                <AiFillCamera size="2.5em" />
                <span className="sidebar__nav__text">Camera</span>
              </a>
            </li>
            <li>
              <a href="/contact" className="sidebar__nav__link">
                <AiOutlineMail size="2.5em" />
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
