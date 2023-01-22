export const handledError = (error: any) => {
  if (error) {
    throw error;
  }
};
export const connect = (Board: any, port: any) => {
  return new Board(port.path);
};
