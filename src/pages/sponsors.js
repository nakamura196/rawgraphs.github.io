import React from "react"
import { FaFilePdf, FaGithubSquare, FaTwitterSquare } from "react-icons/fa"
import AskInfo from "../components/askInfo"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./about.module.scss"
import contributors from './contributors.json'
import SponsorsGrid from '../components/sponsorsGrid'



const SponsorsPage = () => (
  <Layout>
    <SEO title="スポンサー" />

    <div className="container">
      <div className="row main-header">
        <div className="col-12 col-sm-8">
          <div>
            <h1 className="big">スポンサー</h1>
            <h2 className="light">
              <p>
              RAWGraphsは、寄付と、組織や企業の寛大な支援に支えられたオープンソースプロジェクトです。2019年秋に立ち上げた <a href="https://www.indiegogo.com/projects/rawgraphs-2-0-a-web-app-for-data-visualization/x/20662697#/">Indiegogoキャンペーン</a> を通じて、40か国から350件を超える寄付をいただきました。これからもぜひご支援をお願いします！
              </p>
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div className={`${styles.about} container-fluid`}>
      <div className="container">
        <SponsorsGrid/>
      </div>
    </div>
    <div className="container-fluid grey-bg">
      <div className="container">
        <h1 className="text-center">コントリビューター（寄付額と日付順）</h1>
        <p style={{textTransform: 'capitalize'}}>
          { contributors.join(", ").toLowerCase()}.
        </p>
      </div>
    </div>
    <AskInfo
      question="プロジェクトのスポンサーになる、または支援したいですか？"
      button="お問い合わせ"
      link="mailto:hello@rawgraphs.io"
    ></AskInfo>
  </Layout>
)

export default SponsorsPage
