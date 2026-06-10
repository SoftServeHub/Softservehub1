import CountUp from "react-countup";

export default function Counter({ target, suffix = "", startFrom = 1, active = false }) {
  if (!active) {
    return (
      <span>
        {startFrom}
        {suffix}
      </span>
    );
  }

  return (
    <CountUp
      start={startFrom}
      end={target}
      duration={1.25}
      suffix={suffix}
      useEasing
      useGrouping={target >= 1000}
    />
  );
}
