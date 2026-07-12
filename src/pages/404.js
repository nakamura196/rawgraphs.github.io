import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: ページが見つかりません" />
    <div className="container">
      <div className="row">
        <div className="col-md-6 py-5">
          <h1>おっと！</h1>
          <p>このページは存在しません！</p>
          <img
            src="https://media.giphy.com/media/jR8EDxMbqi1QQ/giphy.gif"
            className="img-fluid"
            alt="pie charts"
            width="100%"
          />
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
