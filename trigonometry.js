[
    {
        trigger: /([^\\])(arcsin|sin|asin|arccos|cos|acos|arctan|tan|atan|csc|sec|cot)/,
        replacement: "[[0]]\\[[1]]",
        options: "rmA",
        description: "Add backslash before trig funcs"
    },

    {
        trigger: /\\(arcsin|sin|asin|arccos|cos|acos|arctan|tan|atan|csc|sec|cot)([A-Za-gi-z])/,
        replacement: "\\[[0]] [[1]]", options: "rmA",
        description: "Add space after trig funcs. Skips letter h to allow sinh, cosh, etc."
    },

    {
        trigger: /\\(sinh|cosh|tanh|coth)([A-Za-z])/,
        replacement: "\\[[0]] [[1]]", options: "rmA",
        description: "Add space after hyperbolic trig funcs"
    },
]