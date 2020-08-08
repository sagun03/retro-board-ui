import React, { memo } from "react";
import BoardSection from "./BoardSection";


const GetBoards = props => {
  const { openModal, handleModal, getBoardData } = props;
  return (
    <>
  <BoardSection getBoardData={getBoardData} handleModal={handleModal}/>
  </>
  );
};
export default memo(GetBoards);
