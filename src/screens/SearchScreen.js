import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResulstList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, error] = useResults();

  const filterResultsByPrice = (price) => {
    //price === '$ || '$$ || '$$$
    return results.filter((result) => result.price === price);
  };
  return (
    <View style={styles.background}>
      <SearchBar
        term={term}
        onTermChange={(newTerms) => setTerm(newTerms)}
        onTermSubmit={() => searchAPI(term)}
      />
      {error ? <Text>{error}</Text> : null}
      <ScrollView>
        <ResulstList
          title="Cost Effective"
          results={filterResultsByPrice("$")}
        />
        <ResulstList title="Bit Pricier" results={filterResultsByPrice("$$")} />
        <ResulstList
          title="Big Spender"
          results={filterResultsByPrice("$$$")}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#fff",
    flex: 1,
  },
});

export default SearchScreen;
