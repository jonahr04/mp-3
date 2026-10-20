import styled from "styled-components";
import Main from "./Main.tsx";

const Photo = styled.img`
    max-width: 80%;
    margin-top: 50px;
    margin-bottom: 25px;

    @media screen and (max-width: 750px) {
        max-width: 100%;
    }
`;

export default function Home() {
    return (
        <Main>
            <h1>Home</h1>
            {/* my picture */}
            <Photo src="/jonah-picture.jpg" alt="Jonah Rothman" />
            {/* intro */}
            <p>My name is Jonah Rothman I am a BA/MS student at Boston University studying Computer Science and I also have a minor in Economics. I enjoy web develeopment, creating projects, and learning more about the field of AI. Outside of my course work I enjoy movies and theater and I try to go out to the theater as much as I can!</p>
        </Main>
    );
}
