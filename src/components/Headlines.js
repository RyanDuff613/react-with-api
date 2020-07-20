import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from '../actions';
import styled from 'styled-components'

const HeadlineBox = styled.li`
  border: 1px solid #f1f1f1;
  margin: 5px;
`;

// const Headline = styled.p`
//   background-color:grey;
// `;

const HeadlineTitle = styled.h3`
    color: rgba(0,0,0,0.75);
  `;


  

class Headlines extends React.Component {
  constructor(props){
    super(props);
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall());
  }

  render() {
    const { error, isLoading, headlines } = this.props;
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (isLoading) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return (
        <React.Fragment>
          <h1>Headlines</h1>
          <ul>
            {headlines.map((headline, index) =>
              <li key={index}>
              <HeadlineBox>
                <HeadlineTitle>
                  <h3>{headline.title}</h3>
                </HeadlineTitle>
                  <p>{headline.abstract}</p>
              </HeadlineBox>
              </li>
            )}
          </ul>
        </React.Fragment>
      );
    }
  }

}

const mapStateToProps = state => {
  return {
    headlines: state.headlines,
    isLoading: state.isLoading,
    error: state.error
  }
}





export default connect(mapStateToProps)(Headlines);