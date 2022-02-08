import React, { useState } from "react";
import { StyledFormSection } from "./styled";
import {
    StyledForm,
    StyledFieldset,
    StyledLegend,
    StyledListCheckbox,
    StyledItemCheckbox,
    StyledCheckboxForm,
    StyledLabelForm,
    StyledInputAddress,
    StyledPrice,
    StyledPriceCounter,
    StyledFormButton
} from "../../../ui/form/styled";
import { ProductSwiper } from "../productList/styled";
import ProductCard from "../../../ui/productCard/productCard";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel, Scrollbar } from "swiper/core";
import "swiper/swiper-bundle.min.css";
import InformMessage from "../../../ui/outProduct/outProduct";

SwiperCore.use([Mousewheel, Pagination, Scrollbar]);



export default function FormSection({ products }) {
    const [price, setPrice] = useState(0);
    const [address, setAddress] = useState("");
    const [listProductId, setListProductId] = useState([]);
    const [swiperRef, setSwiperRef] = useState(null);


    const selectProducts = listProductId.map((id) =>
        products.find((product) => product.id === id)
    );

    const handleBuyClick = () => {
        // eslint-disable-next-line no-alert
        alert(`Спасибо за заказ, вы купили:\n${selectProducts.map(
            (product) => `${product.name} - ${product.price} руб.\n`
        )}
    Итого: ${price} руб.
    Доставка по адресу: ${address}.`);
    };

      const handleOnClickProduct = (value) => {
    if (!listProductId.includes(value)) {
      swiperRef.slideTo(value, 0);
    }}

    return products && products.length ? (
        <StyledFormSection>
            <StyledForm>
                <StyledFieldset>
                    <StyledLegend>Выберите продукты</StyledLegend>
                    <StyledListCheckbox>
                        {products.map((product) => (
                            <StyledItemCheckbox key={product.id}>
                                <StyledCheckboxForm id={product.id} onChange={
                                    (event) => {
                                        setPrice(product.price);
                                        setListProductId((listProductId) => [...listProductId, product.id])
                                        setPrice(price + product.price);
                                        handleOnClickProduct(product.id);
                                        if (!event.target.checked) {
                                            setPrice(price - product.price);
                                            setListProductId(listProductId.filter(item => item !== product.id))
                                        }
                                    }
                                }
                                ></StyledCheckboxForm>
                                <StyledLabelForm htmlFor={product.id}>{product.name}</StyledLabelForm>
                            </StyledItemCheckbox>
                        ))}
                    </StyledListCheckbox>
                </StyledFieldset>
                <StyledFieldset>
                    <StyledLegend>Сделать заказ</StyledLegend>
                    <StyledInputAddress
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}
                    ></StyledInputAddress>
                    <StyledPrice>Цена <br></br>
                        <StyledPriceCounter>{price} руб.</StyledPriceCounter>
                    </StyledPrice>
                    <StyledFormButton state={!(listProductId.length && address)} onClick={handleBuyClick}>Купить</StyledFormButton>
                </StyledFieldset>
            </StyledForm>
            <ProductSwiper
                onSwiper={setSwiperRef}
                spaceBetween={12}
                direction="vertical"
                slidesPerView="auto"
                scrollbar={{ draggable: true }}
                mousewheel
                pagination={{
                    type: "fraction"
                }}>
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <ProductCard product={product}></ProductCard>
                    </SwiperSlide>
                ))}
            </ProductSwiper>
        </StyledFormSection>
    ) : <InformMessage>Продукты были слишком вкусные и их разобрали</InformMessage>
};