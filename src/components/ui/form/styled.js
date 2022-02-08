import { Form, Checkbox, Fieldset, P, Ul, Li } from "../../../elements";
import Button from "../button/button";
import styled from "styled-components";
import checked from "../../../img/checked.png"

const StyledForm = styled(Form)`
    font-family: "inter", sans-serif;
    font-size: 18px;
    line-height: 27px;
    font-weight: 400;
`;

const StyledLegend = styled.legend`
    font-weight: 700;
    position: absolute;
`;

const StyledInputAddress = styled.input.attrs(() => ({
    type: "text",
    placeholder : "Введите адрес доставки"
}))`
    font-family: "inter", sans-serif;
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;
    background: #F7F7F7;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    padding: 14px 12px;
    margin-top: 40px;
    width: 100%;
`;

const StyledPriceCounter = styled.span`
    font-family: "inter", sans-serif;
    font-size: 24px;
    line-height: 31px;
    font-weight: 700;
`;

const StyledPrice = styled(P)`
    font-family: "inter", sans-serif;
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;
    padding: 20px 0;
    box-sizing: border-box;
`;

const StyledFormButton = styled(Button)`
    padding: 17px 125px;
`;

const StyledFieldset = styled(Fieldset)`
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    padding: 25px 18px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    min-width: 353px;
    :first-child {
        margin-bottom: 20px;
    };
`;

const StyledCheckboxForm = styled(Checkbox)`
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
    + label:after {
        content: "";
        position: absolute;
        width: 24px;
        height: 24px;
        right: 0px;
        top: 0px;

        background: #F7F7F7;
        border: 1px solid rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
    };
    :checked  + label:after {
        content: "";
        position: absolute;
        width: 24px;
        height: 24px;
        right: 0px;
        top: 0px;
        background-image: url(${checked});
    };
`;

const StyledLabelForm = styled.label`
    margin: 0;
    padding: 0;
    position: relative;
    width: 100%;
`;

const StyledListCheckbox = styled(Ul)`
    display: flex;
    flex-direction: column;
    margin-top: 44px;
    width: 100%;
`;

const StyledItemCheckbox = styled(Li)`
    display: flex;
    padding: 15px 0;
    box-sizing: border-box;
`;

export {StyledItemCheckbox, 
    StyledListCheckbox, 
    StyledLabelForm, 
    StyledCheckboxForm, 
    StyledFieldset, 
    StyledFormButton, 
    StyledPrice, 
    StyledPriceCounter, 
    StyledInputAddress, 
    StyledLegend, 
    StyledForm};

