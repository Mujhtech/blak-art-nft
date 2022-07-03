import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

type Props = {
  question: string;
  answer: string;
};

export default function FaqCard({ question, answer }: Props) {
  return (
    <div className="w-full py-3">
      <div className="w-full flex flex-row items-center justify-between">
        <h1>{question}</h1>
        <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
      </div>
    </div>
  );
}
