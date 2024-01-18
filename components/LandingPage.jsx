"use client";
import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import { Select } from "antd";
import { Switch, Input, Button } from "antd";
import { FaRegStar } from "react-icons/fa";
import { BsListStars } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { enqueueSnackbar } from "notistack";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const { Option } = Select;
export const LandingPage = () => {
  const [stormMode, setStormMode] = useState({
    value: false,
    content: "Disabled",
  });

  const LandingSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
  });

  const defaultValues = {
    email: "",
    password: "",
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LandingSchema),
    defaultValues,
  });
 
  useEffect(() => {
    if (errors?.email ) {
      enqueueSnackbar(`${errors?.email?.message}`, { variant: "error" });
    } else if (errors?.password ) {
      enqueueSnackbar(`${errors?.password?.message}`, { variant: "error" });
    }
  }, [errors]);

const onSubmit = async (data) => {
  console.log(data);
  try {
    enqueueSnackbar("Login sucessfull", { variant: "success" });
  } catch (error) {}
};
  return (
    <>
      <Row gutter={16}>
        <Col span={12}>
          <label
            htmlFor="language"
            style={{
              fontWeight: 600,
              fontSize: ".875rem",
              lineHeight: "1.25rem",
              fontFamily: "Source Sans Pro, sans-serif",
              color: "#808280",
            }}
          >
            Language
          </label>
          <Select    {...register("language")}
            id="language"
            showSearch
            style={{ width: "100%" }}
            placeholder="Select Language"
          >
            <Option value="english">English</Option>
            <Option value="spanish">Spanish</Option>
            <Option value="french">French</Option>
          </Select>
        </Col>
        <Col span={12}>
          <label
            htmlFor="project"
            style={{
              fontWeight: 600,
              fontSize: ".875rem",
              lineHeight: "1.25rem",
              fontFamily: "Source Sans Pro, sans-serif",
              color: "#808280",
            }}
          >
            Writing for
          </label>
          <Select
          {...register("project")}
            id="project"
            showSearch
            style={{ width: "100%" }}
            placeholder="Select project"
          >
            <Option value="english">Armech</Option>
            <Option value="spanish">Wct</Option>
            <Option value="french">Refc</Option>
          </Select>
        </Col>
        <Col
          span={24}
          style={{
            marginTop: 20,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <label
            htmlFor="strom"
            style={{
              fontWeight: 600,
              fontSize: ".875rem",
              lineHeight: "1.25rem",
              fontFamily: "Source Sans Pro, sans-serif",
              color: "#808280",
            }}
          >
            <span style={{ display: "flex", alignItems: "center" }}>
              <FaRegStar style={{ marginRight: 20 }} size={20} />
              Brainstorm Mode
            </span>
          </label>
          <span style={{ display: "flex", alignItems: "center" }}>
            <Switch
            
              id="strom"
              autoFocus={true}
              defaultValue={stormMode?.value}
              style={{ marginRight: 10, color: "green" }}
            />
            {stormMode?.content}
          </span>
        </Col>
        <Col
          span={24}
          style={{
            marginTop: 20,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <label
            htmlFor="guide"
            style={{
              fontWeight: 600,
              fontSize: ".875rem",
              lineHeight: "1.25rem",
              fontFamily: "Source Sans Pro, sans-serif",
              color: "#808280",
            }}
          >
            <span style={{ display: "flex", alignItems: "center" }}>
              <BsListStars style={{ marginRight: 20 }} size={20} />
              Inclusivity Guidelines
            </span>
          </label>
          <span style={{ display: "flex", alignItems: "center" }}>
            <Switch
              id="guide"
              autoFocus={true}
              defaultValue={stormMode?.value}
              style={{ marginRight: 10 }}
            />
            {stormMode?.content}
          </span>
        </Col>
        <Col span={24} style={{ marginTop: 20 }}>
          <Button
            shape="default"
            style={{ backgroundColor: "#0033FF", color: "white" }}
          >
            Write for me
          </Button>
        </Col>
        <Col span={24} style={{ marginTop: 20 }}>
          <label
            htmlFor="benfit"
            style={{
              fontWeight: 600,
              fontSize: ".875rem",
              lineHeight: "1.25rem",
              fontFamily: "Source Sans Pro, sans-serif",
              color: "#808280",
            }}
          >
            Benfit
          </label>

          <Input id="benfit" placeholder="Saves your money" />
        </Col>
        <Col span={24} style={{ marginTop: 20 }}>
          <label
            htmlFor="feature"
            style={{
              fontWeight: 600,
              fontSize: ".875rem",
              lineHeight: "1.25rem",
              fontFamily: "Source Sans Pro, sans-serif",
              color: "#808280",
            }}
          >
            Feature
          </label>

          <Input id="feature" placeholder="New widget" />
        </Col>{" "}
        <Col span={24} style={{ marginTop: 20 }}>
          <label
            htmlFor="topic"
            style={{
              fontWeight: 600,
              fontSize: ".875rem",
              lineHeight: "1.25rem",
              fontFamily: "Source Sans Pro, sans-serif",
              color: "#808280",
            }}
          >
            Topic
          </label>

          <Input id="topic" placeholder="New widget released" />
        </Col>
        <Col
          span={24}
          style={{
            marginTop: 20,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <label
            htmlFor="guide"
            style={{
              fontWeight: 600,
              fontSize: ".875rem",
              lineHeight: "1.25rem",
              fontFamily: "Source Sans Pro, sans-serif",
              color: "#808280",
            }}
          >
            <span style={{ display: "flex", alignItems: "center" }}>
              <BsListStars style={{ marginRight: 20 }} size={20} />
              Inclusivity Guidelines
            </span>
          </label>
          <span style={{ display: "flex", alignItems: "center" }}>
            <Switch
              id="guide"
              autoFocus={true}
              defaultValue={stormMode?.value}
              style={{ marginRight: 10 }}
            />
            {stormMode?.content}
          </span>
        </Col>
        <Col span={24} style={{ marginTop: 20 }}>
          <Button
            shape="default"
            style={{ backgroundColor: "#0033FF", color: "white" }}
          >
            Write for me
          </Button>
        </Col>
        <Col span={24} style={{ marginTop: 20, display:'flex', justifyContent:'center', alignItems:'center' }}>
          <Button
            
            style={{ color: "#0033FF" }}
          >
           Manage your projects
          </Button>
        </Col>
      </Row>
    </>
  );
};
