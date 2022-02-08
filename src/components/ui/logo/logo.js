import React from "react";
import { Image} from "../../../elements";
import logoImage from "../../../img/Group.svg"
import { LogoText, LogoContainer } from "./styled";


export default function Logo () {
    return (
        <LogoContainer src = "#">
            <Image src = {logoImage} maxWidth = {44}></Image>
            <LogoText>Фермерские продукты</LogoText>
        </LogoContainer>
    )
}