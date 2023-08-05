#import "ItemRight.typ": ItemRight
#import "Config.typ": theme, spacingItems, br, brj

#let TitleEducation(date, school, city) = stack(
    spacing: 8pt,
    text(
        size: 10pt,
        weight: "bold",
        school
    ),
    text(
        size: 7pt,
        weight: "bold",
        [(#date), (#city)]
    )
)

#let ItemEducation(date, school, city, title, desc) = stack(
    spacing: 1.2em,
    TitleEducation(date, school, city),
    text(
        size: 9pt,
        title
    ),
    par(justify: true)[#desc]
)

#let Education = ItemRight(
    "education",
    stack(
        spacing: spacingItems,
        ItemEducation(
            "2019 - Current",
            "Aeronautics Institute of Technology – ITA",
            "São José dos Campos, BRAZIL",
            [Ph.D.: Systems and Control Engineering],
            [Robust Control of Linear Systems with Switched Actuators Subjected to #br Dwell-Time Constraints],
        ),
        ItemEducation(
            "2012 - 2015",
            "National Institute for Space Research - INPE",
            "São José dos Campos, BRAZIL",
            [Master: Space Mechanics and Control],
            [Attitude Control of a Vehicle at High Rotation Speed on a Torque-Free #br environment ],
        ),
        ItemEducation(
            "2004 - 2010",
            "Federal University of Uberlândia - UFU",
            "Uberlândia, BRAZIL",
            [Bachelor: Mechatronic Engineering],
            [Mapping and Automation of Topograph Surfaces using 2d Coordinate System],
        ),
    )
)