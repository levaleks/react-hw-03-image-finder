import React from 'react';
import { SearchFormButtonLabel, SSearchBar, SSearchForm, SSearchFormButton, SSearchFormInput } from './SearchBar.sc';

export type SearchBarProps = {
    onSearch: (query: string) => void;
    isFullHeight: boolean;
};

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, isFullHeight }) => {
    const handleSubmit = (e): void => {
        e.preventDefault();

        const query: string = e.target.query.value.trim().replace(/\s{2,}/g, ' ');

        onSearch(query);
    };

    return (
        <SSearchBar isFullHeight={isFullHeight}>
            <SSearchForm onSubmit={handleSubmit}>
                <SSearchFormButton type="submit">
                    <SearchFormButtonLabel>Search</SearchFormButtonLabel>
                </SSearchFormButton>

                <SSearchFormInput
                    name="query"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </SSearchForm>
        </SSearchBar>
    );
};
