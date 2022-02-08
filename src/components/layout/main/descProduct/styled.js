import styled from "styled-components";
import { P, Ul } from "../../../../elements";

const StyledParametr = styled(P)`
    font-family: "inter", sans-serif;
    font-size: 14px;
    line-height: 21px;
    font-weight: 700;
    color: #333333;
`;

const StyledDesc = styled(P)`
    font-family: "inter", sans-serif;
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;
    color: #333333;
    padding-top: 16px;
`;

const StyledValueParametr = styled.span`
    font-weight: 400;
`;

const StyleListPatametrs = styled(Ul)`
    padding: 20px 0;
    padding-bottom: 0;
    box-sizing: border-box;
    display: flex;
    gap: 8px;
    flex-direction: column;
`;

const StyledPrice = styled.span`
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 700;
    line-height: 21px;
    color: #333333;
    background-color: #D8ECFE;
    display: block;
    padding: 4px 8px;
    justify-self: flex-start;
`;

export {
    StyledParametr,
    StyledValueParametr,
    StyledDesc,
    StyleListPatametrs,
    StyledPrice
}