import styled from "styled-components";
import { H2 } from "../../../elements";

export const StyledTitleCard = styled(H2)`
    font-family: "Inter", sans-serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 31px;
    margin-bottom: 16px;
`;

export const StyledContainer = styled.div`
    display: flex;
    gap: 20px;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    padding: 20px;
    min-width: 727px;
    min-height: 290px;
`;