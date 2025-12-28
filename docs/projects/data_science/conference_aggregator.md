# Conference Aggregator

## Project Summary

In November 2025, I decided that I wanted to develop a tool that I could use to help me find conferences where I could submit my research work to. There are existing tools such as WikiCFP[^1] or ConfSearch[^2], and whilst they are functional and do the job, my requirements were different:

1. My ideal conference search tool takes into account the Finnish Publication Forum rating and classification system (JUFO) which assesses the quality of a publication.
2. The tool could offer suggestions for alternative forums if a deadline appears too soon.
3. There should be ways to compare between different conferences.

These were not the main features that I wanted, but the main ones which were lacking from other search tools. Of course, I wanted a basic search functionality, a way to see conference details and upcoming deadlines. 

!!! success "Skills developed"
    Python data analysis (pandas, polars), PostgresSQL (psycopg2), Python (multi-threading), JavaScript (Node.js)

## Project Development

Julkaisufoorumi, or just Publication Forum, is the Finnish rating and classification system for publications. Prior to 2026[^3], the classification scale was broken into four levels:

- `1`, the basic level,
- `2`, the leading level,
- `3`, the highest level,
- `0`, the lowest level for publications which do not meet the criteria for level 1.

The main change to the system post-2025 will be that level 0 and level 3 are removed. This does not impact my tool since I took the list of JUFO-classified publications prior to these changes and performed data analysis to create my own database of conferences.

This dataset was exported from the JUFO portal[^4], and contains a large combination of scientific series, book publishers, professional and general series, and conferences. Together, this totals around 40,317 items, or a `.csv` file of around 24.9 MB. I performed some basic data cleaning using a Jupyter Labs instance spun up on my M2 16GB MacBook Air, i.e., dropping unnecessary columns, and then filtering the dataset to a) conferences, and b) the JUFO discipline category of the publication containing the word "Computer". I was initially using `pandas` but since I was learning to use `polars`, I switched to that instead.

My goal for this project was to make a web tool which requires a web stack to be decided. I settled on Node.js for deploying the front-end, and PostgreSQL for storing the data. With the cleaned JUFO data, I created a local PostgreSQL server and database on my laptop, and archived the data into a table.

The next step was to try to find the basic data that you would associate with conferences, e.g., when deadlines are, where the conference is taking place, and what the main topics are for that year's conference.

## References

[^1]: [http://www.wikicfp.com/cfp/home](http://www.wikicfp.com/cfp/home){:target="_blank"}
[^2]: [https://confsearch.ethz.ch](https://confsearch.ethz.ch{:target="_blank"}
[^3]: (https://julkaisufoorumi.fi/en/news/publication-forum-steering-group-decided-changes-classification-system)[https://julkaisufoorumi.fi/en/news/publication-forum-steering-group-decided-changes-classification-system]{:target="_blank"}
[^4]: [https://jfp.csc.fi/jufoportal](https://jfp.csc.fi/jufoportal){:target="_blank"}
