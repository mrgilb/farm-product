import React from "react";
import { StyledTitleCard, StyledContainer } from "./styled";
import { Image } from "../../../elements";
import Tabs from "../tabs/tabs";
import DescProduct  from "../../layout/main/descProduct/descProduct";
import SpecProduct from "../../layout/main/descProduct/specProducts";
import PriceProduct from "../../layout/main/descProduct/priceProduct";


export default function ProductCard ({product}) {
    const tabs = [
        {
          title: "Описание",
          content: <React.Fragment>
                        <DescProduct description={product.description}></DescProduct>
                        <PriceProduct price={product.price} weight = {product.weight}></PriceProduct>
                    </React.Fragment>            
        },
        {
          title: "Характеристики",
          content: <SpecProduct specs={product.specifications}></SpecProduct>
        },
        {
            title: "Свойства",
            content: <SpecProduct specs={product.structure}></SpecProduct>
          },
      ];
    return (
        <StyledContainer>
            <Image maxWidth = {248} src={product.image}></Image>
            <div>
                <StyledTitleCard>{product.name}</StyledTitleCard>
                <Tabs tabs = {tabs}></Tabs>
            </div>
        </StyledContainer>
    )
}