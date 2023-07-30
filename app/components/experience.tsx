import ExperienceBlock from "./experience_block";

function Experience() {
    return (
        <>
            <ExperienceBlock
                from="2012"
                to="2021"
                company="AVIBRAS"
                role="Product Development Engineer"
            >
                As a Software Designer, I am responsible for designing software
                in the scope of High Tech industry. I was initially assigned to
                the ASML team integrating a suite of software facilities in
                their YieldStar project, integrating and testing new and updated
                networks into the running code. My background and experience
                with Model-Based Design gave me the tools to work in the
                innovation projects in ICT that is implementing Model-Based
                Testing in the High Tech industry domain, which allowed me to
                join the team that is applying Model-Based Testing inside of
                Thermo Fisher to test the software that is embedded in their
                microscopes. My role is to develop models that describe the
                behavior of the systems under test using the Axini Model
                Language, this model then generates automatic tests cases based
                on the relationships and behaviors of the system. In this role I
                have to discuss with several team about their requirements and
                how to best describe their system so the models can reflect the
                real behavior being tested.
            </ExperienceBlock>
            <ExperienceBlock
                from="2012"
                to="2021"
                company="AVIBRAS"
                role="Product Development Engineer"
            >
                As a Product Development Engineer, I was responsible for
                designing the guidance and control system for the guided rocked.
                For that, I worked with the structure and aerodynamics teams to
                develop a non-linear simulation in MATLAB/SIMULINK to compute
                performance analysis and test the control law design. As a
                control engineer, I supported the procurement of GNC sensors &
                actuators, matching them with the project specifications. I
                supported the Integration teams with the Hardware in the Loop
                for their process of Verification & Validation of the subsystems
                using a SIMULINK simulation to emulate the flight scenarios. I
                worked as a field engineer in product development campaigns with
                a focus on mission planning, flight performance analysis, data
                reduction, and analysis.
            </ExperienceBlock>

            <ExperienceBlock
                from="2011"
                to="2012"
                company="INSTITUTE OF AERONAUTIC AND SPACE"
                role="Researcher"
            >
                At the Institute of Aeronautics and Space, I worked as a
                researcher on the Satellite Launch Vehicle, developing an
                attitude controller for a spinning second stage vehicle to
                engage trajectory using ON-OFF actuators developing digital
                models to be integrated into the Hardware In The Loop
                simulations of the launcher.
            </ExperienceBlock>
        </>
    );
}

export default Experience;
