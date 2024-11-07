import { io } from "socket.io-client";

const URL = "https://verbose-garbanzo-6wqw4vw66x52rqxj-3000.app.github.dev/";
const socket = io(URL, { autoConnect: false });

socket.onAny((event, ...args) => {
  console.log(event, args);
});

export default socket;