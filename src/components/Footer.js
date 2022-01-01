import React from "react";
import { Stack, Row, Col, Image } from "react-bootstrap";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="bg-primary py-4 px-4 text-light">
      <Row className="align-items-center row-cols-auto">
        <Col>
          <Image src="images/mapic2.png" style={{ height: "120px" }} />
        </Col>

        <Col>
          <Stack direction="horizontal">
            <div className="vr" style={{ height: "100px" }}></div>
            <div className="ms-2">
            <Stack direction="vertical fs-6">
              <span>
                <AiOutlineMail className="me-2" /> sales@mekatronik.cc
              </span>
              <span>
                <AiOutlinePhone className="me-2" /> +62 821 1605 5798
              </span>
              <span>
                <BsWhatsapp className="me-2" /> 0812 20 0812 76
              </span>
            </Stack>
            </div>
          </Stack>
        </Col>
        <Col>
          <Stack direction="horizontal">
            <div className="vr" style={{ height: "100px" }}></div>
            <Image src="./images/lampu.png" style={{ height: "100px" }} />
            <div className="ms-2">
              <h2>Get Quotation!</h2>
              And start your improvement project
            </div>
          </Stack>
        </Col>
      </Row>
    </div>
  );
}
