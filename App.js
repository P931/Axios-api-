import "./App.css";
import useCustom from "./useCustom";

function App() {
  const url = "https://dummyjson.com/users";
  const { Data, isError, Load } = useCustom(url);

  return (
    <>
      {/* <h1 className="head">Dummy Data Getting Using The Axios Api</h1> */}
      <h1 className="head">Dummy Data Getting Using The Fetch Api</h1>

      <div className="details">
        {Data ? (
          Data.users &&
          Data.users.map((post) => {
            const { id, firstName, lastName, maidenName, age } = post;
            return (
              <>
                <div className="card">
                  <p>Id: {id}</p>
                  <p>FirstName: {firstName}</p>
                  <p>LastName: {lastName}</p>
                  <p>MaidenName: {maidenName}</p>
                  <p>Age: {age}</p>
                </div>
                {/* <div className="load">Loading....</div> */}
              </>
            );
          })
        ) : (
          <>
            {isError !== "" && (
              <h2 className="err">{`User data is not get ${isError}`}</h2>
            )}
          </>
        )}
        {Load ? <div className="load">Loading....</div> : null}
      </div>
    </>
  );
}

export default App;
