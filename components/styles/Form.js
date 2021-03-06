import styled, { keyframes } from 'styled-components'

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

const Form = styled.form`
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  background: rgba(0, 0, 0, 0.02);
  border: 5px solid white;
  padding: 20px;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  margin: 5rem auto;
  width: 30vw;
  label {
    display: block;
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 1rem;
    border-radius: 3px;
    font-size: 1rem;
    border: 1px solid black;
    &:focus {
      outline: 0;
      border-color: ${props => props.theme.primary};
    }
  }
  button,
  input[type='submit'] {
    cursor: pointer;
    border-radius: 3px;
    width: auto;
    background: red;
    color: white;
    border: 0;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
    background-color: ${props => props.theme.primary};
  }
  a {
    margin: auto 0;
    padding: 0.8rem;
    border-radius: 3px;
    background-color: transparent;
    color: ${props => props.theme.black};
    font-size: 12px;
    &:hover {
      background-color: ${props => props.theme.lightgrey};
    }
  }
  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      content: '';
      display: block;
      background-image: linear-gradient(to right, #2B0F6A 0%, #6436E2 50%, #2B0F6A 100%);
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
  @media(max-width: 750px) {
    width: 225px;
    padding: 0.2rem;

    button {
      font-size: 1.5rem;
    }
  }
`;

export default Form;
