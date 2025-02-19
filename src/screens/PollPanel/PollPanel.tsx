import React from "react";
import { Delete } from "../../components/Delete";
import "./style.css";

export const PollPanel = (): JSX.Element => {
  return (
    <div className="poll-panel">
      <div className="poll-panel-wrapper">
        <div className="div-4">
          <div className="overlap-6">
            <div className="text-wrapper-19">[Poll Topic] Poll</div>
          </div>

          <div className="overlap-group-5">
            <div className="text-wrapper-20">Option 1</div>
          </div>

          <div className="option-wrapper">
            <img className="option" alt="Option" src="/img/option-2.png" />
          </div>

          <div className="overlap-7">
            <div className="text-wrapper-21">Option 3</div>
          </div>

          <div className="overlap-8">
            <div className="text-wrapper-21">Option 4</div>
          </div>

          <div className="overlap-9">
            <div className="text-wrapper-21">Option 5</div>
          </div>

          <div className="overlap-10">
            <div className="text-wrapper-22">Add</div>
          </div>

          <Delete className="delete-instance" />
          <Delete className="delete-2" />
          <Delete className="delete-3" />
          <Delete className="delete-4" />
          <div className="finish-set-up-button-3">
            <div className="text-wrapper-23">Set Poll</div>
          </div>
        </div>
      </div>
    </div>
  );
};
