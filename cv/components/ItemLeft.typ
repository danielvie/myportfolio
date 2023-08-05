#import "Colors.typ": colors
#import "Config.typ": theme, spacingItems, br, brj

#let TitleLeft(txt, theme: theme) = box(
    width: 100%,
    align(right,
        rect(
            radius: 1pt,
            fill: theme,
            text(
                fill: rgb("#fff"),
                txt
            )
        )
    )
)

#let ItemLeft(title, txt, theme: theme) = stack(
    spacing: 0.7em,
    TitleLeft(title, theme: theme),
    align(right)[#txt]
)