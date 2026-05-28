# @nventr.ai/react-nventr-agent

The `@nventr.ai/react-nventr-agent` package provides a React component and hook for integrating the Nventr Agent into your React applications.

## Installation

To install the package, use npm or yarn:

```sh
npm install @nventr.ai/react-nventr-agent
```

Or with yarn:

```sh
yarn add @nventr.ai/react-nventr-agent
```

## Usage

### NventrAgent Component

The `NventrAgent` component is used to render the Nventr Agent in your React application. You can customize its behavior using various props.

### useNventrAgent Hook

The `useNventrAgent` hook provides access to the Nventr Agent instance, allowing you to interact with it programmatically.

### Example

Here is an example of how to use the `NventrAgent` component and the `useNventrAgent` hook in a React component:

#### Using the NventrAgent Component

```javascript
import React from "react";
import { NventrAgent } from "@nventr.ai/react-nventr-agent";

const MyComponent = ({ agentId }) => {
  return (
    <div style={{ padding: "20px" }}>
      <NventrAgent
        id={agentId}
        dev={process.env.NODE_ENV === "development"}
        collapse={true}
        onRendered={() => {
          console.log("Agent is rendered", agentId);
        }}
      />
    </div>
  );
};

export default MyComponent;
```

This example demonstrates how to use the `NventrAgent` component to render the agent in a React application. The component is configured with the `id`, `dev`, `collapse`, and `onRendered` props.

#### Using the useNventrAgent Hook

```javascript
import React, { useEffect } from "react";
import { useNventrAgent } from "@nventr.ai/react-nventr-agent";

const MyComponentWithHook = () => {
  const nventrAgent = useNventrAgent();

  useEffect(() => {
    // Render the agent when the component mounts
    nventrAgent.render({ id: "yourid", collapse: true });

    const timer = setTimeout(() => {
      nventrAgent.restore();
    }, 5000);

    return () => {
      // Remove the agent when the component unmounts
      nventrAgent.remove();
      clearTimeout(timer);
    };
  }, [nventrAgent]);

  return <div>Agent will be restored in 5 seconds</div>;
};

export default MyComponentWithHook;
```

This example demonstrates how to use the `useNventrAgent` hook to interact with the agent programmatically. The `useEffect` hook is used to render the agent with the `collapse: true` option when the component mounts and remove it when the component unmounts. Additionally, a timeout is set to call the `restore` method on the agent instance after 5 seconds.

### Explanation

- **Using the NventrAgent Component**:

  ```javascript
  import { NventrAgent } from "@nventr.ai/react-nventr-agent";

  const MyComponent = ({ agentId }) => {
    return (
      <div style={{ padding: "20px" }}>
        <NventrAgent
          id={agentId}
          dev={process.env.NODE_ENV === "development"}
          collapse={true}
          theme="light"
          // Optional initial options
          radius={16}
          margin={8}
          height={800}
          width={600}
          onRendered={() => {
            console.log("Agent is rendered", agentId);
          }}
        />
      </div>
    );
  };

  export default MyComponent;
  ```

  This example demonstrates how to use the `NventrAgent` component to render the agent in a React application. The component is configured with the `id`, `dev`, `collapse`, and `onRendered` props.

- **Using the useNventrAgent Hook**:

  ```javascript
  import { useEffect } from "react";
  import { useNventrAgent } from "@nventr.ai/react-nventr-agent";

  const MyComponentWithHook = () => {
    const nventrAgent = useNventrAgent();

    useEffect(() => {
      // Render the agent when the component mounts
      nventrAgent.render({ id: "yourid", collapse: true });

      const timer = setTimeout(() => {
        nventrAgent.restore();
      }, 5000);

      return () => {
        // Remove the agent when the component unmounts
        nventrAgent.remove();
        clearTimeout(timer);
      };
    }, [nventrAgent]);

    return <div>Agent will be restored in 5 seconds</div>;
  };

  export default MyComponentWithHook;
  ```

  This example demonstrates how to use the `useNventrAgent` hook to interact with the agent programmatically. The `useEffect` hook is used to render the agent with the `collapse: true` option when the component mounts and remove it when the component unmounts. Additionally, a timeout is set to call the `restore` method on the agent instance after 5 seconds.

### Summary

The `@nventr.ai/react-nventr-agent` package provides a convenient way to integrate the Nventr Agent into your React applications using the `NventrAgent` component and the `useNventrAgent` hook. These examples demonstrate how to set up and use these features in a React component, including rendering and removing the agent using the `useEffect` hook.

```

This cleaned-up README provides clear instructions on how to use the `NventrAgent` component and the `useNventrAgent` hook, without any unnecessary links or duplicate sections.
```
