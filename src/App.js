import "./App.css";
import TopNav from "./components/TopNav";
import TopHeader from "./components/TopHeader";
import {
  Container,
  Row,
  Col,
  Card,
  Button
} from "react-bootstrap";

function App() {
  return (
    <div>
      <TopNav />
      <TopHeader />
      <Container className="pt-5 pb-4">
        <Row>
          <Col>
            <h2>Power & Economy Mode</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
            </p>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://cdn.glitch.me/873f6cf0-8698-4dc6-95c1-7cc6037da033/operator.png?v=1640835554239"
              />
              <Card.Body>
                <Card.Title>Operator Anda Terlalu Sibuk</Card.Title>
                <Card.Text>
                  Terlalu banyak hal yang dipikirkan dan dilakukan oleh operator
                  saat mengoperasikan haul truck. Dari mulai memikirkan rute
                  jalan, tanjakan, turunan, komunikasi radio, loading, dumping,
                  penggunaan retarder, service brake, dan yang paling penting
                  adalah memikirkan safety saat beroperasi.
                </Card.Text>
                <Button variant="dark">Go Pelajari</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
