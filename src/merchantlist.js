import React from "react";
import { Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import ReactDOM from "react-dom";
// import "bootstrap/dist/css/bootstrap.css";
import history from "./history";
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
import ContentItem from "./contentItem";

const User = ({ match }) => <p>{match.params.id}</p>;

class MerchantList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { name: "test", category: "123" },
        { name: "test1", category: "1234" }
      ],
      merchant: {
        name: "test"
      }
    };
    this.loadMerchantDetails = this.loadMerchantDetails.bind(this);
    //let history = useHistory();
  }
  componentDidMount() {
    console.log("Tried getting items");
    this.getMerchants();
  }

  // componentWillUnmount() {
  //   window.location.href = window.location.origin;
  // }

  componentDidMount() {
    console.log("Tried getting items");
    this.getMerchants();
  }

  getMerchants() {
    fetch("http://localhost:8080/merchant/all/")
      .then(results => results.json())
      .then(results => this.setState({ items: results }));
  }

  loadMerchantDetails(id) {
    console.log(id);
    // // fetch(`http://localhost:8080/merchant/${id}`)
    // //   .then(results => results.json())
    // //   .then(results => this.setState({ merchant: results }));
    // // return <text>merchant.name</text>;
    // window.location.href = "/merchantHome/${id}";
    window.location.assign("/merchantHome/" + id);

    //window.location.href = "/login";
  }

  render() {
    return (
      <ul>
        {this.state.items.map((item, index) => {
          return (
            <ContentItem
              item={item}
              key={index}
              loadMerchant={() => this.loadMerchantDetails(item.id)}
            />
          );
        })}
      </ul>
    );
  }
}

// const ContentItem = ({ item }, { loadMerchantDetails }) => (
//   <Row className="ContentItem">
//     <Col xs="3" />
//     <Col xs="12" sm="6">
//       <Card>
//         <CardImg top width="100%" src={item.image}></CardImg>
//         <CardBody>
//           <CardTitle>{item.name}</CardTitle>
//           <CardText>{item.category}</CardText>
//         </CardBody>
//       </Card>
//     </Col>
//   </Row>
// );

ReactDOM.render(<MerchantList />, document.getElementById("root"));

export default MerchantList;
