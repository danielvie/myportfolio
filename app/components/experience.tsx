import ExperienceBlock from "./experience_block";
import ExperienceBullet from "./experience_bullet";

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
                    <ExperienceBullet>
                        - Designed software for the high-tech industry,
                        primarily embedded software developed in C++, Python and
                        C#.
                    </ExperienceBullet>
                    <ExperienceBullet>
                        - Implemented MBT (Model Based Testing) in Thermofisher,
                        this was integrated in the test pipelines and CI/CD for
                        better software quality.
                    </ExperienceBullet>
                    <ExperienceBullet>
                        - Collaborated with various teams to understand system
                        requirements, enabling accurate model descriptions and
                        tests reflective of real system behavior.
                    </ExperienceBullet>
                </ExperienceBlock>

                <ExperienceBlock
                    from="2012"
                    to="2021"
                    company="AVIBRAS"
                    city="São José dos Campos, Brazil"
                    role="Product Development Engineer"
                >
                    <ExperienceBullet>
                        - Responsible for the designed the guidance and control
                        system for the Brazilian guided rocket.
                    </ExperienceBullet>

                    <ExperienceBullet>
                        - Had constant interface with structure and aerodynamics
                        teams to develop a non-linear simulation in
                        MATLAB/SIMULINK to validate performance analysis and
                        control law design testing.
                    </ExperienceBullet>
                    <ExperienceBullet>
                        - Aided in procurement of GNC sensors & actuators,
                        ensuring alignment with project specifications and
                        performance constraints.
                    </ExperienceBullet>
                    <ExperienceBullet>
                        - Assisted Integration teams in Verification &
                        Validation processes for subsystems using Hardware in
                        the Loop (HIL) and SIMULINK simulations to emulate
                        flight scenarios.
                    </ExperienceBullet>
                    <ExperienceBullet>
                        - Undertook the role of a field engineer during product
                        development campaigns, focusing on mission planning,
                        flight performance analysis, data reduction, and
                        analysis.
                    </ExperienceBullet>
                    <ExperienceBullet>
                        - Created a Python tool that encapsulates a mathematical
                        model initially developed in Matlab/Simulink, transpiled
                        to C++ code, and then compiled into a Python library for
                        easy non-linear simulations and analysis. This tool is
                        designed for easy distribution to other users,
                        facilitating widespread use and collaboration.
                    </ExperienceBullet>
                </ExperienceBlock>

                <ExperienceBlock
                    from="2011"
                    to="2012"
                    company="INSTITUTE OF AERONAUTIC AND SPACE"
                    city="São José dos Campos, Brazil"
                    role="Researcher"
                >
                    <ExperienceBullet>
                        - Worked as a researcher at the Institute of Aeronautics
                        and Space, focusing on the Satellite Launch Vehicle.
                    </ExperienceBullet>
                    <ExperienceBullet>
                        - Developed an attitude controller for a spinning
                        second-stage vehicle to engage trajectory using ON-OFF
                        actuators.
                    </ExperienceBullet>
                    <ExperienceBullet>
                        - Created digital models for integration into Hardware
                        In The Loop (HIL) simulations of the launcher.
                    </ExperienceBullet>
                </ExperienceBlock>
            </div>
        </>
    );
}

export default Experience;
