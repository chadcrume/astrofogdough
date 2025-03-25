# FogDough DeFi prototype

Deploying to Vercel

## Local dev
yarn install
yarn run dev

## About Layout Grid

The <Layout> component establishes a grid, adapted for different breakpoints.
* Right now it is a 3 column grid at large size (1fr 1fr 0.7fr), then 2 column at medium, and 1 at small.
* <Layout> should contain either <LayoutSection> componenent children only, or a single <NavPage> with <LayoutSection> componenent children. Although it is possible to use any component child; they will layout as grid items. The logo hero on the homepage is an example.

The <LayoutSection> componenent wraps a grid item. It has a ```type``` prop to define variations on how the item fits the grid. 
* "single-unit" - The item fits a basic grid unit
* "left" - First column
* "middle" - Fits middle column (lg) or right column (md)
* "middle-left" - Fits middle column (lg) or left column (md)
* "right" - Fits right column (lg and md)
* "med-left" - Fits first 2 columns (lg) or first column
* "med-right" - Fits last 2 columns (lg) or last column
* "big-left" - Fits first 2 columns (lg) or all columns
* "big-right" - Fits last 2 columns (lg) or all columns
* "full" - Spans all columns
* "subgrid" - Continues the grid for children of <LayoutSection>
* "subgrid-left" - Continues the grid in first 2 columns (lg) only
* "subgrid-right" - Continues the grid in last 2 columns (lg) only

The <NavPag> component uses subgrid so it can contain <LayoutSection> children

The <Grid> component uses subgrid so it lays out its slot items on the <Layout> grid.

