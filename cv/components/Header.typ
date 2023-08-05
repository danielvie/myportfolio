#import "Colors.typ": colors

#let titleSize = 4.2em

#let TitleName = box(
    height: 60pt,
    inset: (top: 10pt),
    stack(
        spacing: 1em,
        stack(
            dir: ltr,
            spacing: 1em,
            text(
                fill: white,
                size: titleSize,
                [Daniel]
            ),
            text(
                fill: colors.gray-300,
                weight: "bold",
                size: titleSize,
                [Vieira]
            ),
        ),
        text(
            fill: colors.gray-300,
            size: 1.5em,
            [Control System Engineer]
        )
    )
)

#let Header = box(
    width: 100%,
    inset: (bottom: 3pt, top: 3pt, left: 160pt),
    fill: rgb("404040ff"),
    align(left)[ 
        #TitleName
    ]
)