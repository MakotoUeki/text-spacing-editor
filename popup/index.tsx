import { useState } from "react"

import { Button } from "./Button"

import "./style.css"

const IndexPopup = () => {
  const [message, setMessage] = useState("")

  return (
    <main>
      <h1>Text Spacing Editor</h1>

      <p>
        Set text spacing properties using controls below. Supports iframes (also
        nested) on the{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy"
          target="_blank"
          rel="noopener noreferrer">
          same origin
        </a>
        .
      </p>

      <details>
        <summary className="box">
          Info about WCAG <strong>1.4.12 - Text Spacing - AA</strong>
        </summary>

        <div className="box">
          <p>
            <a
              href="https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html"
              target="_blank"
              rel="noopener noreferrer">
              WCAG <strong>1.4.12 - Text Spacing - AA</strong>
            </a>{" "}
            - no loss of content or functionality occurs by setting all of these
            properties to the following values:
          </p>
          <ul>
            <li>
              <em>Line height</em> to at least <em>1.5</em> times the font size
            </li>
            <li>
              <em>Letter spacing</em> to at least <em>0.12</em> times the font
              size
            </li>
            <li>
              <em>Word spacing</em> to at least <em>0.16</em> times the font
              size
            </li>
            <li>
              <em>Spacing following paragraphs</em> to at least <em>2</em> times
              the font size
            </li>
          </ul>
        </div>
      </details>

      <p>
        Use the <strong>Enable/disable styles</strong> button to enable or
        disable your custom styles. You can also use <code>Ctrl+Shift+X</code> (
        <code>Command+Shift+X</code> on Mac) for this.
      </p>
      <p>
        Use the <strong>Set WCAG values</strong> button to set all of the
        properties to the WCAG conformance values.
      </p>
      <p>
        Use the <strong>Reset values</strong> button to reset all the styles to
        their previous values.
      </p>

      <Button
        //storage={storage}
        setMessage={setMessage}
      />

      <p role="alert" id="message">
        {message}
      </p>

      <div className="controls-group">
        <div className="controls">
          <label htmlFor="input-line-height">Line height</label>
          <input
            type="range"
            min="0"
            max="4"
            step="0.1"
            className="slider"
            id="input-line-height"
          />
          <span id="value-line-height"></span>
        </div>
        <div className="controls">
          <label htmlFor="input-letter-spacing">Letter spacing</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            className="slider"
            id="input-letter-spacing"
          />
          <span id="value-letter-spacing"></span>
        </div>
        <div className="controls">
          <label htmlFor="input-word-spacing">Word spacing</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            className="slider"
            id="input-word-spacing"
          />
          <span id="value-word-spacing"></span>
        </div>
        <div className="controls">
          <label htmlFor="input-paragraph-spacing">Paragraph spacing</label>
          <input
            type="range"
            min="0"
            max="4"
            step="0.1"
            className="slider"
            id="input-paragraph-spacing"
          />
          <span id="value-paragraph-spacing"></span>
        </div>
      </div>
    </main>
  )
}

export default IndexPopup
