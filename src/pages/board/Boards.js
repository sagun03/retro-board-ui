import React, { useState, memo, useEffect } from "react";
import { useQuery } from '@apollo/client';
import CreateBoardModal from "./components/createBoardModal";
import { GET_BOARDS } from "./graphQL/Query";
import { Box, Typography, Button } from "@material-ui/core";
import Fallback from '../fallBack';
import BoardSection from "./BoardSection";
import { BOARD_CREATED } from './graphQL/Subscriptions';

const Boards = props => {
  const { loading, error, data = {}, subscribeToMore } = useQuery(GET_BOARDS);
  const [ openModal, handleModal ] = useState(false);


  useEffect(() => {
    subscribeToMore({
      document: BOARD_CREATED,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const prevData = JSON.parse(JSON.stringify(prev));
        const { data: { boardCreated = {} } = {}} = subscriptionData || {};
        const { getBoards = [] } = prevData;
        getBoards.push(boardCreated);
        return prevData;
      }
    })
  }, [])

  const { getBoards = [] } = data;
  if (loading) return 'Loading...';
  if (error){ return `Error! ${error.message}`};

  return (
    <Box display="flex" style={{ backgroundColor: "#f4f6ff", minHeight: '40rem'}}>
      <Box
        display="flex"
        justifyContent="flex-start"
        flexDirection="column"
        style={{ margin: "2em", width: "93rem" }}
      >
        <Box display="flex"
        flexDirection="row"
        textAlign="center"
        >
        <Box display="flex" flexDirection="column" flexGrow="4" style={{marginLeft: '5rem', }}
>
        <Typography
          variant="h6"
          color="textSecondary"
          gutterBottom
        >
          WELCOME TO
        </Typography>
        <Typography  variant="h4" color="textPrimary" gutterBottom>
          COOL RETRO
        </Typography>
        </Box>
        <Box  display="flex" >
        <Button
          style={{ height: "3rem" }}
          color="secondary"
          variant="contained"
          onClick={() => handleModal(true)}
        >
          Create Board
        </Button>
        </Box>
        </Box>
        <Typography
          component="i"
          variant="body1"
          color="textSecondary"
          gutterBottom
          style={{textAlign: "center"}}
        >
          Prepare a board for your sprint to make retro fun, and track your work
          and briefing the key details for example what went good, actions to
          improve, suggestion, What went bad.
        </Typography>
        {getBoards.length ? (
        <BoardSection
          openModal={openModal}
          handleModal={handleModal}
          getBoardData={getBoards}
          {...props}
        />
      ) : (
        <Box
          style={{ backgroundColor: "white", minHeight: '30rem' }}
          display="flex"
          flexDirection="row"
          alignItems="stretch"
        >
          <Fallback openModal={openModal} handleModal={handleModal} />
          </Box>
          )}
        </Box>
        {openModal && <CreateBoardModal handleModal={handleModal} {...props} />}
    </Box>
  );
};
export default memo(Boards);
