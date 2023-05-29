import CounterFeedback from './CounterFeedback';

export const App = () => {
  return (
    <>
      <CounterFeedback
        good={0}
        neutral={0}
        bad={0}
        total={0}
        positivePercentage={0}
      />
    </>
  );
};
