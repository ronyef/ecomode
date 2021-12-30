import "./App.css";
import TopNav from "./components/TopNav";
import TopHeader from "./components/TopHeader";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Stack,
  Image
} from "react-bootstrap";

function App() {
  return (
    <div>
      <TopNav />
      <TopHeader />
      <Container className="pt-5 pb-4">
        <Row>
          <Col sm={12} md={6}>
            <Stack direction="horizontal">
              <Image src="./images/ecoMode.png" style={{width: '100px'}} />
              <Image src="./images/strongMode.png" style={{width: '80px'}}/>
            </Stack>
            <h2>Power & Economy Mode</h2>
            <p>
              Pemilihan mode yang tepat saat pengoperasian adalah sangat penting untuk produktifitas.
              Operator memiliki kecenderungan untuk mengaktifkan powerful mode saat bekerja. Karena dengan mode ini,
              dia akan mendapatkan output power yang maksimal. Namun penggunaan power mode yang berlebihan akan mengakibatkan
              pemborosan fuel dan over power yang berpengaruh pada komponen-komponen mesin.
            </p>
            <p>
              Begitu pula sebaliknya. Penggunaan econo mode yang berkepanjangan juga dapat menurunkan produktifitas karena kurangnya
              power yang berakibat terhadap kecepatan unit, kurangnya power saat muatan dan tanjakan, juga dapat mempengaruhi lifetime komponen-komponen
              mesin karena terjadi pemaksaan untuk mengejar performa.
            </p>
          </Col>
          <Col sm={12} md={6} className="mt-4 mt-sm-0 ps-sm-5">
            <Card>
              <Card.Img
                variant="top"
                src="./images/operator.png"
              />
              <Card.Body>
                <Card.Title>Operator Anda Terlalu Sibuk</Card.Title>
                <Card.Text >
                  Terlalu banyak hal yang dipikirkan dan dilakukan oleh operator
                  saat mengoperasikan haul truck. Dari mulai memikirkan rute
                  jalan, tanjakan, turunan, komunikasi radio, loading, dumping,
                  penggunaan retarder, service brake, dan yang paling penting
                  adalah memikirkan safety saat beroperasi.
                </Card.Text>
                <span className='fs-5 fw-bold'>Hal ini mengakibatkan kelalaian dalam pemilihan mode operasi yang tepat.</span>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <div className='my-4' style={{backgroundImage: "url('./images/miningTruck1.png')", backgroundSize: 'cover',}}>
        <Container className="py-4">
          <Row>
            <Col md={{ span: 6, offset: 6 }}>
              <h2 className="text-dark">Pemilihan mode yang tepat:</h2>
              <ul className="text-dark">
                <li>Eco Mode - Saat muatan kosong.</li>
                <li>Power Mode - Saat muatan kosong tanjakan.</li>
                <li>Power Mode - Saat bermuatan.</li>
                <li>Eco Mode - Bermuatan di turunan.</li>
                <li>Eco Mode - Bermuatan saat beban transmisi ringan.</li>
              </ul>
              <p className="text-dark">Begitu banyak kondisi sehingga operator mengaktifkan Power Mode terus menerus.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
