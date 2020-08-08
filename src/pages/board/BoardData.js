import React, { useState, memo } from "react";
import CreateBoardModal from './components/createBoardModal';
import Welcome from "./Welcome";
import GetBoards  from "./GetBoards";

const BoardData = props => {
  const [openModal, handleModal] = useState(false);
  const { boardData: { getBoards } } = props;
  if (!getBoards)
  return (
   <>
    <Welcome />
    {openModal && <CreateBoardModal handleModal={handleModal} {...props} />}
  </>
  );
  return (
    <>
    <GetBoards openModal={openModal} handleModal={handleModal} getBoardData={getBoards} {...props} />
    {openModal && <CreateBoardModal handleModal={handleModal} {...props} />}
    </>
  )
};
export default memo(BoardData);
