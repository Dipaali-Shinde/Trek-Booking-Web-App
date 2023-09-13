import axios from "axios";
import { Component } from "react";
import { useNavigate, useParams } from "react-router";
import App from "../../App";
import withRouter from "../../withRouter";
import TrekDEtailcomponent from "./TrekDEtailcomponent";

export function Navigate(props) {
  const navigation = useNavigate();
  return <App navigate={navigation}></App>;
}

class TrekDet extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    details: [],
  };

  componentDidMount() {
    axios
      .get(`http://localhost:8080/api/trekbyID/${this.props.params.tid}`)
      .then((res) => {
        const details = res.data;
        this.setState({ details: details });
        console.log(this.state.details);
      });
  }

  render() {
    return (
      <>
        <TrekDEtailcomponent
          details={this.state.details}
          cid={this.props.params.uid}
          tid={this.props.params.tid}
        ></TrekDEtailcomponent>
      </>
    );
  }
}

export default withRouter(TrekDet);
