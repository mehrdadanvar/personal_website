---
date: 2024-01-01
title: Hyper Rx
slug: hyperrx
---

## Why and What Problem It Solves

Currently there are no freely accessible databases of drug product information for medical students tailored to their clinical needs. Moreover the existing technologies do offer and a programming interface for fast and efficient retrieval.My focus in designing the "Hyper" series of projects have been to consolidate all information needs of students in one platform. HyperRx will be part of the upcoming HyperQbank project. In addition, interested parties will have free access to **HyperRx** through an application programming interface (API) which is currently being developed. Please visit hyperrx.hyperneurox.com for more information on how to access the API.

## How It Works

Health Canada publishes and updates extracts of the **Drug Product Database** (DPD)
::ProseA{href="https://www.canada.ca/en/health-canada/services/drugs-health-products/drug-products/drug-product-database/what-data-extract-drug-product-database.html" target="\_blank"}
website.
::
The extracts are SQL-like text dumps of the DPD database including multiple tables which house information on drug products including identifiers, forms, strengths, and routes of administration and manufacturer information. For a full list of details please visit this
::ProseA{href="https://www.canada.ca/en/health-canada/services/drugs-health-products/drug-products/drug-product-database/read-file-drug-product-database-data-extract.html" target="\_blank"}
link
::
The extracts are downloaded through a python script and examined for the length of entries. At the moment there are around **22000 unique products** in the DPD which are filtered for prescription medication only and consolidated based on the **Active Ingredient** field. Due to the fact that each product inDPD reflects a very specific form of a medication, there may be many similarly structured entries in the database which introduce complexity in clinical settings. for instance, metronidazole oral tablets may have up to **10 different entries** owing to differences in manufacturer, strengths (250mg, 500mg). Similarly, there is up to n number of related pdf monographs with redundant information.
