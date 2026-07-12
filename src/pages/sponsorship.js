import React from "react"
import { FaFilePdf, FaGithubSquare, FaTwitterSquare } from "react-icons/fa"
import AskInfo from "../components/AskInfo"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./sponsorship.module.scss"

const SponsorshipPage = () => (
  <Layout>
    <SEO title="スポンサーシップ" />

    <div className="container">
      <div className="row main-header">
        <div className="col-12 col-sm-8">
          <div>
            <h1 className="big">スポンサーシップ</h1>
            <h2 className="light">
              <p><a href="https://igg.me/at/rawgraphs2">Indiegogo</a> のスポンサーシップについて知っておくべきことのすべて。</p>
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div className={`${styles.sponsorship} container-fluid`}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>スポンサーシップに関する行動規範はありますか？</h2>
            <p>
RAWGraphsチームの目標のひとつは、できるだけ多様で幅広い背景を持つ、最大限多くの人々を受け入れることです。そのため私たちは、性別、性的指向、能力、民族、社会経済的地位、宗教（またはそれを持たないこと）にかかわらず、すべての人にとって親しみやすく、安全で、温かく迎え入れる環境を提供することに尽力しています。
            </p>
			<p>
			したがって、次のとおりです。
			</p>
			<ul>
			<li>すべてのスポンサーがこれらのガイドラインを遵守することを期待します。</li>
<li>財政的背景や目的がRAWGraphsチームのガイドラインや評判に反するスポンサーからの寄付は受け付けません。</li>
<li>スポンサーは、その職業や事業に関するすべての法律および規制を遵守し、職業上または事業上の活動において、詐欺、欺瞞、贈収賄、虚偽表示、不正行為を伴ういかなる行為も行わないものとします。</li>
<li>私たちのポリシー・ガイドラインに違反していることが判明したスポンサーからの寄付を、拒否し返金する権利を留保します。</li>

			</ul>
          </div>
        </div>
      </div>
    </div>
    <AskInfo
      question="プロジェクトのスポンサーになる、または支援したいですか？"
      button="お問い合わせ"
      link="mailto:hello@rawgraphs.io"
    ></AskInfo>
  </Layout>
)

export default SponsorshipPage
