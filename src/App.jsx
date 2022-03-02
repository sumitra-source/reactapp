import { Component } from "react";
import HemisphereDisplay from "./components/HemisphereDisplay";

class App extends Component {
  //states
  state = {
    latitude: null,
    errorMessage: "",
  };
  //lifecycle method
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);

        this.setState({
          latitude: position.coords.latitude,
        });
      },
      (error) => {
        this.setState({
          errorMessage: error.Message,
        });
      }
    );
    console.log("componentdidmount");
  }
  componentDidUpdate() {
    console.log("componentdidupdate");
  }
  componentWillUnmount() {
    console.log("componentwillunmount");
  }
  //render method
  render() {
    if (this.state.errorMessage&& !this.state.latitude) {
      return <div>{this.state.errorMessage}</div>;
    } else if (!this.state.errorMessage && this.state.latitude) {
      return (
        <div>
          <HemisphereDisplay latitude={this.state.latitude} />
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}
export default App;
