import Main from "./Main.tsx";

export default function Experience() {
    return (
        <Main>
            <h1>Experience</h1>
            {/* jobs, newest first */}
            <ul>
                <li>MLB — Software Engineer Intern, Test Engineering
                    <ul>
                        <li>Developed and maintained automated test frameworks using Python and Selenium to ensure the reliability and performance of MLB's web applications.</li>
                        <li>Collaborated with cross-functional teams to identify and resolve complex software issues, improving system stability and user experience.</li>
                        <li>Implemented new testing strategies and best practices, reducing defects and enhancing the overall quality of MLB's software products.</li>
                    </ul>
                </li>
                <li>PanelClaw — Front-End Development Intern
                    <ul>
                        <li>Developed and maintained the front-end of PanelClaw's web application using React, TypeScript, and Tailwind CSS.</li>
                        <li>Collaborated with cross-functional teams to design and implement new features, improving the user experience and functionality of PanelClaw's platform.</li>
                    </ul>
                </li>
                <li>ClearWatt — Software Development Intern
                    <ul>
                        <li>Developed and maintained the front-end of ClearWatt's web application using React, TypeScript, and Tailwind CSS.</li>
                        <li>Collaborated with cross-functional teams to design and implement new features, improving the user experience and functionality of ClearWatt's platform.</li>
                        <li>Implemented new testing strategies and best practices, reducing defects and enhancing the overall quality of ClearWatt's software products.</li>
                    </ul>
                </li>
            </ul>
        </Main>
    );
}
