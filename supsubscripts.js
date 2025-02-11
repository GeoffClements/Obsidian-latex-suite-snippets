[
    { trigger: "^", replacement: "^{$0}$1", options: "mA" },
    { trigger: "_", replacement: "_{$0}$1", options: "mA" },
    { trigger: /([A-Za-z])(\d)/, replacement: "[[0]]_{[[1]]}", options: "rmA", description: "Auto number subscript", priority: -1 },
    { trigger: /([A-Za-z])_(\d\d)/, replacement: "[[0]]_{[[1]]}", options: "rmA" },
    { trigger: /([^A-Za-z][A-Za-z])([A-Za-z])_/, replacement: "[[0]]_{[[1]]}", options: "rmA", priority: 1 },
    { trigger: "inv", replacement: "^{-1}", options: "mA" },
    { trigger: "stx", replacement: "_\\text{$0}", options: "mA" },

    { trigger: "//", replacement: "\\frac{$0}{$1}$2", options: "mA" },
    { trigger: "ee", replacement: "e^{$0}$1", options: "mA" },

    { trigger: /([A-Za-z])_(\d\d)/, replacement: "[[0]]_{[[1]]}", options: "rmA" },
    { trigger: /\\hat{([A-Za-z])}(\d)/, replacement: "\\hat{[[0]]}_{[[1]]}", options: "rmA" },
    { trigger: /\\vec{([A-Za-z])}(\d)/, replacement: "\\vec{[[0]]}_{[[1]]}", options: "rmA" },
    { trigger: /\\mathbf{([A-Za-z])}(\d)/, replacement: "\\mathbf{[[0]]}_{[[1]]}", options: "rmA" },

    {
        trigger: "([2-9]?)sqrt", replacement: (match) => {
            let order = match[1];

            if (order != "") order = "[" + order + "]";
            return "\\sqrt" + order + "{$0}";
        },
        options: "rmA"
    },
]