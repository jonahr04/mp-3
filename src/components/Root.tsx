import { Route, Routes, useLocation } from "react-router";
import styled from "styled-components";
import Credits from "./Credits.tsx";
import Education from "./Education.tsx";
import Experience from "./Experience.tsx";
import Footer from "./Footer.tsx";
import Header from "./Header.tsx";
import Home from "./Home.tsx";
import Interests from "./Interests.tsx";
import Nav from "./Nav.tsx";
import Projects from "./Projects.tsx";
import Skills from "./Skills.tsx";

const PageWrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 750px) {
        width: 95%;
    }
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex: 1;

    @media screen and (max-width: 750px) {
        flex-direction: column;
    }
`;

export default function Root() {
    // full url, otherwise every link stays on home
    const location = useLocation();

    return (
        <PageWrapper>
            <Header />
            <Container>
                <Nav />
                <Routes location={location}>
                    <Route path="/" element={<Home />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/interests" element={<Interests />} />
                    <Route path="/credits" element={<Credits />} />
                </Routes>
            </Container>
            <Footer />
        </PageWrapper>
    );
}
