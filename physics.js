// requires latex physics module
[
    { trigger: "kbt", replacement: "k_{B}T", options: "mA" },
    { trigger: "msun", replacement: "M_{\\odot}", options: "mA" },
    { trigger: "dag", replacement: "^{\\dagger}", options: "mA" },
    { trigger: "o+", replacement: "\\oplus ", options: "mA" },
    { trigger: "ox", replacement: "\\otimes ", options: "mA" },
    { trigger: "bra", replacement: "\\bra{$0} $1", options: "mA" },
    { trigger: "ket", replacement: "\\ket{$0} $1", options: "mA" },
    { trigger: "brk", replacement: "\\braket{ $0 | $1 } $2", options: "mA" },
    { trigger: "outer", replacement: "\\ket{${0:\\psi}} \\bra{${0:\\psi}} $1", options: "mA" },

    { trigger: "[^\\\\]grad", replacement: "\\grad{$0}", options: "rmA" },

    // derivatives and partial derivatives
    {
        trigger: "([2-9]?)(p?)dv",
        replacement: (match) => {
            let order = match[1];
            let partial = match[2];

            if (order != "") order = `[${order}]`;

            return "\\" + partial + "dv" + order + "{$0}{$1}";
        },
        options: "rmA"
    },

    { trigger: "([^a-zA-Z])dd", replacement: "[[1]]\\dd ", options: "rmA" },
    
    { trigger: "\\\\(${GREEK})lapl", replacement: "\\laplacian{\\[[0]]}$0", options: "rmA" },
    { trigger: "([^${GREEK}])lapl", replacement: "[[0]]\\laplacian ", options: "rmA" },

    { trigger: "pu", replacement: "\\pu{$0}", options: "mA" },
]