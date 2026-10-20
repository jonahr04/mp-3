import Main from "./Main.tsx";

export default function Skills() {
    return (
        <Main>
            <h1>Skills</h1>
            <ul>
                <li>Languages
                    <ul>
                        <li>Python, Java, Kotlin, Swift, JavaScript, TypeScript, SQL, C/C++, HTML/CSS, OCaml</li>
                    </ul>
                </li>
                <li>Frameworks
                    <ul>
                        <li>React, Next.js, Node.js, Express.js, FastAPI, React Native, TailwindCSS</li>
                    </ul>
                </li>
                <li>Cloud and Databases
                    <ul>
                        <li>Azure, AWS, Docker, PostgreSQL, Supabase, MongoDB Atlas, Firebase, Vercel, DigitalOcean</li>
                    </ul>
                </li>
                <li>Testing and DevOps
                    <ul>
                        <li>Playwright, Cypress, Selenium, Jest, Maestro, GitHub Actions, Azure DevOps, Git</li>
                    </ul>
                </li>
                <li>AI
                    <ul>
                        <li>LangGraph, LangChain, OpenAI API, PyTorch, pandas</li>
                    </ul>
                </li>
            </ul>
        </Main>
    );
}
