import React, { useState, memo } from "react";
import CreateBoardModal from "./components/createBoardModal";
import Welcome from "./Welcome";
import GetBoards from "./GetBoards";

const BoardData = props => {
  const [openModal, handleModal] = useState(false);
  const {
    boardData: { getBoards }
  } = props;
  return (
    <>
      {getBoards.length ? (
        <GetBoards
          openModal={openModal}
          handleModal={handleModal}
          getBoardData={getBoards}
          {...props}
        />
      ) : (
        <Welcome handleModal={handleModal} />
      )}

      {openModal && <CreateBoardModal handleModal={handleModal} {...props} />}
    </>
  );
};
export default memo(BoardData);
