#import "Colors.typ": colors
#import "Languages.typ": Languages
#import "Contatos.typ": Contatos
#import "Config.typ": theme
#import "ItemLeft.typ": ItemLeft

#let Sidebar = stack(
    spacing: 2.0em,
    ItemLeft(
        "about me",
        [
            Hi, I'm Daniel!
            I am a control systems engineer with over 10 years of experience in aerospace 
            industry working with control, guidance, navigation, Model Based Design
            using Matlab/Simulink and I have solid programming skills in C/C++/Python
            for embedded systems.  
            I am passionate about innovating engineering solutions and
            thrive in dynamic environments surrounded by enthusiastic
            individuals.
        ]
    ),
    ItemLeft(
        "personal",
        stack(
            spacing: .5em,
            "Daniel Vieira",
            "Brazil",
            "1985",
        )
    ),
    ItemLeft(
        "skills",
        stack(
            spacing: .5em,
            ("Control System", "Model Based Design", "System Engineering", "Software Design").join(" • "),
        )
    ),
    ItemLeft(
        "programming",
        stack(
            spacing: .5em,
            ("Matlab/Simulink", "Python", "C/C++", "C\#", "Typescript", "Git", "Linux").join(" • "),
        )
    ),
    ItemLeft(
        "engineering",
        stack(
            spacing: .5em,
            ("Control Theory", "Flight Dynamics", "Orbital Mechanics", "Model Based Design", "Hardware in The Loop", "Data Analysis", "Mathematical Modeling").join(" • "),
        )
    ),
    ItemLeft(
        "hobbies",
        stack(
            spacing: .5em,
            ("Cycling", "Running", "Animes", "Paragliding", "Things that fly").join(" • "),
        )
    ),
    ItemLeft(
        "languages",
        Languages
    ),
    Contatos
)
