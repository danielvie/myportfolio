#import "components/colors.typ": colors

#let accentColor = colors.blue-600

#let letterHeaderNameStyle(str) = {text(
  fill: accentColor,
  weight: "bold",
  str
)}

#let letterHeaderNameStyle(str) = {text(
  fill: accentColor,
  weight: "bold",
  str
)}

#let letterDateStyle(str) = {text(
  size: 0.9em,
  style: "italic",
  str
)}

#let letterSubjectStyle(str) = {text(
  fill: accentColor,
  weight: "bold",
  underline(str)
)}

#let letterHeaderAddressStyle(str) = {text(
  fill: gray,
  size: 0.9em,
  smallcaps(str)
)}

#let firstName = "Daniel"
#let lastName = "Vieira"

#let letterHeader(
  myAddress: "Kastanjelaan 1-508, Eindhoven",
  recipientName: "Company Name Here",
  recipientAddress: "Company Address Here",
  date: "Today's Date",
  subject: "Subject: Hey!"
) = {
  letterHeaderNameStyle(firstName + " " + lastName)
  v(1pt)
  letterHeaderAddressStyle(myAddress)
  v(4em)
  letterDateStyle(date)
  v(1pt)
  letterSubjectStyle(subject)
  linebreak(); linebreak()
}

#set text(size: 14pt)

#let layout(doc) = {
  set text(
    font: ("FiraCode","Source Sans Pro", "Font Awesome 6 Brands", "Font Awesome 6 Free"),
    weight: "regular",
    size: 12pt,
  )
  set align(left)
  set page(
    paper: "a4",
    margin: (
      left: 1.4cm,
      right: 1.4cm,
      top: .8cm,
      bottom: .4cm,
    ),
  )
  par(justify:true,
    doc
  )
}


#show: layout(
    [
        #letterHeader(
        myAddress: [Kastanjelaan 1-508, Eindhoven, NL],
        date: [15/08/2023],
        subject: "Subject: Job Application for System Architect Dynamics"
        )

        Dear Hiring Manager,

        I am excited to submit my application for the System Architect Dynamics position at VDL. I am a control systems engineer with over 10 years of experience in the aerospace industry working with control, guidance, navigation, and Model-Based Design using Matlab/Simulink and I have solid programming skills in C/C++/Python for embedded systems.

        I am passionate about innovative engineering solutions and thrive in dynamic environments surrounded by enthusiastic individuals.

        I started my professional experience working in Control Systems working on the development of the Brazilian Guided Rocket. First working Matlab/Simulink to create models to simulate the dynamics of rockets and then worked on the design of the Guidance, Navigation, and Control embedding of the resulting algorithms using C++.

        I used Python for analyzing the data of the flights and assess the performance of the vehicle. There I had to use statistics and critical thinking to make the right understanding of the events so we could decide on the next steps. 

        In my free time, I enjoy creating web systems (currently using NextJS, typescript, and tailwind). I use those systems to automate personal activities and often I integrate them in my work to improve my workflow.

        When I am not programming I am usually hanging out with my friends, talking about nerd stuff, things that flight, space stuff and recently bouldering.

        I am looking for a place with energetic people that have passion for their work and I look forward to the opportunity to speak to you and discuss how I can be of help

        Thank you for considering my application. I look forward to the opportunity to discuss my qualifications further.

        #v(3em)
        Sincerely,

        Daniel Vieira
    ]
)