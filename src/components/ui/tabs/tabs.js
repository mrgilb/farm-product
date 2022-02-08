import React, { useState } from "react";
import { StyledListTabs, StledInactiveButton, StyledTabsButton, ContentContainer} from "./style";
import { Li } from "../../../elements";

export default function Tabs ({tabs}) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <React.Fragment>
            <StyledListTabs>
                {tabs && tabs.length && tabs.map ((item, index) => {
                    if (index === activeTab) {
                        return (
                            <Li key = {item.title}>
                                <StledInactiveButton key = {item.title}>{item.title}</StledInactiveButton>
                            </Li>
                        )
                    }
                    return (
                        <Li key = {item.title}>
                            <StyledTabsButton key = {item.title} onClick={() => setActiveTab(index)}>{item.title}</StyledTabsButton>
                        </Li>
                    )
                })}
            </StyledListTabs>
            <ContentContainer>
                {tabs[activeTab].content}
            </ContentContainer>
        </React.Fragment>        
    )
}