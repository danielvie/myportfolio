#import "components/Colors.typ": colors
#import "components/Config.typ": theme, br, brj
#import "components/Header.typ": Header
#import "components/Sidebar.typ": Sidebar
#import "components/WorkExperience.typ": WorkExperience
#import "components/Education.typ": Education

#set page(
    paper: "a4",
    margin: (
        left: 0mm, 
        right: 0mm, 
        top: 0mm, 
        bottom: 0mm
    ),
)

#set text(size: 8pt)
#set text(font: ("FiraCode NF", "FiraCode Nerd Font"))

#let Content = stack(
    spacing: 2.0em,
    WorkExperience,
    Education
)

#let Main = grid(
    columns: (150pt, auto),
    box(
        fill: colors.gray-100,
        height: 100%,
        inset: (top: 50pt, left: 10pt, right: 10pt),
        Sidebar
    ),
    box(
        inset: (left: 10pt, right: 35pt, top: 10pt),
        Content,
    )
)

#stack(
    Header,
    Main
)

#place(
    top + left,
    dx: 25pt,
    dy: 10pt,
    image("img/eu.png", height: 100pt)
)