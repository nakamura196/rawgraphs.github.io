import React from "react"
import { Link } from "gatsby"
import { FaTwitterSquare, FaGithubSquare } from "react-icons/fa"
import logoCalibro from "../images/logo-calibro-white@2x.png"
import logoDD from "../images/logo-DD-white@2x.png"
import logoInmagik from "../images/logo-Inmagik-white@2x.png"
import styles from "./footer.module.scss"

const Footer = () => (
  <div className={`container-fluid ${styles.siteFooter}`}>
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <h4 className={styles.rawLogo}>
            RAW<span className={styles.brandGreen}>Graphs</span>
          </h4>
          <div className="d-md-block d-none">
            <div className="menu-footer-menu-container">
              <ul
                id="menu-footer-menu"
                className={`nav navbar-nav navbar-right ${styles.nav}`}
              >
                <li className="menu-item">
                  <Link to="/">ホーム</Link>
                </li>
                <li className="menu-item">
                  <Link to="/about">概要</Link>
                </li>
                <li className="menu-item">
                  <Link to="/learning">学習</Link>
                </li>
                <li className="menu-item">
                  <Link to="/blog">ブログ</Link>
                </li>
                <li className="menu-item">
                  <a
                    target="_blank"
                    href="https://github.com/rawgraphs/rawgraphs-app"
                    rel="noopener noreferrer"
                  >
                    ドキュメント
                  </a>
                </li>
                <li className="menu-item">
                  <Link to="/gallery">ギャラリー</Link>
                </li>
                <li className="menu-item">
                  <a
                    href="https://forms.gle/WnqxUfwnE3nVt58RA"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    作品を投稿する
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    title="リポジトリを見る"
                    target="_blank"
                    href="https://github.com/densitydesign/raw/"
                    rel="noopener noreferrer"
                  >
                    リポジトリを見る
                  </a>
                </li>
                {/*                <li className="menu-item">
                  <a
                    title="User survey"
                    target="_blank"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdfbS0TsyQEXdNfYp9XkiDx5pzwEYfKCmplDJTz1VPAm1R6VA/viewform"
                    rel="noopener noreferrer"
                  >
                    User survey
                  </a>
                </li>*/}
                <li className="menu-item">
                  <a
                    title="RAWGraphs ニュースレター"
                    href="http://eepurl.com/c9eFWH"
                  >
                    ニュースレターを購読する
                  </a>
                </li>
                <li className="menu-item">
                  <Link to="/privacy">プライバシー</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-2 offset-sm-0 col-6">
          <h4>プロジェクト運営</h4>
          <a
            href="http://densitydesign.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={`${styles.logo} img-fluid`}
              alt="logo densitydesign"
              src={logoDD}
            />
          </a>
          <a href="http://calib.ro" target="_blank" rel="noopener noreferrer">
            <img
              className={`${styles.logo} img-fluid`}
              alt="logo calibro"
              src={logoCalibro}
            />
          </a>
          <a href="https://inmagik.com/en/" target="_blank" rel="noopener noreferrer">
            <img
              className={`${styles.logo} img-fluid`}
              alt="logo inmagik"
              src={logoInmagik}
            />
          </a>
        </div>

        <div
          className={`${styles.contactUs} col-sm-3 offset-sm-1 col-12 mt-3 mt-md-0`}
        >
          <h4>お問い合わせ:</h4>
          <p className="small">ご質問はありますか?プロジェクトを応援しませんか?</p>
          <a href="mailto:hello@rawgraphs.io">
            <button className="btn btn-default" type="submit">
              メッセージを送る
            </button>
          </a>
        </div>

        <div className="col-sm-2 offset-sm-1 col-6">
        <h4>フォローする:</h4>
          <div className={styles.socialIcons}>
            <a
              target="_blank"
              href="https://github.com/densitydesign/raw"
              rel="noopener noreferrer"
            >
              <FaGithubSquare color="white" size="2em"></FaGithubSquare>
            </a>
            <a
              target="_blank"
              href="https://twitter.com/rawgraphs"
              rel="noopener noreferrer"
              className="ml-2"
            >
              <FaTwitterSquare color="white" size="2em"></FaTwitterSquare>
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>
)

export default Footer
