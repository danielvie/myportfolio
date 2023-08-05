#import "Colors.typ": colors
#import "Config.typ": theme, spacingItems, br, brj

#let TitleRight(txt, theme: theme) = box(
    width: 100%,
    inset: (left: 10pt),
    stroke: (bottom: 0.8pt + colors.gray-400),
    rect(
        radius: (top:3pt),
        fill: theme,
        text(
            fill: rgb("#fff"),
            txt
        )
    )
)

#let ItemRight(title, text, theme: theme) = stack(
    spacing: 0.7em,
    TitleRight(title, theme: theme),
    par(justify: true)[#text]
)