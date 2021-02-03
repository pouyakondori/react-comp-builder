import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

export default function H1Component(props) {
  return <h1>{props.text}</h1>;
}
