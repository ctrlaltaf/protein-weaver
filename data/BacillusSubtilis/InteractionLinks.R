library(tidyverse)
setwd("~/Desktop/GitHub_Repos/protein-weaver/data/BacillusSubtilis/")

bsub_interactome <- read_tsv("interactome_txid224308_2024-06-06.txt")
bsub_interactome$link <- paste(paste("224308", gsub("_", "", bsub_interactome$protein_1_locus), sep="."), paste("224308", gsub("_", "", bsub_interactome$protein_2_locus), sep="."),sep="/")
write_tsv(bsub_interactome, "interactome_txid224308_2024-07-30.txt")

bsub_regulations <- read_csv("regulatory_txid224308_2024-07-31.csv")
bsub_regulations$link <- paste(paste("224308", gsub("_", "", bsub_regulations$regulator_locus), sep="."), paste("224308", gsub("_", "", bsub_regulations$gene_locus), sep="."),sep="/")
write_tsv(bsub_regulations, "regulatory_txid224308_2024-07-31.txt")