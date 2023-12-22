import EducationBlock from "./education_block";

function Education() {
    return (
        <>
            <EducationBlock
                from="fev/2019"
                to="Current"
                title="Ph.D.: Systems and Control Engineering"
                school="Aeronautics Institute of Technology – ITA"
                city="São José dos Campos, Brazil"
            >
                Robust Control of Linear Systems with Switched Actuators
                Subjected to Dwell-Time Constraints
            </EducationBlock>
            <EducationBlock
                from="fev/2012"
                to="mai/2015"
                title="Master: Space Mechanics and Control"
                school="National Institute for Space Research – INPE"
                city="São José dos Campos, Brazil"
            >
                Attitude Control of a Vehicle at High Rotation Speed on a
                TorqueFree environment
            </EducationBlock>
            <EducationBlock
                from="ago/2004"
                to="mar/2010"
                title="Bachelor: Mechatronic Engineering"
                school="Federal University of Uberlândia - UFU"
                city="Uberlândia, Brazil"
            >
                Mapping and Automation of Topograph Surfaces using 2d Coordinate
                System
            </EducationBlock>
        </>
    );
}

export default Education;
