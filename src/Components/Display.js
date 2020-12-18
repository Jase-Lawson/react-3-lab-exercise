import { Component } from "react";
import data from "./Data";
import IndexCards from "./IndexCards";


class Display extends Component {
  constructor() {
    super();
    this.state = {
      indexCards: data,
      indexRef: 0,
    }
  }

  handleChangeNext = () => {
    if (this.state.indexCards[this.state.indexRef + 1]) {
      this.setState({ indexRef: this.state.indexRef + 1 })
    } else {
      this.setState({ indexRef: 0 })
    }
  }


  handleChangePrevious = () => {
    if (this.state.indexCards[this.state.indexRef - 1]) {
      this.setState({ indexRef: this.state.indexRef - 1 })
    } else {
      this.setState({ indexRef: this.state.indexCards.length - 1 })
    }
  }

  handleChangeDelete = () => {
    this.setState({ indexCards: this.state.indexCards.filter((el, i) => { return i !== this.state.indexRef }) });
    this.setState({ indexRef: this.state.indexRef === 0 ? this.state.indexRef : this.state.indexRef - 1 })
  }

  render() {
    return (
      <div>
        <header className="header">Home</header>
        <section className="main_content">
          <section className="index_card_style">
            < IndexCards
              indexC={this.state.indexCards[this.state.indexRef]}
              pizza={this.state}
            />
          </section>

          <section className="nav_bar">
            <button className="nav_button" onClick={this.handleChangePrevious}> Previous </button>
            <section>
              <button className="center_button"> Edit </button>
              <button className="center_button" onClick={this.handleChangeDelete} > Delete </button>
              <button className="center_button"> New </button>
            </section>
            <button className="nav_button" onClick={this.handleChangeNext} > Next </button>
          </section>
        </section>
      </div>
    )
  }
}

export default Display
