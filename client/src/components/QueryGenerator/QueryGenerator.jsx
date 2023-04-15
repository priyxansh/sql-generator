import React, { useState } from "react";
import "./QueryGenerator.css";

export const QueryGenerator = () => {
  return (
    <main>
      <section className="query-generator">
        <h1>Generate SQL using AI</h1>
        <QueryInputForm />
      </section>
    </main>
  );
};

const QueryInputForm = () => {
  const [queryDescription, setQueryDescription] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", queryDescription);
  };

  return (
    <form className="query-input-form" onSubmit={onSubmit}>
      <input
        type="text"
        id="query-description-input"
        placeholder="Describe your query"
        value={queryDescription}
        onChange={(e) => setQueryDescription(e.target.value)}
      />
      <button type="submit" className="generate-query">
        Generate Query
      </button>
    </form>
  );
};
