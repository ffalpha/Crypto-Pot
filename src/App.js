import { BrowserRouter, Route, Routes } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import "./App.css";
import Header from "./Components/Header";
import Homepage from "./Pages/Homepage";


const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {

  const classes = useStyles();
  return (

    <BrowserRouter>
      <div className={classes.App} >
        <Header />
        <Route path="/" component={Homepage} exact />
        <Route path="/coins/:id" component={Homepage} exact />
      </div>
    </BrowserRouter>
  );
}

export default App;
