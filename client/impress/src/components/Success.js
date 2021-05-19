import React, { PureComponent } from "react";
import { Transition, animated } from "react-spring";

class Success extends PureComponent {
  constructor() {
    super();

    this.state = {
      show: false,
    };
  }

  render() {
    const { show } = this.state;

    return (
      <Transition
        items={show}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
        reverse={show}
        delay={200}
        config={config.molasses}
        onRest={() =>
          this.setState({
            show: !show,
          })
        }
      >
        {(styles, item) =>
          item && <animated.div style={styles}>✌️</animated.div>
        }
      </Transition>
    );
  }
}
export default Success;

{
  /* <div className="flex justify-center">
  <div className="text-2xl text-white">
    <h1>Success!</h1>
  </div>
</div>; */
}
