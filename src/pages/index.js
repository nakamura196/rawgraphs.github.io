import React from "react"
// import { Link } from "gatsby"
import {
  FaChevronDown,
  FaPaste,
  FaLock,
  FaChartBar,
  FaRegHandPointUp,
  FaRegEye,
  FaPencilAlt,
} from "react-icons/fa"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeStep from "../components/homeStep"
import DiscoverMoreWidget from "../components/DiscoverMoreWidget"
import AskInfo from "../components/AskInfo"
import SponsorsGrid from '../components/SponsorsGrid'
import ModalCampain from "../components/ModalCampain"
import logo from "../images/logo@2x.png"
import bg1 from "../images/cover-bg-1@2x.png"
import bg2 from "../images/cover-bg-2@2x.png"
import bg3 from "../images/cover-bg-3@2x.png"
import step1 from "../images/gifs-home/1 - Load.gif"
import step2 from "../images/gifs-home/2 - Choose.gif"
import step3 from "../images/gifs-home/3 - Tune.gif"
import step4 from "../images/gifs-home/4 - Export.gif"
import logoCalibro from "../images/logo-calibro-home.png"
import logoDD from "../images/logo-dd-home.png"
import logoInmagik from "../images/logo-inmagik-home.png"
import styles from "./index.module.scss"

const style = {
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "calc(100vh - 60px)",
}

const images = [bg1, bg2, bg3]

const steps = [
  {
    title: "まずはRAWGraphsにデータを取り込みましょう",
    image: step1,
    subSteps: [
      {
        title: "コピー＆ペーストするだけ。",
        icon: <FaPaste className={styles.substepIcon} />,
        text:
          "RAWGraphsは区切り文字で区切られた値（csvやtsvファイルなど）に対応しているほか、他のアプリケーション（Microsoft Excel、Google スプレッドシート、テキストエディットなど）からコピー＆ペーストしたテキストも扱えます。さらにCORSに対応したエンドポイント（API）からの読み込みもできます。",
      },
      {
        title: "ご安心を、データは安全です。",
        icon: <FaLock className={styles.substepIcon} />,
        text:
          "RAWGraphsはWebアプリですが、入力したデータはWebブラウザ内でのみ処理されます。サーバー側での処理や保存は一切行われず、あなたのデータを誰かが見たり、触れたり、コピーしたりすることはありません！",
      },
    ],
  },
  {
    title: "豊富なビジュアルモデルの中から選びましょう",
    image: step2,
    subSteps: [
      {
        title: "定番のレイアウトも、ひと味違うレイアウトも。",
        icon: <FaChartBar className={styles.substepIcon} />,
        text:
          'RAWGraphsは、デザイナーやビジュアライゼーション好きの方々を念頭に設計・開発されました。だからこそ、他のツールでは作りにくいチャートの提供に力を入れています。もちろん、棒グラフや円グラフも用意しているのでご安心ください！お探しのものが見つかりませんか？ <a href="https://github.com/densitydesign/raw/wiki/Adding-New-Charts" target="_blank" rel="noopener noreferrer">自分だけのモデルを作る</a>のがいかに簡単かをご覧ください。',
      },
    ],
  },
  {
    title: "チャートを調整してデータを探索しましょう",
    image: step3,
    subSteps: [
      {
        title: "データの各次元を理解し、視覚的にマッピング。",
        icon: <FaRegHandPointUp className={styles.substepIcon} />,
        text:
          "データについてもっと知りたいですか？パターンや傾向を探りたいですか？選んだレイアウトのビジュアル変数に、データセットの各次元をマッピングするだけです。",
      },
      {
        title: " 視覚的なフィードバックを、すぐに。",
        icon: <FaRegEye className={styles.substepIcon} />,
        text:
          "データセットの各次元をマッピングすると、すぐにビジュアライゼーションが表示されます。結果に満足できませんか？別のマッピングを試せば、あっという間に新しいビジュアライゼーションが得られます。",
      },
    ],
  },
  {
    title: "エクスポートして、どこへでも",
    image: step4,
    subSteps: [
      {
        title: " 半完成のベクターデータとデータ構造。",
        icon: <FaPencilAlt className={styles.substepIcon} />,
        text:
          "RAWGraphsではビジュアライゼーションをベクター画像（SVG）またはラスター画像（PNG）としてエクスポートし、Webページに埋め込むことができます。RAWGraphsは半完成のビジュアライゼーションを生成するので、お気に入りのベクターグラフィックスエディターで開いてさらに磨き上げることも可能です。",
      },
    ],
  },
]

