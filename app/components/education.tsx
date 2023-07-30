import EducationBlock from "./education_block";

function Education() {
    return (
        <>
            <EducationBlock
                from="2019"
                to="Current"
                title="Ph.D.: Systems and Control Engineering"
                school="Aeronautics Institute of Technology – ITA"
                city="São José dos Campos, Brazil"
            >
                Robust Control of Linear Systems with Switched Actuators
                Subjected to Dwell-Time Constraints
            </EducationBlock>
            <EducationBlock
                from="2012"
                to="2015"
                title="Master: Space Mechanics and Control"
                school="National Institute for Space Research – INPE"
                city="São José dos Campos, Brazil"
            >
                Robust Control of Linear Systems with Switched Actuators
                Subjected to Dwell-Time Constraints
            </EducationBlock>
            <EducationBlock
                from="2004"
                to="2010"
                title="Bachelor: Mechatronic Engineering"
                school="Federal University of Uberlândia - UFU"
                city="Uberlândia, Brazil"
            >
                Robust Control of Linear Systems with Switched Actuators
                Subjected to Dwell-Time Constraints
            </EducationBlock>
        </>
    );
}

export default Education;
