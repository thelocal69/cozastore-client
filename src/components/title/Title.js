import React from "react";
import { TitleImg } from "./Style";

const Title = (props) => {

    const { src, alt, titel } = props;

    return (
        <>
            <TitleImg>
                <img src={src} alt={alt} />
                <div>{titel}</div>
            </TitleImg>
        </>
    )
}

export default Title;