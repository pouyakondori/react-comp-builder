import React from "react";
import { Typography } from "antd";
const { Paragraph } = Typography;

export default function ParagraphComponent(props) {
  return <Paragraph>{props.text}</Paragraph>;
}
