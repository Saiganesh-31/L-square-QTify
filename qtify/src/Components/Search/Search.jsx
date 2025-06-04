import React from "react";
import styles from "./Search.module.css";
import searchIcon from "../../assets/search-icon.svg";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";
import { truncate } from "../../helpers/helpers";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

// ...Listbox styled code remains the same...

function Search({ searchData, placeholder }) {
  const navigate = useNavigate();

  const onSubmit = (e, value) => {
    e.preventDefault();
    if (value) {
      navigate(`/album/${value.slug}`);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <Autocomplete
        options={searchData || []}
        getOptionLabel={(option) => option.title}
        sx={{ width: "100%" }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={placeholder}
            className={styles.search}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <button
                  className={styles.searchButton}
                  type="submit"
                  style={{ background: "none", border: "none", padding: 0 }}
                  tabIndex={-1}
                >
                  <SearchIcon />
                </button>
              ),
            }}
          />
        )}
        onChange={(event, value) => {
          if (value) {
            navigate(`/album/${value.slug}`);
          }
        }}
        ListboxComponent={Listbox}
        renderOption={(props, option) => {
          const artists = option.songs.reduce((acc, curr) => {
            acc.push(...curr.artists);
            return acc;
          }, []);
          return (
            <li {...props} className={styles.listElement}>
              <div>
                <p className={styles.albumTitle}>{option.title}</p>
                <p className={styles.albumArtists}>
                  {truncate(artists.join(", "), 40)}
                </p>
              </div>
            </li>
          );
        }}
      />
    </div>
  );
}

export default Search;