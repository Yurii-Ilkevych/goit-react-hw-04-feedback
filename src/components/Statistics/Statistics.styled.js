import styled from '@emotion/styled';

const WrapperStatistics = styled.div`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  row-gap: 10px;
`;
const GoodStat = styled.p`
  color: rgb(26, 133, 26);
`;
const NeutralStat = styled.p`
  color: rgb(152, 157, 152);
`;
const BadStat = styled.p`
  color: rgb(189, 15, 15);
`;
const TotalStat = styled.p`
  color: rgb(98, 63, 17);
`;
const PositivePercentage = styled.p`
  color: rgb(3, 94, 3);
`;
export {
  WrapperStatistics,
  GoodStat,
  NeutralStat,
  BadStat,
  TotalStat,
  PositivePercentage,
};
