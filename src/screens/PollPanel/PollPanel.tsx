import React from "react";
import "./style.css";

export const PollPanel = (): JSX.Element => {
  return (
    <div className="poll-panel">
      <div className="poll-panel-wrapper">
        <div className="div-9">
          <div className="overlap-64">
            <div className="text-wrapper-70">[Poll Topic] Poll</div>
          </div>

          <div className="overlap-group-12">
            <div className="text-wrapper-71">Option 1</div>
          </div>

          <div className="option-wrapper">
            <img className="option" alt="Option" src="/img/option-2.png" />
          </div>

          <div className="overlap-65">
            <div className="text-wrapper-72">Option 3</div>
          </div>

          <div className="overlap-66">
            <div className="text-wrapper-72">Option 4</div>
          </div>

          <div className="overlap-67">
            <div className="text-wrapper-72">Option 5</div>
          </div>

          <div className="overlap-68">
            <div className="text-wrapper-73">Add</div>
          </div>

          <div className="delete">
            <img className="x" alt="X" src="/img/x.svg" />
          </div>

          <div className="x-wrapper">
            <img className="x" alt="X" src="/img/x.svg" />
          </div>

          <div className="img-wrapper">
            <img className="x" alt="X" src="/img/x.svg" />
          </div>

          <div className="delete-2">
            <img className="x" alt="X" src="/img/x.svg" />
          </div>

          <div className="finish-set-up-button-6">
            <div className="text-wrapper-74">Set Poll</div>
          </div>
        </div>
      </div>
    </div>
  );
};
