import styled from "styled-components";
import { P, A } from "../../../elements";

const LogoText = styled(P)`
    font-family: "inter", sans-serif;
    font-size: 28px;
    line-height: 32px;
    font-weight: 700;
    align-self: center;
    min-width: 330px;
`;
const LogoContainer = styled(A)`
display: flex;
gap: 24px;
`;

export {LogoText, LogoContainer}
