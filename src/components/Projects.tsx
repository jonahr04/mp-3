import Calculator from "./Calculator.tsx";
import Main from "./Main.tsx";

export default function Projects() {
    return (
        <Main>
            <h1>Projects</h1>
            {/* personal projects */}
            <ul>
                <li>Rezzy
                    <ul>
                        <li>Multi-agent pipeline for AI resume tailoring</li>
                    </ul>
                </li>
                <li>The Task App
                    <ul>
                        <li>AI task manager with an Eisenhower Matrix and calendar tools</li>
                    </ul>
                </li>
                <li>InternAtlas
                    <ul>
                        <li>Job board that searches many company internship listings</li>
                    </ul>
                </li>
                <li>The Study Buddy
                    <ul>
                        <li>AI study platform that turns notes into flashcards</li>
                    </ul>
                </li>
                <li>Calculator
                    <ul>
                        <li>JavaScript calculator for addition, subtraction, multiplication, division, and power</li>
                    </ul>
                </li>
            </ul>
            <Calculator />
        </Main>
    );
}
