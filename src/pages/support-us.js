import React from "react"
import { FaFilePdf, FaGithubSquare, FaTwitterSquare } from "react-icons/fa"
import AskInfo from "../components/askInfo"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./support-us.module.scss"

const SupportUs = () => (
  <Layout>
    <SEO title="サポート" />

    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-8">
          <div>
            <h1 className="big mb-3">サポートする</h1>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-8">
          <p>
            前回のクラウドファンディングキャンペーン以降、私たちはRAWGraphsの新バージョンの開発に注力してきました。現在の開発は、プロジェクトパートナーが提供する空き時間と、教育活動を通じて集めたリソースによって成り立っています。
          </p>
          <p>
            私たちは今、このプロジェクトを財政的に持続可能なものにする方法を定めようとしています。積極的に支えたいと思ってくださる方は、以下の選択肢の中から検討してみてください。
          </p>
          <h2 className="mt-4">プロジェクトに寄付する</h2>
          <p>
            寄付はもちろん、いつでも歓迎します。ご厚意をお寄せいただける場合は、hello [at] rawgraphs.io までご連絡ください。あなたの会社・団体にとって最も都合のよい方法を一緒に検討します。定期的な寄付を通じてプロジェクトを支援する他の方法についても、近日中にアップデートを公開する予定です。
          </p>
          <h2 className="mt-4">RAWGraphsのウェビナーに参加する</h2>
          <p>
            ウェビナーは、ソフトウェアにより親しんでいただくのに役立ちます。今後の講座の情報を得るには、私たちの{" "}
            <a
              href="https://rawgraphs.us17.list-manage.com/subscribe?u=e54381d5fb7c9ae9ec27d29ad&id=ad8eec69a9"
              target="_blank"
              rel="noopener"
            >
              ニュースレター
            </a>{" "}
            を購読し、{" "}
            <a
              href="https://www.eventbrite.it/o/rawgraphs-team-34902034933"
              target="_blank"
              rel="noopener"
            >
              EventBrite
            </a>{" "}
            で私たちをフォローしてください。
          </p>
          <h2 className="mt-4">社内研修に招く</h2>
          <p>
            企業や組織に所属していて、ワークショップやウェビナーを開催したい場合は、hello [at]
            rawgraphs.io までご連絡ください。あなたの組織のために <span style={{whiteSpace: "nowrap"}}>専用の</span> 教育活動を用意します。
          </p>
          <h2 className="mt-4">新しいチャートをリクエストする</h2>
          <p>
            データの探索やコミュニケーションの新しい課題に役立つチャートを、私たちが新たに作成することができます。そのチャートはRAWGraphsに統合され、コミュニティ全体で利用できるようになります。
          </p>
          <h2 className="mt-4">カスタム版をリクエストする</h2>
          <p>
            クラウドファンディングキャンペーンの際に行ったように、あなたの企業のためにカスタム版のRAWGraphsを実現し、自社サーバーでホストできるようにすることも可能です。あなた専用のバージョンには、カスタムロゴ、カラー、フォント、ビジュアライゼーションのプリセットなどの機能を備えられます。
          </p>
          <p className="my-5">そして、データを可視化するための無料でシンプルなオープンソースのソリューションに関心のあるすべての人に、RAWGraphsを広め届けるためにぜひご協力ください！</p>
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

export default SupportUs
