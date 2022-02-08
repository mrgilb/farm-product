import styled from "styled-components";
import { H3, P } from "../../../elements";

const TitleCard = styled(H3)`
    font-family: "inter", sans-serif;
    font-size: 18px;
    line-height: 27px;
    font-weight: 700;
    color: #333333;
`;

const SignProduct = styled.span`
    font-family: "inter", sans-serif;
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;
    color: #FFFFFF;
    padding: 2px 10px;
    background-color: ${(proprs) => proprs.IsFarmers ? "#88AA4D" : "#F75531"};
`;

const DescProduct = styled(P)`
    font-family: "inter", sans-serif;
    font-size: 18px;
    line-height: 27px;
    font-weight: 400;
    color: #333333;  
`;

export {TitleCard, SignProduct, DescProduct};