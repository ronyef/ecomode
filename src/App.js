import "./App.css";
import TopNav from "./components/TopNav";
import TopHeader from "./components/TopHeader";
import {
  Container,
  Row,
  Col,
  Card,
  Stack,
  Image,
  Button,
} from "react-bootstrap";

function App() {
  return (
    <div>
      <TopNav />
      <TopHeader />
      <section id="about">
        <Container className="pt-5 pb-4">
          <Row>
            <Col sm={12} md={6}>
              <Stack direction="horizontal">
                <Image src="./images/ecoMode.png" style={{ width: "100px" }} />
                <Image
                  src="./images/strongMode.png"
                  style={{ width: "80px" }}
                />
              </Stack>
              <h2>Power & Economy Mode</h2>
              <p className="text-justify">
                Pemilihan mode yang tepat saat pengoperasian adalah sangat
                penting untuk produktifitas. Operator memiliki kecenderungan
                untuk mengaktifkan powerful mode saat bekerja. Karena dengan
                mode ini, dia akan mendapatkan output power yang maksimal. Namun
                penggunaan power mode yang berlebihan akan mengakibatkan
                pemborosan fuel dan over power yang berpengaruh pada
                komponen-komponen mesin.
              </p>
              <p>
                Begitu pula sebaliknya. Penggunaan econo mode yang
                berkepanjangan juga dapat menurunkan produktifitas karena
                kurangnya power yang berakibat terhadap kecepatan unit,
                kurangnya power saat muatan dan tanjakan, juga dapat
                mempengaruhi lifetime komponen-komponen mesin karena terjadi
                pemaksaan untuk mengejar performa.
              </p>
            </Col>
            <Col sm={12} md={6} className="mt-4 mt-sm-0 ps-sm-5">
              <Card>
                <Card.Img variant="top" src="./images/operator.png" />
                <Card.Body>
                  <Card.Title>Operator Anda Terlalu Sibuk</Card.Title>
                  <Card.Text>
                    Terlalu banyak hal yang dipikirkan dan dilakukan oleh
                    operator saat mengoperasikan haul truck. Dari mulai
                    memikirkan rute jalan, tanjakan, turunan, komunikasi radio,
                    loading, dumping, penggunaan retarder, service brake, dan
                    yang paling penting adalah memikirkan safety saat
                    beroperasi.
                  </Card.Text>
                  <span className="fs-5 fw-bold">
                    Hal ini mengakibatkan kelalaian dalam pemilihan mode operasi
                    yang tepat.
                  </span>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <div
          className="my-4"
          style={{
            backgroundImage: "url('./images/miningTruck1.png')",
            backgroundSize: "cover",
          }}
        >
          <Container className="py-4">
            <Row>
              <Col
                md={{ span: 6, offset: 6 }}
                style={{ backgroundColor: "rgba(0,0,0,.3)" }}
                className="text-white py-2 px-3 rounded"
              >
                <h2>Pemilihan mode yang tepat:</h2>
                <ul>
                  <li>Eco Mode - Saat muatan kosong.</li>
                  <li>Power Mode - Saat muatan kosong tanjakan.</li>
                  <li>Power Mode - Saat bermuatan.</li>
                  <li>Eco Mode - Bermuatan di turunan.</li>
                  <li>Eco Mode - Bermuatan saat beban transmisi ringan.</li>
                  <li>Dan lain sebagainya...</li>
                </ul>
                <p>
                  Begitu banyak kondisi sehingga operator lebih memilih
                  mengaktifkan Power Mode terus menerus.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <Container className="my-5">
          <h2>Inovasi Untuk Productivity & Reliability</h2>
          <Row>
            <Col lg={{ span: 8 }}>
              <p>
                Kami rancang sebuah sistem yang secara terus menerus memonitor
                setiap kondisi operasi dan menentukan mode yang tepat untuk
                meningkatkan performance unit.
              </p>
              <Image src="./images/blockDiagram.jpg" fluid />
            </Col>
          </Row>
        </Container>
      </section>
      <section id="features">
        <Container className="bg-light py-4 my-4">
          <h2>Features</h2>
          <Row>
            <Col className="" sm={12} md={4}>
              <Card>
                <Card.Img variant="top" src="./images/fuel.png" />
                <Card.Body>
                  <Card.Title>Hemat Fuel</Card.Title>
                  <Card.Text>
                    Dengan memaksimalkan penggunaan econo mode, maka konsumsi
                    bahan bakar dapat dikurangi dalam jumlah yang signifikan.
                    Begitu juga dengan penggunaan power mode di saat yang tepat.
                    Aktifasi econo mode berlebihan juga dapat mengakibatkan low
                    power sehingga power mode dapat pula mengoptimalkan konsumsi
                    fuel.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="" sm={12} md={4}>
              <Card>
                <Card.Img variant="top" src="./images/component.png" />
                <Card.Body>
                  <Card.Title>Extend Component Life</Card.Title>
                  <Card.Text>
                    Over power dan under power, kedua-duanya sangat berpengaruh
                    terhadap kesehatan mesin. Penggunaan power mode yang tidak
                    pada tempatnya akan memaksa mesin untuk perform maksimal
                    dengan supply fuel yang rendah. Begitu pula sebaliknya.
                    Lagi-lagi, keakuratan penentuan penggunaan mode yang tepat
                    menjadi kunci utama reliability alat.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className="" sm={12} md={4}>
              <Card>
                <Card.Img variant="top" src="./images/safety.png" />
                <Card.Body>
                  <Card.Title>Improve Safety</Card.Title>
                  <Card.Text>
                    Banyaknya proses/task yang harus dilakukan oleh operator,
                    termasuk kerumitan penentuan penggunaan mode yang tepat ini
                    dapat mengakibatkan kelelahan operator. Sistem ini dapat
                    membantu operator untuk pengambilan keputusan yang tepat di
                    saat yang tepat. Kecerdasan buatan ini sangat berkontribusi
                    terhadap keselamatan.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="pricing">
        <Container className="my-4">
          <h2>Pricing</h2>
          <Row>
            <Col sm={12} md={4}>
              <Image src="./images/BillyRocket.jpg" fluid />
            </Col>
            <Col md="8">
              <Row>
                <Col sm={12} md={4}>
                  <Card className="text-center">
                    <Card.Header className="bg-danger text-white">
                      FREE TRIAL
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>IDR 0</Card.Title>
                      <Card.Text>
                        Gratis pemasangan Smart Ecomode system untuk customer
                        yang eligible.
                      </Card.Text>
                      <Button variant="outline-dark">Dapatkan RFQ</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={12} md={4}>
                  <Card className="text-center">
                    <Card.Header className="bg-warning text-dark">
                      PRO
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>&lt; 50 unit</Card.Title>
                      <Card.Text>
                        Instalasi mandiri dengan remote support dan fair
                        warranty.
                      </Card.Text>
                      <Button variant="outline-dark">Dapatkan RFQ</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={12} md={4}>
                  <Card className="text-center">
                    <Card.Header className="bg-success text-white">
                      ENTERPRISE
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>&gt; 50 unit</Card.Title>
                      <Card.Text>
                        Gratis biaya instalasi dan mendapatkan full support &
                        extended warranty.
                      </Card.Text>
                      <Button variant="outline-dark">Dapatkan RFQ</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default App;
