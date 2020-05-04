import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cheap"
        />
        <ResultsList
          results={filterResultsByPrice("$$")}
          title="Not Cheap"
        />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Dis Spansive"
        />
        {/* <ResultsList
          results={filterResultsByPrice("$$$$")}
          title="Booooojieeeeee"
        /> */}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
