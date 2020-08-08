import React, { useState, memo } from "react";
import { useQuery } from '@apollo/client';
import BoardData from "./BoardData";
import { GET_BOARDS } from "./graphQL/Query";

const Boards = props => {
  const { loading, error, data } = useQuery(GET_BOARDS);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return (
    <BoardData boardData={data} />
  )
};
export default memo(Boards);
