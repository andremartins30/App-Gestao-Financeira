import styled from "styled-components"
import headerBackground from "./Header-background.png"

export const Container = styled.div`
    height: 250px;
    text-align: center;
    background-image: url(${headerBackground});
    background-size: cover;
    background-position: 50% 25%;
    background-repeat: no-repeat;
`;

export const Header = styled.h1``;

export const Title = styled.div`
    padding-top: 35px;
    color: #000;
`;