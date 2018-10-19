import styled, {keyframes} from 'styled-components';

const animation = keyframes`
  from {
    background-position: left center;
  }

  to {
    background-position: right center;
  }
`;

export const Block = styled.div`
  position: relative;
  background: #ccc;

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
  }

  &:before {
    background-image: linear-gradient(45deg, #ccc, #e5e5e5, #ccc);
    background-size: 1000% 100%;
    animation: ${animation} 1s linear infinite;
  }

  &:after {
    border: 1px solid #ccc;
  }
`;
