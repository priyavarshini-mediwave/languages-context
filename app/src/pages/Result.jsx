import { useEffect, useState } from "react";
import Layout from "../components/Layout";

function Result({ formData }) {
  let filteredArray = [];
  const [homefetch, sethomefetch] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const divPerPage = 6;

  function getBadgeColor(difficulty) {
    switch (difficulty) {
      case "normal":
        return "orange";
      case "medium":
        return "yellow";
      case "hard":
        return "red";
      case "easy":
        return "green";
      default:
        return "gray";
    }
  }
  function sortArray(filteredArray) {
    filteredArray.sort(function (a, b) {
      return a.sortnum - b.sortnum;
    });
  }
  function handleInputChange(e) {
    difficulty.value = e.target.value;
    console.log("difficulty:", difficulty.value);
    if (difficulty.value == "none") {
      filteredArray = formData;
      console.log(filteredArray);
      for (let i of filteredArray) {
        console.log("i", i.difficulty);
        switch (i.difficulty) {
          case "easy":
            i.sortnum = 1;
            break;
          case "normal":
            i.sortnum = 4;
            break;
          case "medium":
            i.sortnum = 7;
            break;
          case "hard":
            i.sortnum = 11;
            break;
          default:
            i.sortnum = 0;
        }
        console.log(i.sortnum);
      }
      sortArray(filteredArray);

      sethomefetch(filteredArray);
      setCurrentPage(1);
    } else {
      filteredArray = formData.filter((f) => f.difficulty === difficulty.value);
      console.log(filteredArray);
      sethomefetch(filteredArray);
      setCurrentPage(1);
    }
  }
  useEffect(() => {
    console.log("fetch:", homefetch);
  }, [homefetch]);

  const indexOfLastdiv = currentPage * divPerPage;
  const indexOfFirstdiv = indexOfLastdiv - divPerPage;
  const currentdivs = homefetch.slice(indexOfFirstdiv, indexOfLastdiv);

  const nextPage = () => {
    if (indexOfLastdiv < homefetch.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Layout>
      <>
        <div className="dropdown">
          <label htmlFor="difficulty">Difficulty Level:</label>
          <select
            id="difficulty"
            name="difficulty"
            onChange={handleInputChange}
          >
            <option value=""></option>
            <option value="none">None</option>
            <option value="easy">Easy</option>
            <option value="normal">Normal</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <h3>
            Choose your Difficulty level from the dropdown to view the languages
          </h3>
        </div>
        {homefetch ? (
          <div>
            {homefetch.length ? (
              <div className="total">{homefetch.length} items found</div>
            ) : (
              <></>
            )}

            <div className="output">
              {currentdivs.map((item, index) => (
                <div key={index} className="resultcard">
                  <h2>{item.languageName}</h2>
                  <p>
                    <strong>Founder:</strong> {item.founder}
                  </p>
                  <p>
                    <strong>Year: </strong>
                    {item.year}
                  </p>
                  <p>
                    <strong>Difficulty:</strong>
                    <span className={`badge ${getBadgeColor(item.difficulty)}`}>
                      {item.difficulty}
                    </span>
                  </p>
                </div>
              ))}
            </div>

            <div className="pagination">
              <button
                className="page-button"
                onClick={prevPage}
                disabled={currentPage <= 1}
              >
                Previous Page
              </button>
              <button
                className="page-button"
                onClick={nextPage}
                disabled={indexOfLastdiv >= homefetch.length}
              >
                Next Page
              </button>
            </div>
          </div>
        ) : (
          <div>
            <p></p>
          </div>
        )}
      </>
    </Layout>
  );
}

export default Result;
