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
import { Tag } from "antd";

const { Option } = Select;
const { TextArea } = Input;
export const LandingPage = () => {
  const [stormMode, setStormMode] = useState({
    value: false,
    content: "Disabled",
  });

  const LandingSchema = Yup.object({
    language: Yup.string().required("Language is required"),
  });

  const defaultValues = {
    language: "",
    project: "",
    strom: false,
    benfit: "",
    topic: "",
    guide: false,
    feature: "",
  };
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LandingSchema),
    defaultValues,
  });
  console.log(errors);
  const stromValue = watch("strom");

  useEffect(() => {
    if (errors?.email) {
      enqueueSnackbar(`${errors?.email?.message}`, { variant: "error" });
    } else if (errors?.password) {
      enqueueSnackbar(`${errors?.password?.message}`, { variant: "error" });
    }
  }, [errors]);

  const handleModeChange = () => {};
  const onSubmit = async (data) => {
    console.log(data);
    console.log("wdqd");
    try {
      enqueueSnackbar("Login sucessfull", { variant: "success" });
    } catch (error) {}
  };

  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState(["covid", "fiver"]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && !tags.includes(inputValue)) {
      setTags([...tags, inputValue]);
      setInputValue("");
    }
  };

  const handleTagClose = (removedTag) => {
    const updatedTags = tags.filter((tag) => tag !== removedTag);
    setTags(updatedTags);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row gutter={16}>
          <Col span={12} style={{ marginTop: 5 }}>
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
            <Select
              {...register("language")}
              id="language"
              name="language"
              showSearch
              style={{ width: "100%" }}
              placeholder="Select Language"
            >
              <Option value="english">English</Option>
              <Option value="spanish">Spanish</Option>
              <Option value="french">French</Option>
            </Select>
          </Col>
          <Col span={12} style={{ marginTop: 5 }}>
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
                <FaRegStar style={{ marginRight: 5 }} size={20} />
                Brainstorm Mode
              </span>
              <h4
                style={{
                  fontWeight: 400,
                  fontSize: ".75rem",
                  lineHeight: "1rem",
                  fontFamily: "Source Sans Pro, sans-serif",
                  color: "#808280",
                  marginTop: 5,
                }}
              >
                {" "}
                Enable to write random ideas/inspiration based on selected
                project
              </h4>
            </label>
            <span style={{ display: "flex", alignItems: "center" }}>
              <Switch
                name="strom"
                {...register("strom")}
                defaultValue={stormMode?.value}
                onChange={(checked) => {
                  setStormMode({
                    value: checked,
                    content: checked ? "Enable" : "Disable",
                  });
                }}
                style={{ marginRight: 10, color: "green" }}
              />
              {stormMode?.content}
            </span>
          </Col>
          {stormMode?.value && (
            <>
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
                    defaultValue={false}
                    style={{ marginRight: 10 }}
                  />
                  Disabled
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
            </>
          )}
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

            <Input
              {...register("benfit")}
              id="benfit"
              placeholder="Saves your money"
            />
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

            <Input
              {...register("feature")}
              id="feature"
              placeholder="New widget"
            />
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

            <Input
              {...register("topic")}
              id="topic"
              placeholder="New widget released"
            />
          </Col>
          {stormMode?.value != true && (
            <>
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
                    {...register("guide")}
                    id="guide"
                    defaultValue={false}
                    style={{ marginRight: 10 }}
                  />
                  Disabled
                </span>
              </Col>
              <Col span={24} style={{ marginTop: 20 }}>
                <Button
                  type="submit"
                  shape="default"
                  style={{ backgroundColor: "#0033FF", color: "white" }}
                >
                  Write for me
                </Button>
              </Col>
            </>
          )}
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
              Project / Audience / Service name*
            </label>

            <Input
              disabled
              {...register("pn")}
              id="pn"
              placeholder="Project name"
              value={"Covid 2019"}
            />
          </Col>{" "}
          <Col span={24} style={{ marginTop: 20 }}>
            <label
              htmlFor="description"
              style={{
                fontWeight: 600,
                fontSize: ".875rem",
                lineHeight: "1.25rem",
                fontFamily: "Source Sans Pro, sans-serif",
                color: "#808280",
              }}
            >
              Description *
            </label>

            <TextArea
              disabled
              {...register("description")}
              id="description"
              rows={5}
              placeholder="Type something here..."
              value={
                "COVID-19, caused by the SARS-CoV-2 virus, is a highly contagious respiratory illness that emerged in late 2019. Characterized by flu-like symptoms, it can lead to severe pneumonia and, in some cases, death. "
              }
            />
          </Col>
          <Col span={24} style={{ marginTop: 20 }}>
            <label
              htmlFor="audience"
              style={{
                fontWeight: 600,
                fontSize: ".875rem",
                lineHeight: "1.25rem",
                fontFamily: "Source Sans Pro, sans-serif",
                color: "#808280",
              }}
            >
              Audience
            </label>

            <div>
              <Input
                disabled
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onBlur={handleInputConfirm}
                onPressEnter={handleInputConfirm}
                placeholder="Enter tags"
              />
              {tags.map((tag) => (
                <Tag key={tag} closable onClose={() => handleTagClose(tag)}>
                  {tag}
                </Tag>
              ))}
            </div>
          </Col>{" "}
          <Col span={24} style={{ marginTop: 20 }}>
            <label
              htmlFor="audience"
              style={{
                fontWeight: 600,
                fontSize: ".875rem",
                lineHeight: "1.25rem",
                fontFamily: "Source Sans Pro, sans-serif",
                color: "#808280",
              }}
            >
              Keywords
            </label>

            <div>
              <Input
                disabled
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onBlur={handleInputConfirm}
                onPressEnter={handleInputConfirm}
                placeholder="Enter keywords"
              />
              {tags.map((tag) => (
                <Tag key={tag} closable onClose={() => handleTagClose(tag)}>
                  {tag}
                </Tag>
              ))}
            </div>
          </Col>{" "}
          <Col
            span={24}
            style={{
              marginTop: 20,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button style={{ color: "#0033FF" }}>Manage your projects</Button>
          </Col>
        </Row>
      </form>
    </>
  );
};
