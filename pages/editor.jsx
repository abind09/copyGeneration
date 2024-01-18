import React from "react";
import { Col, Row, Typography } from "antd";
import { LandingPage } from "../components/LandingPage";

const Editor = () => {
  return (
    <>
      <Row style={{ marginLeft: 45, marginTop: 30 }}>
        <Col span={10} style={{ height: "100vh", overflowY: "auto" }}>
          <Typography.Title
            level={5}
            style={{ color: "blue", fontWeight: 500 }}
          >
            Prompt
          </Typography.Title>
          <LandingPage />
        </Col>
        <Col span={14}>
          <Typography.Title
            level={5}
            style={{ color: "blue", fontWeight: 500 }}
          >
            Result
          </Typography.Title>
        </Col>
      </Row>
    </>
  );
};

export default Editor;
