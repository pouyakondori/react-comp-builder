import react from "react";
import Factory from "../Factory";

export default function Builder({components = []}){
    if (!components){
        components = []
    }
    return <div>
        {components.map(({Content, Children}) => {
            return <Factory Content={Content} Children={Children}/>           
        })}
    </div>
}