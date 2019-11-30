import React from 'react';

const SearchBar = ({ value, placeholder, onChange }) => {
  return (
    <div>
      <input value={value} placeholder={placeholder} onChange={e => onChange(e.target.value)} />
      <style jsx>{`
        div {
          background: #fff;
          box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.12);
          border-radius: 5px;
          margin: 0;
          transition: all 0.2s ease;
          padding: 0.5rem;
        }

        input {
          box-sizing: inherit;
          border: none;
          line-height: 1.3em;
          color: inherit;
          padding: 0.25rem 0.5rem;
          width: calc(100% - 7.5px);
          font-weight: 700;
          font-size: 1.142857142857143rem;
        }

        input::placeholder {
          opacity: 0.75;
        }
      `}</style>
    </div>
  );
};

export default SearchBar;
