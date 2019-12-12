import React from 'react';
import Link from 'next/link';

const SearchResults = ({ results }) => {
  return (
    <div className="results">
      <table>
        <tr>
          <th>Quote #</th>
          <th>Name</th>
          <th>Status</th>
        </tr>
        {results
          .map(row => (
            <tr>
              <td>
                <Link href={`quote/${row.id}`}>
                  <a>QTE-{row.id}</a>
                </Link>
              </td>
              <td>{row.name}</td>
              <td>{row.status}</td>
            </tr>
          ))
          .reverse()}
      </table>

      <style jsx>{`
        div.results {
          margin: 25px 0;
          box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.35);
          border-radius: 5px;
        }

        div.results table {
          width: 100%;
          border-collapse: collapse;
        }

        div.results tr th,
        div.results tr td {
          font-size: 12px;
          text-align: left;
        }

        div.results tr th:nth-of-type(1) {
          width: 10%;
        }

        div.results tr th:nth-of-type(2) {
          width: 80%;
        }

        div.results td,
        div.results th {
          border-bottom: 1px solid #e0e0e0;
        }

        div.results th {
          padding: 10px;
          padding-bottom: 10px;
        }

        div.results tr td {
          padding: 15px 11px;
        }

        div.results tr td a {
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default SearchResults;
