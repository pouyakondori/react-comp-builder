import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

export default function H2Component(props = {}) {
  return <h2>{props.text}</h2>;
}
