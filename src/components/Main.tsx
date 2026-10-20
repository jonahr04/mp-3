import type { ReactNode } from "react";
import styled from "styled-components";

const StyledMain = styled.main`
    width: 70%;
    background-color: #e8eef8;
    padding: 1%;
    font-size: calc(2px + 1.5vw);
    text-align: center;

    li {
        margin: 25px 0;
        padding: 2%;
        border-left: 5px solid #667db8;
        background-color: #ffffff;
        text-align: left;
    }

    li li {
        margin: 8px 0;
        border: 2px dotted #667db8;
    }

    @media screen and (max-width: 1000px) {
        width: 100%;
    }

    @media screen and (max-width: 750px) {
        padding: 3%;
        flex: 1;
        font-size: calc(14px + 0.4vw);
    }
`;

export default function Main(props: { children: ReactNode }) {
    return <StyledMain>{props.children}</StyledMain>;
}
