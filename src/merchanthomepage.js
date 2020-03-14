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
  constructor() {
    super();

    this.state = {
      items: [
        { title: "test", description: "123" },
        { title: "test1", description: "1234" }
      ]
    };
  }
  componentDidMount() {
    this.getItems();
  }

  getItems() {
    fetch("http://localhost:8000/api/item/")
      .then(results => results.json())
      .then(results => this.setState({ items: results }));
  }

  addItem() {
    console.log("Item Added Successfully");
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.items.map(function(item, index) {
            return <ContentItem item={item} key={index} />;
          })}
        </ul>
        <Button id="createNewOffering" onclick="addItem">
          Add
        </Button>
      </div>
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
          <CardTitle>{item.title}</CardTitle>
          <CardText>{item.description}</CardText>
        </CardBody>
      </Card>
    </Col>
  </Row>
);

ReactDOM.render(<MerchantHomePage />, document.getElementById("root"));

export default MerchantHomePage;
