import React, { useMemo } from "react";
import { useForm } from "../../hooks/useForm";
import { useLocation, useNavigate } from "react-router-dom";
import { getHeroesByName } from "../helpers/getHeroesByName";
import { HeroCard } from "../components";

const useQueryParams = () => {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
};

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = useQueryParams();
  const heroes = getHeroesByName(queryParams.get("q") || "");
  const q = queryParams.get("q") || "";
  const { searchText, onInputChange, onResetForm } = useForm({
    searchText: "",
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    navigate("?q=" + searchText);
    console.log({ searchText });
  };

  return (
    <>
      <h1>Search Page</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              name="searchText"
              autoComplete="off"
              className="form-control"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-primary mt-1">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          <div
            className="alert alert-primary"
            style={{ display: q === "" ? "" : "none" }}
          >
            Search a hero
          </div>
          <div
            className="alert alert-danger"
            style={{
              display: q.length > 0 && heroes.length === 0 ? "" : "none",
            }}
          >
            No hero found with <b>{queryParams.get("q") || ""}</b>
          </div>
          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
