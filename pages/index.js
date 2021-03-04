import Head from "next/head";
import { Center, Spinner, Stack, Skeleton, Wrap } from "@chakra-ui/react";
import Book from "../components/Book";
import { ReactQueryDevtools } from "react-query/devtools";
import { useQuery } from "react-query";
import { useState, useEffect } from "react";

export default function Home() {
  const [books, setBooks] = useState();

  async function fetchBooks() {
    const url = "/api/books";
    const res = await fetch(url);
    const dt = await res.json();
    return dt;
  }

  const { data, status } = useQuery(["books"], fetchBooks, {
    keepPreviousData: true,
  });
  //   if(status=== 'success') console.log(data.data);

  useEffect(() => {
    if (data) {
      setBooks(data.data);
    }
  }, [data]);

  //   console.log("books", books);

  if (status === "error") {
    return <p>Error fetching data</p>;
  }

  if (!books) {
    return <p>No books yet...</p>;
  }

  return (
    <>
      {status === "loading" && (
        <Center mt='40'>
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
          />
        </Center>
      )}

      {status === "success" && (
        <div id='container'>
          {books.map((b) => (
            <Book
              key={b._id}
              title={b.title}
              description={b.description}
              author={b.author}
              id={b._id}
              b={b}
            />
          ))}
        </div>
      )}

      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}
