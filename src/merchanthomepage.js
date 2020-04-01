import React from "react";
import { Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
// import "bootstrap/dist/css/bootstrap.css";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg
} from "reactstrap";
import "./index.css";
import { Button } from "react-bootstrap";

const User = ({ match }) => <p>{match.params.id}</p>;

class MerchantHomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      merchant: { name: "test", category: "123" }
    };
  }
  componentDidMount() {
    this.getMerchant();
  }

  getMerchant() {
    // fetch("http://localhost:8080/merchant/get/" + this.props.match.params.id)
    //   .then(results => results.json())
    //   .then(results => this.setState({ merchant: results }));
  }

  addItem() {
    console.log("Item Added Successfully");
  }

  render() {
    return (
      // <div>
      //   {/* <h2>{this.props.match.params.id}</h2> */}
      //   <span>Test</span>
      //   {/* <ContentItem merchant={this.state.merchant} />; */}
      //   <Button id="createNewOffering" onclick="addItem">
      //     Add
      //   </Button>
      // </div>
      <div>
        <h1>This is merchant Home Page</h1>
      </div>
    );
  }
}

const ContentItem = ({ merchant }) => (
  <div>
    <span>{merchant.name}</span>
    <span>{merchant.category}</span>
  </div>
);

ReactDOM.render(<MerchantHomePage />, document.getElementById("root"));

export default MerchantHomePage;
