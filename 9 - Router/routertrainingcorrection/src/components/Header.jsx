function MailField() {
  const [mail, setMail] = React.useState('');
  const [isNotValide, setIsnotValide] = React.useState(false);

  React.useEffect(function () {

  }, [mail]);

  return (
    <form>
      <h2>Email : {pseudo}</h2>
      {isNotValide && (
        <p>Pas le bon format !</p>
      )}
      <label>
        email :
        <input type="text" onChange={updateMail}/>
      </label>
    </form>
  );

  function updateMail(e) {
    const verifMail = (e) => {
      return String(e.target.value)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
  }
}