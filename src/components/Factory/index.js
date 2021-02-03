import React from "react";
import Builder from "../Builder";
import BoxComponent from "../Particles/BoxComponent";
import ButtonComponent from "../Particles/ButtonComponent";
import H1Component from "../Particles/H1Component";
import H2Component from "../Particles/H2Component";
import LinkComponent from "../Particles/LinkComponent";
import ListComponent from "../Particles/ListComponent";
import ModalComponent from "../Particles/ModalComponent";
import ParagraphComponent from "../Particles/ParagraphComponent";

function Factory({Children = [], Content = {}}) {
    const childrenArray = Object.keys(Children).map(key => ({
        key,
        data: Children[key]
    }))
    const componentProps = Content.props || {};

    function initializeAndGetWrapper() {
        switch (Content.type) {
            case "BoxComponent":
                return BoxComponent
            case "ButtonComponent":
                return ButtonComponent;
            case "H1Component":
                return H1Component
            case "H2Component":
                return H2Component
            case "LinkComponent":
                return LinkComponent
            case "ListComponent":
                return ListComponent;
            case "ModalComponent":
                return ModalComponent;
            case "ParagraphComponent":
                return ParagraphComponent;
            default:
                return () => <div>{Content.type} is Not Implemented Yet</div>
        }
    }

    const Wrapper = initializeAndGetWrapper();
    return <Wrapper {...componentProps}>
        <Builder components={childrenArray.map(ch => ch.data)}/>
    </Wrapper>
}

export default Factory;
