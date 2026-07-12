import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
import CookieConsent from "react-cookie-consent"
import styles from "./layout.module.scss"
import "@fontsource/karla"

const Layout = ({ children, headerBg, useIt }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <Header headerBg={headerBg} useIt={useIt} />
      <div>{children}</div>
      <Footer siteTitle={data.site.siteMetadata.title} />
      <CookieConsent
        location="bottom"
        buttonText="了解しました!"
        style={{ background: "#f5f5f5", color: "#646467" }}
        buttonStyle={{
          background: "#646467",
          color: "white",
          fontSize: "13px",
          borderRadius: "3px",
          padding: "5px 20px",
        }}
        buttonClasses="btn btn-default btn-grey"
        acceptOnScroll={true}
      >
当ウェブサイトでは、Google Analytics を使用して匿名で閲覧データを収集しています。{" "}
        <a
          href="/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 text-body border-bottom border-dark"
        >
          詳しく見る
        </a>
      </CookieConsent>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
