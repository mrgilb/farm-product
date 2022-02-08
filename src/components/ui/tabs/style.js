import styled from "styled-components";
import { Button, Ul } from "../../../elements";

const StyledTabsButton = styled(Button)`
    font-family: "inter", sans-serif;
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;
    background-color: #F7F7F7;
    padding: 8px 12px;
    box-sizing: border-box;
    color: #333333;
    border: 1px solid rgba(0, 0, 0, 0.1);
`;

const StledInactiveButton = styled.span`
    font-family: "inter", sans-serif;
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;
    background-color: #88AA4D;
    padding: 8px 12px;
    box-sizing: border-box;
    color: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.1);
    display: block;
`


const StyledListTabs = styled(Ul)`
    display: flex;
    gap: 8px;
    align-items: center;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: space-between;
    min-height: 148px;
`

export {
    StyledTabsButton,
    StledInactiveButton,
    StyledListTabs,
    ContentContainer}