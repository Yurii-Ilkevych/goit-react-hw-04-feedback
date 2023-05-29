import styled from '@emotion/styled';

const WrapperButton = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  column-gap: 10px;
`;

const Btn = styled.button`
  background-color: ${({ evtType, theme }) => {
    switch (evtType) {
      case 'good':
        return theme.colorPallete.green;
      case 'neutral':
        return theme.colorPallete.gray;
      case 'bad':
        return theme.colorPallete.red;
      default:
        return theme.colorPallete.gray;
    }
  }};
  cursor: pointer;
  border: 1px solid rgb(74, 72, 71);
  border-radius: 2px;
  box-shadow: 0 1px #666;
  &:hover {
    background-color: ${({ evtType, theme }) => {
      switch (evtType) {
        case 'good':
          return theme.colorPallete.greenHover;
        case 'neutral':
          return theme.colorPallete.grayHover;
        case 'bad':
          return theme.colorPallete.redHover;
        default:
          return theme.colorPallete.gray;
      }
    }};
    transform-style: 1px;
  }
  &:active {
    background-color: ${({ evtType, theme }) => {
      switch (evtType) {
        case 'good':
          return theme.colorPallete.green;
        case 'neutral':
          return theme.colorPallete.gray;
        case 'bad':
          return theme.colorPallete.red;
        default:
          return theme.colorPallete.gray;
      }
    }};
    box-shadow: none;
    transform: translateY(1px);
  }
`;
export { WrapperButton, Btn };
