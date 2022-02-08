import styled from "styled-components";
import { Button } from "../../../elements";

const StyledButton = styled(Button)`
    padding: 17px 98px;
    background-color: #FC9B27;
    color: #FFFFFF;
    font-family: "inter", sans-serif;
    font-size: 18px;
    line-height: 27px;
    font-weight: 700;
    display: block;

    :hover {
        background-color: #FC7427;
        box-shadow: inset 0px 4px 0px rgba(0, 0, 0, 0.14);
    }
    :active {
        background-color: #FC7427;
        box-shadow: none;
    }
    :disabled {
        opacity: 0.5;
    }
`;

export default StyledButton;