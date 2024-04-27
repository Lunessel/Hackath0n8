import React from 'react';
import './search_bar.scss';
import focus from './images/Vector.svg';
import clear from './images/Vector1.svg';

const SearchBar = () => {
    const [search, setSearch] = React.useState('');

    const clearSearch = () => {
        setSearch('');
    };

    return (
        <div className={'search-bar'}>
            <img src={focus} alt="search" />
            <input
                type="text"
                placeholder={'Пошук'}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            {search && <img src={clear} alt="clear" onClick={clearSearch} />}
        </div>
    );
};

export default SearchBar;