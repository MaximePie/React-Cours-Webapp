import {useParams} from "react-router-dom";

export default function PageParametre() {

  const parameters = useParams();
  console.log(parameters.dada);

  if (parameters.dada === '1') {
    return (
      <div className="PageParametre">
        <h4>Page paramètre uno</h4>
      </div>
    )
  }
  else if (parameters.dada === '2') {
    return (
      <div className="PageParametre">
        <h4>Page paramètre dos</h4>
      </div>
    )
  }
  else {
    return (
      <div className="PageParametre">
        <h4>Page paramètre inexistante</h4>
      </div>
    )
  }
}