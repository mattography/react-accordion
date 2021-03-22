import React, {useState} from 'react';
import classnames from 'classnames';

const Accordion = ({title, content, border}) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className={classnames('accordion-item', border ? 'accordion-border' : null)} onClick={() => setIsActive(!isActive)}>
          <div className="accordion-title">
            <div>{title}</div>
            <div>{isActive ? '-' : '+'}</div>
          </div>
          {isActive && <div className="accordion-content">{content}</div>}
        </div>
    );
};

export default Accordion;