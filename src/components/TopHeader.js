import React from "react";
import { Stack, Image } from "react-bootstrap";

function TopHeader() {
  return (
    <div className="mt-5 bg-warning py-4">
      <div className="container">
        <Stack direction="horizontal" gap={5}>
          <div className="w-50">
            <Image
              src="./images/hdsm.png"
              fluid
            />
          </div>
          <div className="w-50">
            <span className="fs-1 fw-bold d-block">Produktifitas</span>
            <span className="fs-3 fw-light me-2">adalah</span>
            <span className="fs-1 fw-bold ">Prioritas</span>
            <p className="fs-4"><strong>Reliability</strong> tetap target pasti.</p>
            <p className="text-right font-weight-light text-white">--Mekatronik AP</p>
          </div>
        </Stack>
      </div>
    </div>
  );
}

export default TopHeader;
