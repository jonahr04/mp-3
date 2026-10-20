import Main from "./Main.tsx";

export default function Education() {
    return (
        <Main>
            <h1>Education</h1>
            {/* school and classes */}
            <ul>
                <li>Boston University, 2022-2027, BA/MS Computer Science, Minor in Economics
                    <ul>
                        <li>Related Coursework: Software Engineering, Machine Learning, Distributed Systems, Analysis of Algorithms, Natural Language Processing, Foundations of Data Science, Full-Stack Development</li>
                    </ul>
                </li>
                <li>Thayer Academy High School, 2018-2022
                    <ul>
                        <li>Java</li>
                        <li>Data Structures</li>
                        <li>Film</li>
                        <li>Jazz Combo</li>
                    </ul>
                </li>
            </ul>
        </Main>
    );
}
