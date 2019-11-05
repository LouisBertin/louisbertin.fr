import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import LayoutBlog from "../components/layouts/layout-blog"
import SEO from "../components/seo"
import emoji from "emoji-dictionary"

function EnContent() {
  return (
    <>
      <h2>Development tools</h2>
      <ul>
        <li>
          <b>VsCode</b> or <b>Intellij</b>
        </li>
        <li>
          <b>iTerm2</b> as my only terminal
        </li>
        <li>
          <b>Docker</b> {emoji.getUnicode("whale")} or <b>Mamp</b> (when i'm
          tired)
        </li>
        <li>
          <b>Postman</b> when I want to have fun w/ HTTP stuff{" "}
          {emoji.getUnicode("wink")}
        </li>
        <li>
          {emoji.getUnicode("beer")} <b>HOMEBREW</b> {emoji.getUnicode("beer")}{" "}
          THE must-have on OSX
        </li>
      </ul>

      <h2>Productivity apps</h2>
      <ul>
        <li>
          <b>Notion</b> recently discovered. Very useful everyday
        </li>
        <li>
          <b>Bitwarden</b> best password manager ever
        </li>
        <li>
          <b>Apple Mail, Reminder and Calendar</b> simple, minimalist.. what
          else?
        </li>
        <li>
          <b>Rocket</b> {emoji.getUnicode("rocket")}... do you like emojis ?
        </li>
        <li>
          <b>Alfred</b> my time saver : automation, shortcuts and more
        </li>
      </ul>

      <h2>Design</h2>
      <ul>
        <li>
          <b>Photoshop, Illustrator</b> and <b>Affinity Designer</b>
        </li>
        <li>
          <b>Sketch</b> I should take an interest in Figma
        </li>
      </ul>
    </>
  )
}

function FrContent() {
  return (
    <>
      <h2>Outils de développement</h2>
      <ul>
        <li>
          <b>VsCode</b> ou <b>Intellij</b>
        </li>
        <li>
          <b>iTerm2</b> le seul terminal que j'utilise
        </li>
        <li>
          <b>Docker</b> {emoji.getUnicode("whale")} ou <b>Mamp</b> (quand je
          suis fatigué..)
        </li>
        <li>
          <b>Postman</b> quand je veux m'amuser avec des requêtes HTTP{" "}
          {emoji.getUnicode("wink")}
        </li>
        <li>
          {emoji.getUnicode("beer")} <b>HOMEBREW</b> {emoji.getUnicode("beer")}{" "}
          LE must-have sur OSX
        </li>
      </ul>

      <h2>Application de productivité</h2>
      <ul>
        <li>
          <b>Notion</b> découvert récemment. Très utile au quotidien
        </li>
        <li>
          <b>Bitwarden</b> le meilleur gestionnaire de mot de passe
        </li>
        <li>
          <b>Apple Mail, Reminder and Calendar</b> simple, minimaliste.. quoi
          d'autre?
        </li>
        <li>
          <b>Rocket</b> {emoji.getUnicode("rocket")}... aimez-vous les emojis ?
        </li>
        <li>
          <b>Alfred</b> gain de temps immense : automatisation, raccourcis et
          plus encore
        </li>
      </ul>

      <h2>Design</h2>
      <ul>
        <li>
          <b>Photoshop, Illustrator</b> et <b>Affinity Designer</b>
        </li>
        <li>
          <b>Sketch</b> ... il faudrait que je m'intéresse à Figma
        </li>
      </ul>
    </>
  )
}

const Tools = ({ intl }) => (
  <LayoutBlog>
    <SEO lang={intl.locale} title={intl.formatMessage({ id: "tools-title" })} />

    <div className="container tools">
      <h1 style={{ textAlign: "center" }}>
        <FormattedMessage id="tools-intro" />
      </h1>
      <hr />

      {(() => {
        switch (intl.locale) {
          case "en":
            return <EnContent />
          case "fr":
            return <FrContent />
          default:
            return <EnContent />
        }
      })()}
    </div>
  </LayoutBlog>
)

export default injectIntl(Tools)
