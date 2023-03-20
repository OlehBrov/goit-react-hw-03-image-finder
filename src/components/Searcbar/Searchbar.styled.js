import styled from "styled-components";
// import { Searchbar } from "./Searchbar";
import { Field } from 'formik';

export const SearchbarStyled = styled.div`
display: flex;
width: 100%;
height: 100px;
border: 1px solid gray;
justify-content: center;
align-items: center;
`

export const FieldStyled = styled(Field)`
font-size: 18px;
`