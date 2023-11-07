import React from "react";
import { useSelector } from "react-redux";
import { selectCount } from "../../reducers/todoSlice";
import { InfoItem } from "./TodoFooterInfo.styles";

export default function TodoFooterInfo() {
  const { done, working, total } = useSelector(selectCount);
  return (
    <div>
      <InfoItem>
        Done : <em>{done}</em>
      </InfoItem>
      <InfoItem>
        Working : <em>{working}</em>
      </InfoItem>
      <InfoItem>
        Total : <em>{total}</em>
      </InfoItem>
    </div>
  );
}
