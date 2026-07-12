import React from "react"
import styles from "./bannerDonate.module.scss"

const bannerDonate = () => (
  <div className={styles.bannerContainer}>
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex flex-column flex-md-row">
          <h2 className="mr-md-5 mr-0 d-flex align-items-center text-center">
            <span role="img" className={`mr-3 ${styles.blink}`}>
              💸
            </span>
            <span>
              RAWGraphsの新しいバージョンを
              <span className={styles.bg}>開発</span>しています。
              <span className={styles.bg}>引き続き</span>
              応援をお願いします。
            </span>
            <span role="img" className={`ml-3 ${styles.blink}`}>
              💸
            </span>
          </h2>
          <div className="d-flex align-items-center flex-fill mb-3 mb-md-0">
            <a
              href="https://igg.me/at/rawgraphs2"
              role="button"
              className={`btn btn-default btn-lg btn-block ${styles.btnIndie}`}
            >
              寄付する！
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default bannerDonate
