import React, { Component } from "react";
import { connect } from "react-redux";
import { addWork } from "../../ducks/portfoliolist";
import axios from "axios";

export class portfolio extends Component {
  constructor() {
    super();
    this.state = {
      img: "",
      title: "",
      artist: "",
      date: "",
      description: "",
      displayPortfolio: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    axios.post("/auth/displayPortfolio").then(res => {
      this.setState({
        displayPortfolio: res.data
      });
    });
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    this.props.addWork(
      this.state.img,
      this.state.title,
      this.state.artist,
      this.state.date,
      this.state.description
    );
    this.props.history.push("/api/portfolio"); //history? ask edson
  }
  render() {
    return (
      <div>
        {" "}
        {/* this came out of nowhere ask edson */}
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <nav>
            <h1>Portfolio</h1>
          </nav>
          <label>Image</label>
          <input
            placeholder="Image"
            onChange={this.handleChange}
            value={this.state.name}
            name="img"
          />
          <label>Title</label>
          <input
            placeholder="Title"
            onChange={this.handleChange}
            value={this.state.title}
            name="title"
          />
          <label>Artist</label>
          <input
            placeholder="Artist"
            onChange={this.handleChange}
            value={this.state.artist}
            name="artist"
          />
          <label>Date</label>
          <input
            placeholder="Date"
            onChange={this.handleChange}
            value={this.state.date}
            name="date"
          />
          <label>Description</label>
          <input
            placeholder="Description"
            onChange={this.handleChange}
            value={this.state.description}
            name="description"
          />
          <button>POST</button>
        </form>
      </div>
    );
  }
}

const mapStateProps = reduxState => reduxState;

export default connect(
  mapStateProps,
  { addWork }
)(portfolio);
