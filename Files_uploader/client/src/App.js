import "./App.css";
import Uploader from "./components/Uploader";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="container text-white">
      <h1 className="display-4 text-center p-5">
        File Uploader <FontAwesomeIcon icon={faCloudUploadAlt} />
      </h1>
      <Uploader />
    </div>
  );
}

export default App;
