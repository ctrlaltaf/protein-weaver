import { React, useEffect, useState } from "react";
import { MdError, MdBugReport } from "react-icons/md";
import { IconContext } from "react-icons";

export default function QueryError({ errorMessage, query }) {
    const [showBugReportMessage, setShowBugReportMessage] = useState(false);
    const [errorSuggestion, setErrorSuggestion] = useState("");
    useEffect(() => {
        if (errorMessage == "Source protein not found.") {
            setErrorSuggestion("unknownProtein");
        } else if ("GO term not found.") {
            setErrorSuggestion("unknownGoTerm");
        }
    }, [errorMessage]);
    return (
        <div className="query-error">
            <IconContext.Provider
                value={{
                    size: "3em",
                    color: "black",
                }}
            >
                {" "}
                <MdError className="error-icon" />
            </IconContext.Provider>
            <h3>
                We encountered an error while retrieving the network. <br></br>{" "}
                Reason: {errorMessage}
                <br></br>{" "}
                {errorSuggestion == "unknownProtein" && (
                    <div>
                        Search for protein in Uniprot{" "}
                        <a
                            href={
                                "https://www.uniprot.org/uniprotkb?query=" +
                                query.protein
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            here
                        </a>
                    </div>
                )}
                {errorSuggestion == "unknownGoTerm" && (
                    <div>
                        Search for go term in Amigo{" "}
                        <a
                            href={
                                "https://amigo.geneontology.org/amigo/search/ontology?q=" +
                                query.goTerm
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            here
                        </a>
                    </div>
                )}
            </h3>
            <IconContext.Provider
                value={{
                    size: "2em",
                    color: showBugReportMessage ? "grey" : "black",
                }}
            >
                <div
                    className="bug-report"
                    onMouseEnter={() => setShowBugReportMessage(true)}
                    onMouseLeave={() => setShowBugReportMessage(false)}
                >
                    <a
                        href="https://github.com/Reed-CompBio/protein-weaver/issues/new"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <MdBugReport />
                    </a>
                    {showBugReportMessage && (
                        <div className="bug-report-message">
                            File a GitHub issue! (opens new tab)
                        </div>
                    )}
                </div>
            </IconContext.Provider>
        </div>
    );
}
