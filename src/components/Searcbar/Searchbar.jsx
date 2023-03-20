import { Component } from 'react';
import { Formik, Form } from 'formik';
import { SearchbarStyled, FieldStyled } from './Searchbar.styled';
export class Searchbar extends Component {
  
  state = {
    searchQuery: '',
  };


  searchSubmit = (values) => {
    console.log('searchSubmit', values)
    this.props.searchInputHandler(this.state.searchQuery)
    this.setState({ searchQuery: '' });

  }
  handleChange = e => {
    const { value } = e.target;
    console.log('value', value)
    this.setState({ searchQuery: value });
  };
  render() {
    return (
      <SearchbarStyled>
        <Formik
          initialValues={this.state.searchQuery}
          onSubmit={this.searchSubmit}
        >
          <Form>
            <FieldStyled
              id="searchQuery"
              name="searchQuery"
              placeholder="Enter your query"
              value={this.state.searchQuery}
              onChange={this.handleChange}
            />
            <button type="submit">Search Images</button>
          </Form>
        </Formik>
      </SearchbarStyled>
    );
  }
}
