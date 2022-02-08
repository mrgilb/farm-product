import React from "react";
import  {SignProduct, DescProduct, TitleCard } from "./styled"
import { Image } from "../../../elements";


export default function CardExample ({
    title,
    content,
    farmers,
    icon}) {
        return (
            <React.Fragment>
                <Image src = {icon} alt = "Icon" maxWidth = {56}></Image>
                <div>
                    <SignProduct IsFarmers = {farmers}>{farmers ? "Фермерские продукты" :  "Магазинные продукты"}</SignProduct>
                    <TitleCard>{title}</TitleCard>
                </div>
                <DescProduct>{content}</DescProduct>
            </React.Fragment>
        )
  
}