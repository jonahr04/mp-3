import { Link } from "react-router";
import styled from "styled-components";

const NavBar = styled.nav`
    width: 30%;
    background-color: #5a6fa8;

    @media screen and (max-width: 750px) {
        width: 100%;
    }
`;

const NavList = styled.ul`
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 750px) {
        flex-direction: row;
    }
`;

const NavItem = styled.li`
    text-align: center;
    margin: 10%;

    @media screen and (max-width: 750px) {
        margin: 2%;
    }
`;

const NavLink = styled(Link)`
    color: #ffffff;
    text-decoration: none;
    font-size: calc(2px + 1.5vw);

    @media screen and (max-width: 750px) {
        font-size: calc(14px + 0.4vw);
    }
`;

export default function Nav() {
    return (
        <NavBar>
            <NavList>
                <NavItem><NavLink to="/">Home</NavLink></NavItem>
                <NavItem><NavLink to="/education">Education</NavLink></NavItem>
                <NavItem><NavLink to="/experience">Experience</NavLink></NavItem>
                <NavItem><NavLink to="/skills">Skills</NavLink></NavItem>
                <NavItem><NavLink to="/projects">Projects</NavLink></NavItem>
                <NavItem><NavLink to="/interests">Interests</NavLink></NavItem>
            </NavList>
        </NavBar>
    );
}
