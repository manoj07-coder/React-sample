import { useState } from "react";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Alert from "./components/alert";

function App() {
  
  const [activeVisible, setVisibility] = useState(false);

  return (
    <div>
      {activeVisible && <Alert onClose={() => setVisibility(false)}>My Alert</Alert>}
     <Button onClick={() => setVisibility(true)}>My Button</Button>
    </div>
  );
}

export default App;
