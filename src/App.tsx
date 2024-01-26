import React from 'react'
import { Section } from '@types'

import { RESUME } from './data'

import '@styles/main.scss'

class App extends React.Component {
  numColors = 10
  currentColor = 1
  get nextColor() {
    const nextColor = this.currentColor
    if (this.currentColor === this.numColors) {
      this.currentColor = 1
    } else {
      this.currentColor = nextColor + 1
    }
    return `var(--color-pop-${nextColor})`
  }
  renderSection = ({ title, subtitles, body, children = [] }: Section) => {
    const nextColor = this.nextColor
    console.log(nextColor)
    return (
      <section style={{ borderColor: nextColor }} key={title}>
        <h2>{title}</h2>
        {subtitles?.length &&
          subtitles.map((subtitle) => <h3 key={subtitle}>{subtitle}</h3>)}
        {body?.length && body.map((b) => <p key={b}>{b}</p>)}
        {children.map((section) => this.renderSection(section))}
      </section>
    )
  }
  render() {
    return (
      <>
        <section>
          <h1>{RESUME.title}</h1>
          <h2>{RESUME.subtitle}</h2>
          <p>{RESUME.tagline}</p>
        </section>
        {RESUME.sections.map((section) => this.renderSection(section))}
        <section>
          {RESUME.contact.map((c) => (
            <a href={c.link} key={c.label}>
              {c.label}
            </a>
          ))}
        </section>
      </>
    )
  }
}

export default App
