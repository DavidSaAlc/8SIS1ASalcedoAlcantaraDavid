"use strict";
const { useState, useEffect, useRef, RefObject, ChangeEvent } = React;
const { createRoot } = ReactDOM;
const container = document.querySelector('#rick-and-morty');
const root = createRoot(container);
const RickAndMorty = () => {
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [searching, setSearching] = useState(true);
    const [searched, setSearched] = useState(false);
    const [characters, setCharacters] = useState([]);
    const [totalCharacters, setTotalCharacters] = useState(0);
    const [error, setError] = useState(false);
    const firstCharacter = useRef(null);
    const apiUrl = 'https://rickandmortyapi.com/api/character/';
    const handleSearchInput = useDebounce((value) => {
        setPage(1);
        setSearchTerm(value);
        setSearching(true);
        setSearched(true);
    }, 800);
    const handlePageChange = (page) => {
        setPage((prevPage) => prevPage + page);
        setSearched(true);
    };
    useEffect(() => {
        const fetchController = new AbortController();
        const { signal } = fetchController;
        fetch(`${apiUrl}?page=${page}&name=${searchTerm}`, { signal })
            .then(res => res.json())
            .then(data => {
            if (data.error) {
                // No results
                setTotalPages(1);
                setCharacters([]);
            }
            else {
                // Results found
                setTotalPages(data.info.pages);
                setTotalCharacters(data.info.count);
                setCharacters([...data.results]);
            }
            // Reset any previous error state
            setError(false);
        })
            .catch(() => {
            // Error fetching from API
            setError(true);
            setTotalPages(1);
            setCharacters([]);
        })
            .finally(() => setSearching(false));
        return () => fetchController.abort();
    }, [searchTerm, page]);
    useEffect(() => {
        var _a;
        if (searched && characters.length > 0) {
            // Focus first character in list
            (_a = firstCharacter.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }, [characters]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Header, null),
        React.createElement("main", null,
            React.createElement(Search, { handleSearchInput: e => handleSearchInput(e.target.value) }),
            React.createElement(Results, { page: page, totalPages: totalPages, characters: characters, firstCharacter: firstCharacter, totalCharacters: totalCharacters, searching: searching, error: error }),
            !searching && totalPages > 1 && (React.createElement(Pagination, { page: page, totalPages: totalPages, prevPage: () => handlePageChange(-1), nextPage: () => handlePageChange(1) })))));
};
const Header = () => {
    return (React.createElement("header", { className: 'header' },
        React.createElement("h1", { className: 'header__heading' },
            "Rick ",
            React.createElement("span", null, "And"),
            " Morty")));
};
const Search = ({ handleSearchInput }) => {
    return (React.createElement("div", { className: 'search' },
        React.createElement("label", { htmlFor: 'search', className: 'search__label' }, "Character Search:"),
        React.createElement("input", { type: 'text', id: 'search', className: 'search__input', placeholder: 'e.g. rick', spellCheck: 'false', onChange: handleSearchInput })));
};
const Results = ({ page, totalPages, characters, firstCharacter, totalCharacters, searching, error }) => {
    return (React.createElement("div", { className: 'results', "aria-live": 'polite' }, searching ? (React.createElement(Loader, null)) : (React.createElement(React.Fragment, null, characters.length > 0 ? (React.createElement(React.Fragment, null,
        React.createElement("p", { className: 'results__info' },
            "Showing ",
            (page - 1) * characters.length + 1,
            "-",
            page === totalPages ? totalCharacters : page * characters.length,
            " of ",
            totalCharacters,
            " characters"),
        characters.map((character, index) => (React.createElement(CharacterItem, { character: character, key: character.id, index: index, firstCharacter: firstCharacter }))))) : (error ? (React.createElement("p", { className: 'results__message' }, "Error Retrieving Characters")) : (React.createElement("p", { className: 'results__message' }, "No Characters Found")))))));
};
const Loader = () => {
    return (React.createElement("div", { className: 'loader' },
        React.createElement("span", { className: 'sr-only' }, "Loading")));
};
const CharacterItem = ({ character, firstCharacter, index }) => {
    return (React.createElement("details", { className: 'character' },
        React.createElement("summary", { className: 'character__name', ref: index === 0 ? firstCharacter : null }, character.name),
        React.createElement("div", { className: 'character__content' },
            React.createElement("div", { className: 'character__info' },
                React.createElement("details", { className: 'character__item', open: true },
                    React.createElement("summary", { className: 'character__item-summary' }, "Name"),
                    React.createElement("p", { className: 'character__item-info' }, character.name)),
                React.createElement("details", { className: 'character__item', open: true },
                    React.createElement("summary", { className: 'character__item-summary' }, "Species"),
                    React.createElement("p", { className: 'character__item-info' }, character.species)),
                React.createElement("details", { className: 'character__item', open: true },
                    React.createElement("summary", { className: 'character__item-summary' }, "Gender"),
                    React.createElement("p", { className: 'character__item-info' }, character.gender)),
                React.createElement("details", { className: 'character__item', open: true },
                    React.createElement("summary", { className: 'character__item-summary' }, "Location"),
                    React.createElement("p", { className: 'character__item-info' }, character.location.name))),
            React.createElement("div", { className: 'character__image-container' },
                React.createElement("img", { className: 'character__image', src: character.image, alt: character.name })))));
};
const Pagination = ({ page, totalPages, prevPage, nextPage }) => {
    return (React.createElement("nav", { className: 'pagination', "aria-label": "page navigation" },
        React.createElement("p", { className: 'pagination__info' },
            "Page ",
            page,
            " of ",
            totalPages),
        page > 1 && (React.createElement("button", { className: 'pagination__btn', onClick: prevPage }, "Prev Page")),
        page < totalPages && (React.createElement("button", { className: 'pagination__btn', onClick: nextPage }, "Next Page"))));
};
function useDebounce(func, delay = 1000) {
    const timer = useRef();
    useEffect(() => {
        return () => {
            if (!timer.current)
                return;
            clearTimeout(timer.current);
        };
    }, []);
    const debouncedFunction = ((...args) => {
        const newTimer = setTimeout(() => {
            func(...args);
        }, delay);
        clearTimeout(timer.current);
        timer.current = newTimer;
    });
    return debouncedFunction;
}
root.render(React.createElement(RickAndMorty, null));
console.log('Wubba Lubba Dub-Dub! 👴🏻👦🍾🔬🔫🌌🚀🛸👾');