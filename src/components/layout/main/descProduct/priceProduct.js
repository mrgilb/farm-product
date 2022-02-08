import React from "react";
import { StyledPrice } from "./styled";

export default function PriceProduct ({price, weight}) {
    return (
        <StyledPrice>{price} руб./ {weight} гр.</StyledPrice>
    )
};