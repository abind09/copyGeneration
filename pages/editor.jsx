import React from "react";
import { Col, Row, Typography, Button } from "antd";
import { LandingPage } from "../components/LandingPage";
import { FaStar } from "react-icons/fa6";

const Editor = () => {
  return (
    <>
     
      <div style={{ margin: 1 }}>
        <Row
          gutter={4}
          style={{
            display: "flex",

            justifyContent: "space-between",
            margin: 30,
            marginTop: 60,
          }}
        >
          <Col xs={24} md={12} lg={12}>
            {" "}
            <span
              style={{
                display: "flex",
                alignItems: "center",
                fontWeight: 500,
                fontSize: "1.875rem",
                lineHeight: "2.25rem",
                fontFamily: "Barlow Semi Condensed,sans-serif",
              }}
            >
              Landing Page Copy{" "}
              <FaStar color="#ffa500" style={{ marginLeft: 10 }} size={20} />
            </span>
          </Col>
          <Col xs={24} md={12} lg={12}>
            <span
              style={{
                display: "flex",
                alignItems: "right",
                justifyContent: "right",
                fontWeight: 500,
                fontSize: "1.875rem",
                lineHeight: "2.25rem",
                fontFamily: "Barlow Semi Condensed,sans-serif",
              }}
            >
              <Button
                shape="round"
                style={{ color: "#0033FF", marginRight: 20 }}
              >
                Click Here To Get Unlimited
              </Button>
              <Button
                shape="default"
                style={{ backgroundColor: "#0033FF", color: "white" }}
              >
                Write for me
              </Button>
            </span>
          </Col>
        </Row>
      </div>
      <Row style={{ marginLeft: 20, marginTop: 30, padding: 10 }}>
        <Col xs={24} md={12} lg={12}>
          <Row>
            <Col xs={24} md={24} lg={24}>
              <Typography.Title
                level={5}
                style={{ color: "blue", fontWeight: 500 }}
              >
                Prompt
              </Typography.Title>
            </Col>

            <Col
              xs={24}
              md={24}
              lg={24}
              style={{
                height: "70vh",
                overflowY: "auto",
                overflowX: "hidden",
                padding: 5,
              }}
            >
              <LandingPage />
            </Col>
          </Row>
        </Col>
        <Col xs={24} md={12} lg={12}>
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
