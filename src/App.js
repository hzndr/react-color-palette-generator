import React, { Component } from "react";
import Clarifai from "clarifai";
import Logo from "./components/Logo/Logo";
import Header from "./components/Header/Header";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import ImageWrapper from "./components/ImageWrapper/ImageWrapper";
import ColorsRow from "./components/ColorsRow/ColorsRow";
import OutputContainer from "./components/OutputContainer/OutputContainer";
import GlobalStyle from "./theme/globalStyles";
import { Fragment } from "react-is";

const app = new Clarifai.App({
  apiKey: "17a4074d759e4536820c07bfca2e8194",
});

const initialState = {
  input: "",
  imageUrl: "",
  colors: [],
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  displayPalette = (colors) => {
    this.setState({ colors: colors });
  };

  getColors = (data) => {
    const colors = data.rawData.outputs[0].data.colors;
    return colors;
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onPictureSubmit = (e) => {
    e.preventDefault();
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(
        // Sometimes the Clarifai Models can be down or not working as they are constantly getting updated.
        // A good way to check if the model you are using is up, is to check them on the clarifai website. For example,
        // for the Face Detect Mode: https://www.clarifai.com/models/face-detection
        // If that isn't working, then that means you will have to wait until their servers are back up. Another solution
        // is to use a different version of their model that works like the ones found here: https://github.com/Clarifai/clarifai-javascript/blob/master/src/index.js
        // so you would change from:
        // .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
        // to:
        // .predict('53e1df302c079b3db8a0a36033ed2d15', this.state.input)
        Clarifai.COLOR_MODEL,
        this.state.input
      )
      .then((response) => {
        this.displayPalette(this.getColors(response));
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { colors, imageUrl } = this.state;
    return (
      <Fragment>
        <GlobalStyle />
        <div className="container">
          <Logo />
          <Header />
          <ImageLinkForm
            onInputChange={this.onInputChange}
            onButtonSubmit={this.onPictureSubmit}
          />
          <OutputContainer>
            <ColorsRow colors={colors} addToFav={this.addToFav} />
            <ImageWrapper imageUrl={imageUrl} />
          </OutputContainer>
        </div>
      </Fragment>
    );
  }
}

export default App;
