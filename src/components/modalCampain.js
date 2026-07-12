import React from "react"
import { Modal, ModalHeader, ModalBody } from "reactstrap"
import styles from "./modalCampain.module.scss"

class ModalCampain extends React.Component {
  state = {
    modal: true,
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal })
  }

  render() {
    return (
      <Modal
        isOpen={this.state.modal}
        toggle={this.toggle}
        className={styles.modal}
        cssModule={{
          "modal-content": styles.modalContent,
        }}
        size="lg"
      >
        <ModalHeader
          toggle={this.toggle}
          className="border-0 mb-auto mb-md-0"
        ></ModalHeader>
        <ModalBody
          cssModule={{
            "modal-body": styles.modalBody,
          }}
        >
          <h1 className="modal-title mb-3">
            こんにちは！{" "}
            <span role="img" aria-label="hello">
              👋 👋 👋
            </span>
            <br />
            RAWGraphsを応援するときが来ました！
          </h1>
          <p className="pb-2">
            RAWGraphsの全く新しいバージョンの開発を計画しています。皆さんの力が必要です！
          </p>
          <p>
          <button className={`btn btn-default btn-larger ${styles.btnIndie}`}><a href="https://igg.me/at/rawgraphs2">Indiegogoで寄付する！</a></button>
          </p>
        </ModalBody>
      </Modal>
    )
  }
}

export default ModalCampain
