import styled from "styled-components";

const Head = styled.header`
    background-color: #667db8;
    color: #ffffff;
    padding: 0 1%;
    text-align: left;

    @media screen and (max-width: 750px) {
        text-align: center;
    }
`;

const Title = styled.h1`
    font-size: calc(16px + 1vw);
`;

export default function Header() {
    return (
        <Head>
            <Title>Jonah Rothman</Title>
            <p>My Online Resume</p>
        </Head>
    );
}
