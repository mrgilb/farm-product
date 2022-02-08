import React from "react";
import { StyledSectionAbout, AboutTitle, AboutText } from "./styled";
import farmerImage from "../../../../img/farmer-image.png";
import { Image } from "../../../../elements";

export default function About () {
    return (
        <StyledSectionAbout>
            <div>
                <AboutTitle>Магазин фермерских продуктов с доставкой</AboutTitle>
                <AboutText>Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за день до отправки заказа клиентам. Именно поэтому мы принимаем заказы заранее и доставляем продукты максимально свежими.</AboutText>
            </div>
            <Image src = {farmerImage} maxWidth = {447}></Image>
        </StyledSectionAbout>
    )
}