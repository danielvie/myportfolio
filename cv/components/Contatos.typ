
#let Contato(icon, txt) = stack(
    dir: ltr,
    spacing: 0.4em,
    image("../icons/" + icon + ".svg", height: 10pt),
    box(height: 10pt, inset: (top: 1pt), txt)
)

#let ContatoLink(icon, text, addr) = stack(
    dir: ltr,
    spacing: 0.4em,
    image("../icons/" + icon + ".svg", height: 10pt),
    box(height: 10pt, stroke: (bottom:1pt), inset:(bottom:2pt, top: 1pt),link(addr, text))
)

#let Contatos = align(right,
    stack(
        spacing: 5pt,
        // Contato("phone",[+31 6 2893 7512]),
        ContatoLink("website", [me-danielvie.vercel.app], "https://me-danielvie.vercel.app"),
        ContatoLink("email", [danielvie\@gmail.com], "mailto:danielvie@gmail.com"),
        ContatoLink("linkedin",[in/danielvie], "https://linkedin.com/in/danielvie"),
        ContatoLink("github", [danielvie], "https://github.com/danielvie"),
    )
)