import CounterFeedback from './CounterFeedback';

export const App = () => {
  return (
    <>
      <CounterFeedback
        goodProp={0}
        neutralProp={0}
        badProp={0}
        totalProp={0}
        positivePercentageProp={0}
      />
    </>
  );
};
