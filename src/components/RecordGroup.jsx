import React from "react";
import Record from "./Record";
import EmptyStage from "./EmptyStage";

const RecordGroup = ({ records, destroyRecord }) => {
  return (
    <>
      {records.length === 0 && <EmptyStage />}
      {records.map((record, index) => (
        <Record
          key={record.id}
          index={index}
          record={record}
          destroyRecord={destroyRecord}
        />
      ))}
    </>
  );
};

export default RecordGroup;
