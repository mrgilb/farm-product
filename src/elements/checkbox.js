import styled from "styled-components";

const Checkbox = styled.input.attrs(() => (
    {
        type: "checkbox",
    }
))`
    margin: 0;
    padding: 0;
    border: none;
`;

export default Checkbox;