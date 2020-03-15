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

const User = ({ match }) => <p>{match.params.id}</p>;

class MerchantList extends React.Component {
  constructor() {
    super();

    this.state = {
      items: [
        { name: "test", category: "123" },
        { name: "test1", category: "1234" }
      ]
    };
  }
  componentDidMount() {
    console.log("Tried getting items");
    this.getItems();
  }

  getItems() {
    fetch("http://localhost:8080/merchant/all/")
      .then(results => results.json())
      .then(results => this.setState({ items: results }));
  }

  render() {
    return (
      <ul>
        {this.state.items.map(function(item, index) {
          return <ContentItem item={item} key={index} />;
        })}
      </ul>
    );
  }
}

const ContentItem = ({ item }) => (
  <Row className="ContentItem">
    <Col xs="3" />
    <Col xs="12" sm="6">
      <Card>
        <CardImg top width="100%" src={item.image}></CardImg>
        <CardBody>
          <CardTitle>{item.name}</CardTitle>
          <CardText>{item.category}</CardText>
        </CardBody>
      </Card>
    </Col>
  </Row>
);

ReactDOM.render(<MerchantList />, document.getElementById("root"));

export default MerchantList;
