import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav>
      <div className="container text-white">
        <h1 className="display-4 text-center p-5">
          File Uploader <FontAwesomeIcon icon={faCloudUploadAlt} size="lg" />
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
