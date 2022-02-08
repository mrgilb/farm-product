import { StyledHeader } from "./styled";
import Logo from "../../ui/logo/logo"

export default function Header ({children}) {
    return (
        <StyledHeader>
            <Logo></Logo>
            {children}
        </StyledHeader>
    )
} 