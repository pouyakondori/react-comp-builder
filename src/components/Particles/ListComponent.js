import React from "react";
import {List, Divider} from "antd";

export default function ListComponent(props) {
    const data = props.li
    return (
        <ul>
            {data.map(listItem => <li>{listItem}</li>)}
        </ul>
    );
}
