import React from "react";
import { Card } from "antd";

export default function BoxComponent({children, borderSize}) {
  let CardStyle = {
    border: 'solid',
    borderColor: '#bfbfbf',
    borderWidth: borderSize
  };
  return (
    <Card bordered={true} style={CardStyle}>
      {children}
    </Card>
  );
}
