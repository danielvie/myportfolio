import ExperienceBlock from "./experience_block";
import TextParagraph from "./text_paragraph";

function Experience() {
    return (
        <>
            <div className="">
                <ExperienceBlock
                    from="2021"
                    to="current"
                    company="ICT Group"
                    city="Eindhoven, Netherlands"
                    role="Software Designer"
                >
                    <TextParagraph>
                        - Designed software for the high-tech industry,
                        primarily embedded software developed in C++, Python and
                        C#.
                    </TextParagraph>
                    <TextParagraph>
                        - Implemented MBT (Model Based Testing) in Thermofisher,
                        this was integrated in the test pipelines and CI/CD for
                        better software quality.
                    </TextParagraph>
                    <TextParagraph>
                        - Collaborated with various teams to understand system
                        requirements, enabling accurate model descriptions and
                        tests reflective of real system behavior.
                    </TextParagraph>
                </ExperienceBlock>

                <ExperienceBlock
                    from="2012"
                    to="2021"
                    company="AVIBRAS"
                    city="São José dos Campos, Brazil"
                    role="Product Development Engineer"
                >
                    <TextParagraph>
                        - Responsible for the design of the guidance and control
                        system for the Brazilian guided rocket.
                    </TextParagraph>

                    <TextParagraph>
                        - Had constant interface with structure and aerodynamics
                        teams to develop a non-linear simulation in
                        MATLAB/SIMULINK to validate performance analysis and
                        control law design testing.
                    </TextParagraph>
                    <TextParagraph>
                        - Aided in procurement of GNC sensors & actuators,
                        ensuring alignment with project specifications and
                        performance constraints.
                    </TextParagraph>
                    <TextParagraph>
                        - Assisted Integration teams in Verification &
                        Validation processes for subsystems using Hardware in
                        the Loop (HIL) and SIMULINK simulations to emulate
                        flight scenarios.
                    </TextParagraph>
                    <TextParagraph>
                        - Undertook the role of a field engineer during product
                        development campaigns, focusing on mission planning,
                        flight performance analysis, data reduction, and
                        analysis.
                    </TextParagraph>
                    <TextParagraph>
                        - Created a Python tool that encapsulates a mathematical
                        model initially developed in Matlab/Simulink, transpiled
                        to C++ code, and then compiled into a Python library for
                        easy non-linear simulations and analysis. This tool is
                        designed for easy distribution to other users,
                        facilitating widespread use and collaboration.
                    </TextParagraph>
                </ExperienceBlock>

                <ExperienceBlock
                    from="2011"
                    to="2012"
                    company="INSTITUTE OF AERONAUTIC AND SPACE"
                    city="São José dos Campos, Brazil"
                    role="Researcher"
                >
                    <TextParagraph>
                        - Worked as a researcher at the Institute of Aeronautics
                        and Space, focusing on the Satellite Launch Vehicle.
                    </TextParagraph>
                    <TextParagraph>
                        - Developed an attitude controller for a spinning
                        second-stage vehicle to engage trajectory using ON-OFF
                        actuators.
                    </TextParagraph>
                    <TextParagraph>
                        - Created digital models for integration into Hardware
                        In The Loop (HIL) simulations of the launcher.
                    </TextParagraph>
                </ExperienceBlock>
            </div>
        </>
    );
}

export default Experience;
