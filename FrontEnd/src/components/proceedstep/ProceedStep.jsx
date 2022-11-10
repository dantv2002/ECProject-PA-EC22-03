import React from 'react'
import { Steps } from 'antd';



export const ProceedStep = ({current,setCurrent,steps}) => {
    const items = steps.map((item) => ({
      key: item.title,
      title: item.title,
    }));
    return (
      <div className="proceed-step_container">
        <Steps current={current} items={items} />
        <div className="steps-content">{steps[current].content}</div>
      </div>
    );
}
