import React, { useState, useEffect } from "react";
import MainLayout from "../layout/MainLayout";

export default function Download() {
    const [txid, setTxid] = useState("txid224308");
    const [species, setSpecies] = useState("B. subtilis");
    const speciesDict = {
        txid224308: "B. subtillis",
        txid7227: "D. melanogaster",
        txid7955: "D. rerio",
        txid559292: "S. cerevisiae",
        txid6239: "C. elegans",
    };

    const handleSpeciesChange = (event) => {
        const txid = event.target.value
        setTxid(txid);
        setSpecies(speciesDict[txid])
    };

    async function handleDownload(e) {
        const file = e.target.textContent;
        if (file.includes("complete")) {
            console.log(`API call on /api/downloads/${file}`);
        } else {
            console.log(
                `API call on /api/downloads/${txid}_${file}`
            );
        }
    }

    return (
        <div>
            <MainLayout>
                <div className="main-layout-body">
                    <div className="download-body">
                        <h2 className="download-title">Download Page</h2>
                        <select
                            className="species-input-container"
                            value={txid}
                            onChange={handleSpeciesChange}
                        >
                            <option value="txid224308">
                                B. subtilis (224308)
                            </option>
                            <option value="txid7227">
                                D. melanogaster (7227)
                            </option>
                            <option value="txid7955">D. rerio (7955)</option>
                            <option value="txid559292">
                                S. cerevisiae (559292)
                            </option>
                            <option value="txid6239">C. elegans (6239)</option>
                        </select>
                        <div>
                            <div className="download-table-row">
                                <div className="download-table-column">
                                    File
                                </div>
                                <div className="download-table-column">
                                    Description
                                </div>
                            </div>
                            <div className="download-table-row">
                                <div className="download-table-column">
                                    <p onClick={handleDownload}>
                                        protein_protein_interaction.csv
                                    </p>
                                </div>
                                <div className="download-table-column">
                                    Complete edge file of protein-protein
                                    interactions for{" "}
                                    <strong>
                                        <em>{species}</em>
                                    </strong>
                                </div>
                            </div>
                            <div className="download-table-row">
                                <div className="download-table-column">
                                    <p onClick={handleDownload}>
                                        regulatory_interaction.csv
                                    </p>
                                </div>
                                <div className="download-table-column">
                                    Complete edge file of
                                    regulatory_interactions for{" "}
                                    <strong>
                                        <em>{species}</em>
                                    </strong>
                                </div>
                            </div>
                            <div className="download-table-row">
                                <div className="download-table-column">
                                    <p onClick={handleDownload}>
                                        mixed_interaction.csv
                                    </p>
                                </div>
                                <div className="download-table-column">
                                    Complete edge file with both protein-protein
                                    and regulatory interactions for{" "}
                                    <strong>
                                        <em>{species}</em>
                                    </strong>
                                </div>
                            </div>
                            <div className="download-table-row">
                                <div className="download-table-column">
                                    <p onClick={handleDownload}>
                                        direct_go_annotation.csv
                                    </p>
                                </div>
                                <div className="download-table-column">
                                    Direct GO annotations for{" "}
                                    <strong>
                                        <em>{species}</em>
                                    </strong>
                                </div>
                            </div>
                            <div className="download-table-row">
                                <div className="download-table-column">
                                    <p onClick={handleDownload}>
                                        go_annotation.csv
                                    </p>
                                </div>
                                <div className="download-table-column">
                                    All GO annotations for{" "}
                                    <strong>
                                        <em>{species}</em>
                                    </strong>
                                </div>
                            </div>
                            {/* <div className="download-table-row">
                                <div className="download-table-column">
                                    <p onClick={handleDownload}>
                                        complete_gene_ontology_annotation.csv
                                    </p>
                                </div>
                                <div className="download-table-column">
                                    Complete GO annotation for all
                                    species
                                </div>
                            </div> */}
                            {/*
                            Provide link to GO hierarchy download:
                            https://geneontology.org/docs/download-ontology/
                             */}
                            {/* <div className="download-table-row">
                                <div className="download-table-column">
                                    <p onClick={handleDownload}>
                                        complete_gene_ontology_hierarchy.csv
                                    </p>
                                </div>
                                <div className="download-table-column">
                                    Complete GO hierarchy
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </MainLayout>
        </div>
    );
}