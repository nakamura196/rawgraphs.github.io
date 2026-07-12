import React from "react"
import { FaFilePdf, FaGithubSquare, FaTwitterSquare } from "react-icons/fa"
import AskInfo from "../components/askInfo"
import Partner from "../components/partner"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./about.module.scss"
import logoCalibro from "../images/Logo-Calibro.png"
import logoDD from "../images/Logo-DD-1.png"
import logoInmagik from "../images/Logo-Inmagik.png"
import logoNova from "../images/Logo-nova.png"
import logoContact from "../images/Logo-contactlab.png"

const partners = [
  {
    name: "DensityDesign",
    description:
      "DensityDesign は、ミラノ工科大学（Politecnico di Milano）デザイン学科の研究ラボです。複雑な社会的・組織的・都市的な現象を視覚的に表現し、あらゆるレベルでの意思決定プロセスを支援することに注力しています。私たちのインターフェースはオープンかつインクルーシブで、複雑な現象に対する複数の解釈を保持します。DensityDesign は、世界への理解を深めるため、学問的独立性と厳密さ、開かれた探究、そしてリスクを取ることに献身する他の研究者や組織との協働に取り組んでいます。",
    link: "https://www.densitydesign.org/",
    linkLabel: "densitydesign.org",
    logo: logoDD,
  },
  {
    name: "Calibro",
    description:
      "Calibro は、Matteo Azzi と Giorgio Uboldi によって2015年にミラノで設立された学際的なデザインスタジオです。私たちは、デザイン、データビジュアライゼーション、人文学の交差点に新たな道を探ることに関心を持っています。バックグラウンドはコミュニケーションデザインで、数年間ミラノ工科大学の DensityDesign 研究ラボに在籍し、RAW を生み出したチームの一員でした。近年は、いくつかの公共機関および民間機関のために、研究・コンサルティング・教育活動に携わってきました。",
    link: "https://calib.ro/",
    linkLabel: "calib.ro",
    logo: logoCalibro,
  },
    {
    name: "Inmagik",
    description:
      "Inmagik は、イタリアのベルガモを拠点とするスタジオで、ウェブアプリケーション、モバイルアプリ、データ管理システム、インタラクティブなユーザー体験の開発に注力しています。私たちはオープンソースのコンポーネント・言語・フレームワークを愛用しており、データビジュアライゼーションの分野で豊富な経験を持っています。",
    link: "https://inmagik.com/en/",
    linkLabel: "inmagik.com",
    logo: logoInmagik,
  },
]
const AboutPage = () => (
  <Layout>
    <SEO title="概要" />

    <div className="container">
      <div className="row main-header">
        <div className="col-12 col-sm-8">
          <div>
            <h1 className="big">概要</h1>
            <h2 className="light">
              <p>このプロジェクトについて知っておくべきことのすべて。</p>
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div className={`${styles.about} container-fluid`}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>RAW Graphs とは？</h2>
            <p>
              RAW Graphs は、複雑なデータの視覚的表現を誰にとっても簡単にすることを目標に構築された、オープンソースのデータビジュアライゼーション・フレームワークです。
            </p>
            <p>
              RAW
              Graphs&nbsp;は、主にデザイナーやビジュアライゼーション愛好家のためのツールとして考案され、スプレッドシートアプリケーション（Microsoft
              Excel、Apple Numbers、OpenRefine など）とベクターグラフィックスエディタ（Adobe
              Illustrator、Inkscape、Sketch など）の間に欠けていた橋渡しを提供することを目指しています。
            </p>
            <p>
              このプロジェクトは{" "}
              <a
                href="http://www.densitydesign.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                DensityDesign Research Lab
              </a>{" "}
              （ミラノ工科大学）によって主導・維持されており、2013年に一般公開されて以来、データビジュアライゼーションの分野で最も重要なツールの一つとして多くの人に認められています。
            </p>
            <p>
              このプロジェクトのデザイン・開発・保守を担うチームは、
              {" "}<a
                href="http://www.densitydesign.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                DensityDesign
              </a>{" "}
              、{" "}
              <a
                href="http://calib.ro/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Calibro
              </a>
              、そして
              {" "}
              <a
                href="https://inmagik.com/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Inmagik
              </a>{" "}（2019年にチームに加わりました）で構成されています。
              </p>
            <h1 id="how-to-cite">RAWGraphs の引用方法</h1>
            <p>
              研究の中で RAWGraphs
              が役立った場合、あるいはご自身の作品の中で参照したい場合は、私たちが CHItaly 2017
              で発表した論文を引用いただけますと幸いです。以下のリンクから、グリーン・オープンアクセスで記事をお読みいただけます。
            </p>
            <p>
              <FaFilePdf></FaFilePdf>
              <a
                title="RAWGraphs: A Visualisation Platform to Create Open Outputs"
                href="https://dl.acm.org/authorize?N46728"
                className="ml-2"
              >
                RAWGraphs: A Visualisation Platform to Create Open Outputs –
                グリーン・オープンアクセスの PDF ファイル
              </a>
            </p>
            <p>RAWGraphs を引用する：</p>
            <p>
              Mauri, M., Elli, T., Caviglia, G., Uboldi, G., &amp; Azzi, M.
              (2017). RAWGraphs: A Visualisation Platform to Create Open
              Outputs. In{" "}
              <i>
                Proceedings of the 12th Biannual Conference on Italian SIGCHI
                Chapter
              </i>{" "}
              (p. 28:1–28:5). New York, NY, USA: ACM.{" "}
              <a href="https://doi.org/10.1145/3125571.3125585">
                https://doi.org/10.1145/3125571.3125585
              </a>
            </p>
            <p>Bibtex：</p>
            <pre>
              {`
@inproceedings{Mauri:2017:RVP:3125571.3125585,
 author = {Mauri, Michele and Elli, Tommaso and Caviglia, Giorgio and Uboldi, Giorgio and Azzi, Matteo},
 title = {RAWGraphs: A Visualisation Platform to Create Open Outputs},
 booktitle = {Proceedings of the 12th Biannual Conference on Italian SIGCHI Chapter},
 series = {CHItaly '17},
 year = {2017},
 isbn = {978-1-4503-5237-6},
 location = {Cagliari, Italy},
 pages = {28:1--28:5},
 articleno = {28},
 numpages = {5},
 url = {http://doi.acm.org/10.1145/3125571.3125585},
 doi = {10.1145/3125571.3125585},
 acmid = {3125585},
 publisher = {ACM},
 address = {New York, NY, USA},
 keywords = {Visualization tools, data visualization, open output, visual interface},
}
              `}
            </pre>
          </div>
          <div className="col-md-5 offset-md-1">
            <div className="row">
              <div className="col-12">
                <div className={styles.factsheet}>
                  <p>イタリア・ミラノより、愛を込めてデザイン・開発されています。</p>
                  <p>
                    {" "}
                    <a
                      href="https://github.com/densitydesign/raw#license"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Apache 2 ライセンス
                    </a>
                    のもとで公開されています。
                  </p>
                  <p>
                    最初の git コミットは2013年7月10日、{" "}
                    <a
                      href="http://www.giorgiocaviglia.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Giorgio Caviglia
                    </a>
                    によるものです。
                  </p>
                  <p>
                    3年間で世界中から50万を超えるセッションを記録しました。
                  </p>
                  <p>
                    {" "}
                    <a
                      href="http://www.informationisbeautifulawards.com/news/49-2014-the-winners"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Kantar information is beautiful awards 2014
                    </a>
                    にて、「最も美しい」プロジェクトおよびツール部門「金メダル」を受賞しました。
                  </p>
                </div>
              </div>
              <div className="col-12">
                <h2>お問い合わせ</h2>
                <p>
                  RAW Graphs について質問がありますか？
                  <br />
                  コラボレーションにご興味はありますか？
                </p>
                <a href="mailto:hello@rawgraphs.io">
                  <button className="btn btn-grey" type="submit">
                    お問い合わせ
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/densitydesign/raw"
                  rel="noopener noreferrer"
                  className="ml-2"
                >
                  <FaGithubSquare color="#3E3E41" size="2.5em"></FaGithubSquare>
                </a>
                <a
                  target="_blank"
                  href="https://twitter.com/rawgraphs"
                  rel="noopener noreferrer"
                  className="ml-2"
                >
                  <FaTwitterSquare
                    color="#3E3E41"
                    size="2.5em"
                  ></FaTwitterSquare>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid grey-bg">
      <div className="container">
        <h2>パートナー</h2>
        <div className="row">
          {partners.map(partner => (
            <Partner key={partner.name} {...partner}></Partner>
          ))}
        </div>
      </div>
    </div>
    <AskInfo
      question="このプロジェクトのスポンサーや支援をご希望ですか？"
      button="お問い合わせ"
      link="mailto:hello@rawgraphs.io"
    ></AskInfo>
  </Layout>
)

export default AboutPage
