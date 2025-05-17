import { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(searchTerm.trim());
  };

  return (
    <header className={styles.header}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          className={styles.input}
          placeholder="Search images..."
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
