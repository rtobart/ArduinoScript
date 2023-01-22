import Board from 'firmata'
import { handledError, connect } from './config/board.config.js'
import { run } from './app.pipeline.js'

Board.requestPort((error: any, port: any) => {
  // if error, throw error
  handledError(error)

  // connect Arduino® board
  const board = connect(Board, port)

  // when board is ready
  board.on('ready', () => {
    
    // pipe line of commands
    run(board)
  })
})
