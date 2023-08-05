#import "Colors.typ": colors
#import "Config.typ": theme, spacingItems, br, brj
#import "ItemRight.typ": ItemRight

#let TitleWork(date, company, role, city) = stack(
    spacing: 8pt,
    text(
        size: 10pt,
        weight: "bold",
        [#company, #role]
    ),
    text(
        size: 7pt,
        weight: "bold",
        [(#date), (#city) ],
    ),
)

#let ItemWork(date, company, role, city, desc) = stack(
    spacing: 1.2em,
    TitleWork( date, company, role, city),
    par(leading: 7pt, justify: true)[#desc],
)

#let WorkExperience = ItemRight(
    "work experience",
    stack(
        spacing: spacingItems,
        ItemWork(
            "2021 - current",
            "ICT Group",
            "Software Designer",
            "Eindhoven, NETHERLANDS",
            [
                \- Designed software for the high-tech industry, primarily embedded software developed in C++, Python and C\# #br
                \- Implemented MBT (Model Based Testing) in Thermofisher, this was integrated in the test pipelines and CI/CD for better software quality. #br
                \- Collaborated with various teams to understand system requirements, enabling accurate model descriptions and tests reflective of real system behavior. #br
            ],
        ),
        ItemWork(
            "2012 - 2021",
            "AVIBRAS",
            "Product development Engineer",
            "São José dos Campos, BRAZIL",
            [
                \- Responsible for the design of the guidance and control system for the Brazilian guided rocket. #br
                \- Interfaced with structure and aerodynamics teams to develop a non-linear simulation in MATLAB/SIMULINK to validate performance analysis and control law design testing. #br
                \- Aided in procurement of GNC sensors & actuators, ensuring alignment with project specifications and performance constraints. #br
                \- Assisted Integration teams in Verification & Validation processes for subsystems using Hardware in the Loop (HIL) and SIMULINK simulations to emulate flight scenarios. #br
                \- Undertook the role of a field engineer during product development campaigns, focusing on mission planning, flight performance analysis, data reduction, and analysis. #br
                \- Created a Python tool that encapsulates a mathematical model initially developed in Matlab/Simulink, transpiled to C++ code, and then compiled into a Python library for easy non-linear simulations and analysis. This tool is designed for easy distribution to other users, facilitating widespread use and collaboration. #br
            ]
        ),
        ItemWork(
            "2011 - 2012",
            "INSTITUTE OF AERONAUTIC AND SPACE",
            "Researcher",
            "São José dos Campos, BRAZIL",
            [
                \- Worked as a researcher at the Institute of Aeronautics and Space, focusing on the Satellite Launch Vehicle. #br
                \- Developed an attitude controller for a spinning second-stage vehicle to engage trajectory using ON-OFF actuators. #br
                \- Created digital models for integration into Hardware In The Loop (HIL) simulations of the launcher. #br
            ]
        ),
    )
)