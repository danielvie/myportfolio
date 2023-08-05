import ProjectBlock from "./project_block";
import { RxDotFilled } from "react-icons/rx";
import Paragraph from "./paragraph";

function Projects() {
    return (
        <>
            <div className="my-6 grid grid-cols-1 items-start gap-4 md:grid-cols-2">
                <ProjectBlock
                    from="04-2022"
                    to="Current"
                    organization="Thermo Fisher"
                    project="Model Based Testing"
                    function="Software Designer"
                    keywords="Model-Based Testing, Axini, Digital Twin"
                >
                    <Paragraph>
                        My background and experience with Model-Based Design
                        gave me the tools to work on innovation projects in ICT
                        that implements Model-Based Testing in the High Tech
                        industry domain. Then I joined the team that is applying
                        Model-Based Testing inside of Thermo Fisher to test the
                        software that is embedded in their microscopes.
                    </Paragraph>
                    <Paragraph>
                        My role is to develop models using Axini Model Language
                        that describe the system under test and also provide
                        infrastructure for connecting the embedded systems to
                        the Model Based Testing tool. This model represents the
                        relationship and relations of the system so the Axini
                        Model Language can generate test cases and run them to
                        validate the requirements of the implemented code and
                        the infrastructure is mostly composed of C# and C++
                        code.
                    </Paragraph>
                    <Paragraph>
                        I often discuss with several teams to understand their
                        need and requirements so that the behavior implemented
                        in the model represents the system. Different systems
                        have different needs, especially when connecting them to
                        the testing tools.
                    </Paragraph>
                    <Paragraph>
                        Results are showing that Model-Based Testing helps the
                        teams to build more robust systems, thinking of the
                        system in a Model oriented way is also increasing the
                        level of the discussions on how the systems should
                        behave and how it should relate with the requirements.
                    </Paragraph>
                </ProjectBlock>

                <ProjectBlock
                    from="11-2021"
                    to="07-2022"
                    organization="ICT Group"
                    project="ICT Hightech Centre of Excellence"
                    function="Software Designer"
                    keywords="Model-Based Testing, Axini, Digital Twin"
                >
                    <Paragraph>
                        Centre of excellence is a branch of work in ICT that
                        explores innovative solutions for high-tech industries.
                    </Paragraph>
                    <Paragraph>
                        I worked on the team exploring Model-Based Testing, a
                        solution that describes the behavior of the System Under
                        Test and creates automatically tests for this model.
                    </Paragraph>
                    <Paragraph>
                        My tasks were to model the behavior of a sorting line of
                        a concept factory using the Model-Based Testing tool
                        Axini and integrate the models with the Digital Twin of
                        the factory.
                    </Paragraph>
                </ProjectBlock>

                <ProjectBlock
                    from="11-2021"
                    to="04-2022"
                    organization="ASML"
                    project="YieldStar"
                    function="Software Designer"
                    keywords="ASML, CARM, MAPS files, ClearCase, Linux VDI"
                >
                    <Paragraph>
                        I worked on a team in ASML that is was responsible for
                        the migration of a software facility (CARM) to a new
                        product (Yieldstar). The Yieldstar is the metrology tool
                        from ASML that uses the knowledge of the scanner to
                        perform measurements that correct and optimize the
                        process windows to improve volume manufacturing, and the
                        CARM are the software facilities to access and control
                        the hardware.
                    </Paragraph>
                    <Paragraph>
                        My tasks on the team were to integrate and update the
                        MAPS files used to describe the networks used to
                        communicate with the sensors and actuators of the
                        Yieldstar system and to do integration tests assert the
                        the system behaves as expected.
                    </Paragraph>
                    <Paragraph>
                        The MAPS files related tasks were completely delivered
                        and integrated into the baseline. Working with this team
                        allowed me to get into the ASML context and use the
                        tools of their workflow.
                    </Paragraph>
                </ProjectBlock>

                <ProjectBlock
                    from="01-2019"
                    to="08-2021"
                    organization="AVIBRAS"
                    project="Integration of the Virtual Environment Framework"
                    function="Product Development Engineer"
                    keywords="MATLAB, SIMULINK, Virtual Missile, RealTime, Hardware In The Loop, Model Based Design"
                >
                    <Paragraph>
                        A few small teams in Avibras developed and improved the
                        main models for the MATLAB/SIMULINK environment, but
                        there were models of subsystems that were still being
                        duplicated in different teams, generating different
                        versions of them. The teams decided to create a unified
                        virtual environment with a defined way to create and
                        integrate models called Virtual Missile. That way, the
                        team with the best knowledge of the model can create it
                        and integrate it into the Virtual Missile, facilitating
                        the communication of the studies and results of each
                        group.
                    </Paragraph>
                    <Paragraph>
                        I worked as an integrator of the project bridging the
                        System Engineering team that was developing the Virtual
                        Missile and Product Engineering that uses and
                        collaborates with the environment.
                    </Paragraph>
                    <Paragraph>
                        My initial activities in the project were to match the
                        Virtual Missile and the solution that was already
                        running, making the Virtual Missile compatible with the
                        Hardware In The Loop that was testing the devices and
                        was based on another MATLAB/SIMULINK environment.
                    </Paragraph>
                    <Paragraph>
                        After that, I was responsible to teach and support the
                        product engineers on how to create their models using
                        the defined rules and standards of the Virtual Missile.
                    </Paragraph>
                    <Paragraph>
                        As a result, the Virtual Missile engaged more teams to
                        contribute to the virtual environment, reducing the
                        number of duplicated models and further unifying the
                        study case and results of the teams. The analyses of the
                        team had more standards and were easier to reproduce,
                        resulting in a gain of efficiency of the teams.
                    </Paragraph>
                    <Paragraph>
                        One thing that had room to grow in the project is that,
                        in the first stage, the main focus was to give the user
                        a tool so he would be able to get the answers he wanted
                        from a given reproducible scenario. But the user
                        experience of the Virtual Missile was not the best it
                        could be, making it difficult for a user that is not
                        used to the environment yet. A better user experience
                        would make the use of the Virtual Missile more
                        enjoyable.
                    </Paragraph>
                </ProjectBlock>

                <ProjectBlock
                    from="08-2012"
                    to="08-2019"
                    organization="AVIBRAS"
                    project="Guidance and Control System for the Guided Rocket SS-40G"
                    function="Product Development Engineer"
                    keywords="MATLAB, SIMULINK, Control, Guidance, INS, Field Test"
                >
                    <Paragraph>
                        Avibras needed to develop a guided rocket based on a
                        standard rocket from their ASTROS rockets. With this,
                        Avibras could offer a product with better performance
                        and more consistency in the results with few collateral
                        damage.
                    </Paragraph>
                    <Paragraph>
                        My role was to design the Control and Guidance laws and
                        then generate the code embed on the Guided Rocket. It
                        was a spined supersonic rocket controlled by aerodynamic
                        surfaces and measuring its position with an INS
                        (Inertial Navigation System) assisted with GPS. The
                        mission is to hit a pre-defined target with a maximum
                        deviation inferior to half of the standard rocket.
                    </Paragraph>
                    <Paragraph>
                        My main activities were to work with the MATLAB/SIMULINK
                        environment and create digital models of the rocket,
                        design control laws for its autopilot, and guidance laws
                        that computed the correction command necessary to guide
                        the rocket towards the target.
                    </Paragraph>
                    <Paragraph>
                        To do this, the activities in the project also involved:
                    </Paragraph>
                    <Paragraph>
                        <ul className="ml-5">
                            <li className="">
                                <div className="inline-block">
                                    <RxDotFilled />
                                </div>
                                Work with the actuator team, so that the digital
                                model represents the physical system.
                            </li>
                            <li>
                                <div className="inline-block">
                                    <RxDotFilled />
                                </div>
                                Discuss with the INS manufacturer and help them
                                fit their solution to the dynamics of the
                                rocket.
                            </li>
                            <li>
                                <div className="inline-block">
                                    <RxDotFilled />
                                </div>
                                Assist with the integration and testing teams.
                            </li>
                            <li>
                                <div className="inline-block">
                                    <RxDotFilled />
                                </div>
                                Analyze the results of the field tests by
                                comparing the digital models with the actual
                                flight data and report the results.
                            </li>
                        </ul>
                    </Paragraph>
                    <Paragraph>
                        The result was a guided rocket that corrected the
                        trajectory and reduced the dispersion to almost a
                        quarter of the dispersion of the standard ballistic
                        rocket.
                    </Paragraph>
                </ProjectBlock>

                <ProjectBlock
                    from="01-2015"
                    to="12-2015"
                    organization="AVIBRAS"
                    project="Development of a Python environment for fast prototype and analysis"
                    function="Product Development Engineer"
                    keywords="MATLAB, SIMULINK, C++, PYTHON, DYNAMIC SIMULATION"
                >
                    <Paragraph>
                        The 6 Degrees Of Freedom environment developed in
                        MATLAB/SIMULINK was the main source of results for study
                        cases related to the guided rocket. But there was a
                        problem that it was a solution that was difficult to
                        scale due to the fact that each new user needs a MATLAB
                        license in his computer with the appropriated toolboxes.
                    </Paragraph>
                    <Paragraph>
                        I was assigned the task of finding a solution to this
                        problem in a way that all teams could use the same base
                        simulation so their results could be directly comparable
                        with the results of other teams.
                    </Paragraph>
                    <Paragraph>
                        In this activity, I developed an environment in Python
                        that uses the automatic C++ code generated from the
                        source modeling tool in MATLAB to create a library that
                        was imported in Python.
                    </Paragraph>
                    <Paragraph>
                        This Python environment generated the same results as
                        the MATLAB environment and it was easily scalable for
                        new users. The Python environment also had tools to
                        generate graphics of the results and to analyze large
                        sets of data. With that, more new users were able to
                        create their own study, analyze the results and have
                        richer discussions with other teams.
                    </Paragraph>
                </ProjectBlock>

                <ProjectBlock
                    from="08-2012"
                    to="12-2014"
                    organization="AVIBRAS"
                    project="6 Degrees of Freedom environment for Rocket system simulation"
                    function="Product Development Engineer"
                    keywords="MATLAB, SIMULINK, C++, PYTHON, DYNAMIC SIMULATION"
                >
                    <Paragraph>
                        I was starting as an engineer at Avibras in a team
                        assigned to design a new product. The goal was to use a
                        standard ballistic rocket of the ASTROS system and
                        convert it into a guided rocket capable of correcting
                        its trajectory to improve performance and increase
                        strategic application.
                    </Paragraph>
                    <Paragraph>
                        I worked as a Model-Based Design engineer, studying the
                        dynamics of the vehicle, interfacing with the structure
                        and aerodynamics teams, and planning an environment for
                        rapid simulation and testing. The main team consisted of
                        3 more members, with 2 focused on aerodynamics and 1
                        developing the Hardware in the Loop environment.
                    </Paragraph>
                    <Paragraph>
                        I was responsible for creating a model in
                        MATLAB/SIMULINK that described the characteristics of
                        the ASTROS rockets. The starting point of the program
                        was a translation of the legacy code written in HTBASIC
                        from AVIBRAS that was tested and validated for their
                        rockets.
                    </Paragraph>
                    <Paragraph>
                        The result was a code with the characteristics of the
                        legacy code that could be integrated with a modern
                        workflow improving the tasks of simulating and analyzing
                        results. With the model in MATLAB/SIMULINK, it was
                        possible to automatically convert the models into C++ to
                        be integrated with the Hardware In The Loop without
                        rewriting the code and also provided an efficient
                        environment to test the control and guidance laws.
                    </Paragraph>
                </ProjectBlock>
            </div>
        </>
    );
}

export default Projects;
