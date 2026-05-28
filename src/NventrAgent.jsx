import { useEffect, useImperativeHandle, forwardRef } from "react";
import { useNventrAgent } from "./useNventrAgent";
const NventrAgent = forwardRef((props, ref) => {
  const nventrAgent = useNventrAgent(props);
  // render the agent based on the props
  useEffect(() => {
    nventrAgent.render(props);
  }, [props]);
  useEffect(() => {
    return () => {
      nventrAgent.remove();
    };
  }, []);
  useImperativeHandle(ref, () => nventrAgent);
  return null;
});
export default NventrAgent;
