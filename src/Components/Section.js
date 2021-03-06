import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
    padding:0 20px;

    &:not(:first-child){
        margin-top:20px;
    }
`;

const Title = styled.h3`
    font-size:18px;
    font-weight:600;
    margin-bottom:10px;
`;

const Grid = styled.div`
    line-height:18px;
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(min-content, 150px));
    gap:10px;
`;

const Section = ({ title, children }) => (
    <Container>
        <Title>{title}</Title>
        <Grid>{children}</Grid>
    </Container>
);

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default Section;