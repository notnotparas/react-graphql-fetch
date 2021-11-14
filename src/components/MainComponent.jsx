import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ShowInfoCard from "./ShowInfoCard";

function Main() {
    const [data, setData] = useState(Object);
    const apiEndpoint = "https://tmdb.apps.quintero.io/";
    const query = `
        query FetchData($term: String!){
            tv{
                search(term:$term){
                  edges{
                    node{
                        id
                        originalName
                    }
                  }
                }
              }
        }
    `;

    const getData = (term) => {
        fetch(apiEndpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                query,
                variables: { term }
            })
        })
            .then(res => res.json())
            .then((data) => setData(data))
            .catch(console.error);
    };
    console.log(data)
    return (
        <div>
            <SearchBar getData={getData} />
            {data.data ? data.data.tv.search.edges.map(({ node }) => (
                <ShowInfoCard key={node.id} node={node} />
            )) : <div></div>
            }
        </div>
    );

}

export default Main;