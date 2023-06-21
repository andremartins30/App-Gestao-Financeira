import styled from "styled-components"
import headerBackground from "./Header-background.png"

export const Container = styled.div`
    height: 230px;
    text-align: center;
    background-image: url(${headerBackground});
    background-size: cover;
    background-position: 50% 35%;
    background-repeat: no-repeat;
`;

export const Header = styled.h1`
    Font-size: 45px
`;

export const Title = styled.div`
    padding-top: 35px;
    color: #000;
`;