#import "Colors.typ": colors
#import "Config.typ": theme

#let Languages =  grid(
    columns: (1fr, 1fr),
    box(
        stack(
            spacing: 8pt,
            [Portuguese:],
            [English:],
            [French:],
        ),
    ),
    box(
        align(left,
            stack(
                spacing: 8pt,
                text(weight: "bold", [mother tongue]),
                stack(
                    dir: ltr,
                    spacing: 13pt,
                    circle(radius: 3pt, fill: theme),
                    circle(radius: 3pt, fill: theme),
                    circle(radius: 3pt, fill: theme),
                    circle(radius: 3pt, fill: colors.gray-500),
                ),
                stack(
                    dir: ltr,
                    spacing: 13pt,
                    circle(radius: 3pt, fill: theme),
                    circle(radius: 3pt, fill: colors.gray-500),
                    circle(radius: 3pt, fill: colors.gray-500),
                    circle(radius: 3pt, fill: colors.gray-500),
                ),
            )
        )
    )
)