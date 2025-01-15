# Protein Scorecard Application Documentation

## Problem Statement

The goal is to develop a Scorecard Application for biomolecules, specifically focusing on proteins known as antibodies. Antibodies are therapeutic molecules used to recognize other entities (e.g., proteins, molecules) and fight diseases like cancer. Each antibody has unique physiochemical characteristics that determine its usability, expressibility, and industrial applicability.

The application will:
1. Display a scorecard of antibodies with various physiochemical properties.
2. Allow visualization of antibody structures and their corresponding properties in 3D.
3. Provide insights into why certain properties fall outside desired ranges, enabling optimization via mutational changes.

## Core Objectives
1. **Scorecard Display**: Render a table containing antibody IDs, properties, and scores with visual indicators (e.g., green, amber, red) based on score ranges.
2. **3D Structure Visualization**: Allow users to visualize antibody structures in 3D, color-coded based on specific properties (e.g., hydrophobicity, charge distribution).
3. **Optimization Insights**: Help scientists identify and optimize undesirable properties by visualizing their location on the 3D structure.

## Features

### 1. Scorecard Table
- **Rows**: Antibody IDs or names.
- **Columns**: Properties such as hydrophobicity, temperature stability, charge patches, solubility, and aggregation tendencies.
- **Scoring Indicators**:
    - **Green**: Scores within optimal range.
    - **Amber**: Scores close to threshold values (5% deviation).
    - **Red**: Scores outside acceptable ranges.
- **Interactive Buttons**:
    - "View Structure" button to visualize the corresponding antibody structure.

### 2. 3D Protein Visualization Panel
- Display the protein’s 3D structure using the **Mol (MolStar)** JavaScript library.
- Enable coloring based on specific properties such as:
    - Hydrophobicity
    - Charge distribution
- Provide detailed insights into the distribution of these properties on the protein’s surface.
- Allow mutation-based recalculations to observe changes.

### 3. Optimization Workflow
- **Scientists can**:
    - Identify undesirable properties (e.g., red or amber scores).
    - Visualize the affected regions on the 3D structure.
    - Suggest mutations and re-evaluate the structure using updated scores.

## Data Requirements

### 1. Input Data:
- Antibody characteristics and scores in JSON format.
- 3D structure files in **PDB (Protein Data Bank)** format.

### 2. APIs:
- Fetch scorecard data.
- Retrieve PDB files for protein structures.
- Fetch residue-specific properties for proteins.

### Example Data

#### Scorecard JSON Example:
```json
{
  "antibodies": [
    {
      "id": "A001",
      "properties": {
        "hydrophobicity": 0.8,
        "charge": -1.2,
        "solubility": 0.9
      },
      "scores": {
        "hydrophobicity": "green",
        "charge": "red",
        "solubility": "amber"
      }
    }
  ]
}