const discoverMoreWidgets = [
  {
    title: "RAW Graphsはオープンです",
    description:
      "RAW Graphsは、Mike Bostock氏による素晴らしいライブラリd3.jsの上に構築されています。RAW.jsはApache 2ライセンスの下で公開されており、改善やあなた自身のプロジェクトのためにコミュニティに開かれています。",
    link: "https://github.com/densitydesign/raw/",
    linkLabel: "GitHubのリポジトリを見る",
  },
  {
    title: "RAW Graphsは拡張できます",
    description:
      "レイアウトに満足できませんか？D3.jsの基本的な知識で、簡単に新しいチャートを追加する方法をご覧ください。",
    link: "https://github.com/densitydesign/raw/wiki/Adding-New-Charts",
    linkLabel: "新しいチャートを追加する",
  },
]

const askInfos = [
  {
    question:
      "プロジェクトに貢献したいですか？ご質問やご意見はありませんか？",
    button: "お問い合わせ",
    link: "mailto:hello@rawgraphs.io",
  },
]

const HomePage = () => (
  <Layout headerBg={"transparent"} useIt={false}>
    <SEO title="ホーム" />
    <div
      className="container-fluid d-flex align-items-center justify-content-around flex-column"
      style={{
        ...style,
        backgroundImage: `url(${images[Math.floor(Math.random() * 3)]})`,
      }}
    >
      <div className="row">
        <div className="col-10 offset-1 text-center">
          <img
            src={logo}
            className={`img-fluid ${styles.homeLogo}`}
            alt="logo"
          />
        </div>
        <div className="col-12 text-center">
          <h2 className={styles.claim}>
            スプレッドシートとデータビジュアライゼーションをつなぐ、失われた環。
          </h2>
        </div>
        <div className="col-10 offset-1 col-sm-4 offset-sm-2 col-md-3 offset-md-3 col-lg-2 offset-lg-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://app.rawgraphs.io"
          >
            <button
              className="btn btn-default btn-green btn-larger"
              type="submit"
            >
              今すぐ使う！
            </button>
          </a>
        </div>
        <div className="col-10 offset-1 offset-sm-0 col-sm-4  col-md-3  col-lg-2 ">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/rawgraphs/raw/"
          >
            <button
              className="btn btn-default btn-grey btn-larger"
              type="submit"
            >
              GitHubでフォークする！
            </button>
          </a>
        </div>
      </div>
      <div className="row d-none d-sm-flex">
        <div className="col-12 text-center">
          <a className={styles.exploreDown} href="#step1">
            <FaChevronDown color="#3E3E41" size="3.25em"></FaChevronDown>
          </a>
        </div>
      </div>
    </div>
    {steps.map((step, index) => {
      return <HomeStep key={index} {...step} index={index}></HomeStep>
    })}

    <div id="discover-more" className="container-fluid discover-more step">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2>もっと知る</h2>
          </div>
          {discoverMoreWidgets.map((widget, index) => {
            return (
              <DiscoverMoreWidget key={index} {...widget}></DiscoverMoreWidget>
            )
          })}
        </div>
      </div>
    </div>

    <div id="partners" className="container-fluid step">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2>制作</h2>
          </div>
        </div>
        <div className="row mt-5 justify-content-center">
          <div className="col-md-4 col-12">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.withImg} my-5`}
              href="https://densitydesign.org"
            >
              <img
                className="img-fluid"
                src={logoDD}
                alt="Logo DensityDesign"
              />
            </a>
          </div>
          <div className="col-md-4 col-6">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={styles.withImg}
              href="https://calib.ro/"
            >
              <img className="img-fluid" src={logoCalibro} alt="Logo Calibro" />
            </a>
          </div>
          <div className="col-md-4 col-6">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={styles.withImg}
              href="https://inmagik.com/"
            >
              <img className="img-fluid" src={logoInmagik} alt="Logo Inmagik" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="container">
      <SponsorsGrid showBronze={false}></SponsorsGrid>
    </div>

    {askInfos.map((askInfo, index) => {
      return <AskInfo key={index} {...askInfo}></AskInfo>
    })}
  </Layout>
)

export default HomePage
