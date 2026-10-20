import { Link } from "react-router";
import styled from "styled-components";

const Foot = styled.footer`
    background-color: #667db8;
    color: #ffffff;
    padding: 0 1%;
    text-align: left;
`;

const CreditLink = styled(Link)`
    color: #ffffff;
`;

export default function Footer() {
    return (
        <Foot>
            <p>All rights reserved <CreditLink to="/credits">Credits</CreditLink> &#169;</p>
        </Foot>
    );
}
