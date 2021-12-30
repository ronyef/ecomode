import React from "react";
import { Stack, Image } from "react-bootstrap";

function TopHeader() {
  return (
    <div className="mt-5 bg-warning pb-4">
      <div className="container me-auto">
        <Stack direction="horizontal" gap={5}>
          <div className="w-50">
            <Image
              src="https://focused-swirles-1663f8.netlify.app/images/hdsm.png"
              fluid
            />
          </div>
          <div className="w-50">
            <span className="fs-1 fw-bold d-block">Produktifitas</span>
            <span className="fs-3 fw-light me-2">adalah</span>
            <span className="fs-1 fw-bold ">Prioritas</span>
          </div>
        </Stack>
      </div>
    </div>
  );
}

export default TopHeader;
