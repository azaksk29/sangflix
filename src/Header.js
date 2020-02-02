import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Sheader = styled.header``;
const Slist = styled.ul``;
const Sitem = styled.li``;
const Slink = styled(Link)``;

export default () => (    
    <Sheader>
        <Slist>
            <Sitem>
                <Slink to="/">Home</Slink>
            </Sitem>
            <Sitem>
                <Slink to="/movie">Movie</Slink>
            </Sitem>
            <Sitem>
                <Slink to="/tv">TV</Slink>
            </Sitem>
            <Sitem>
                <Slink to="/search">Search</Slink>
            </Sitem>
        </Slist>
    </Sheader>
);
