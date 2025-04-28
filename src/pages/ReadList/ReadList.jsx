import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../Utils/addToDB";
import Book from "../Book/Book";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");

  const data = useLoaderData();
  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedStoredBooks = storedBookData.map((id) => parseInt(id));

    const myReadList = data.filter((book) =>
      convertedStoredBooks.includes(book.bookId)
    );
    setReadList(myReadList);
  }, []);

  const handleSort = (type) => {
    setSort(type);

    if (type === "pages") {
      const sortedByPage = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortedByPage);
    }
    if (type === "ratings") {
      const sorteByRatings = [...readList].sort((a, b) => a.rating - b.rating);

      setReadList(sorteByRatings);
    }
  };
  return (
    <div>
      <details className="dropdown">
        <summary className="btn m-1">Sort By : {sort ? sort : ""}</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a onClick={() => handleSort("pages")}>Pages</a>
          </li>
          <li>
            <a onClick={() => handleSort("ratings")}>Ratings</a>
          </li>
        </ul>
      </details>

      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Books I read : {readList.length}</h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {readList.map((b) => (
              <Book key={b.bookId} singleBook={b}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>My Wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
