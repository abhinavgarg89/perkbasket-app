import React from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Button
} from "reactstrap";

class ContentItem extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Row className="ContentItem">
        <Col xs="3" />
        <Col xs="12" sm="6">
          <Card>
            <CardImg top width="100%" src={this.props.item.image}></CardImg>
            <CardBody>
              <CardTitle>{this.props.item.name}</CardTitle>
              <CardText>{this.props.item.category}</CardText>
              <Button onClick={this.props.loadMerchant}>Details</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default ContentItem;
