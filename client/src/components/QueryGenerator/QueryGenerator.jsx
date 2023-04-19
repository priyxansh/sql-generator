import React, { useState } from "react";
import "./QueryGenerator.css";

export const QueryGenerator = () => {
    const [query, setQuery] = useState("");
    const generateQuery = async (queryDescription) => {
        const response = await fetch("http://localhost:3005/generate", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            method: "POST",
            body: JSON.stringify({ queryDescription: queryDescription }),
        });
        const query = (await response.json()).response;
        setQuery(query.slice(2));
    };

    return (
        <main>
            <section className="query-generator">
                <h1>Generate SQL using AI</h1>
                <QueryInputForm generateQuery={generateQuery} />
                <QueryDisplay query={query} />
            </section>
        </main>
    );
};

const QueryInputForm = ({ generateQuery }) => {
    const [queryDescription, setQueryDescription] = useState("");
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", queryDescription);
        generateQuery(queryDescription);
    };

    return (
        <form className="query-input-form" onSubmit={onSubmit}>
            <textarea
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

const QueryDisplay = ({ query }) => {
    return <p className="query-display">{query}</p>;
};
