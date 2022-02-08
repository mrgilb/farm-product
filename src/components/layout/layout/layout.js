import Header from "../header/header";
import Main from "../main/main/mainPage";
import Nav from "../../nav/nav";
import LinkMain from "../../ui/link/link" 
import React from "react";
import LinkToMain from "../../ui/linkToMain/linkToMain";

export default function Layout ({children, pathName}) {
    return (
        <React.Fragment>
            <Header>
                <Nav>
                    {pathName === "/"? <LinkMain link={"/catalog"}>Купить</LinkMain> : 
                    <LinkToMain link={"/"}>Главная</LinkToMain>}
                </Nav>
            </Header>
            <Main>{children}</Main>
        </React.Fragment>

    )
}