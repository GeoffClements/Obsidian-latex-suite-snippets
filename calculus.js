[
    // { trigger: "par", replacement: "\\frac{\\partial ${0:y}}{\\partial ${1:x}} $2", options: "m" },
    // { trigger: /pa([A-Za-z])([A-Za-z])/, replacement: "\\frac{ \\partial [[0]] }{ \\partial [[1]] } ", options: "rm" },
    // { trigger: "ddt", replacement: "\\frac{\\mathrm{d}}{\\mathrm{d}t} ", options: "mA" },

    { trigger: /([^\\])int/, replacement: "[[0]]\\int", options: "mA", priority: -1 },
    { trigger: "\\int", replacement: "\\int $0 \\, \\mathrm{d}${1:x} $2", options: "m" },
    { trigger: "dint", replacement: "\\int_{${0:0}}^{${1:1}} $2 \\, \\mathrm{d}${3:x} $4", options: "mA" },
    { trigger: "oint", replacement: "\\oint", options: "mA" },
    { trigger: "iint", replacement: "\\iint", options: "mA" },
    { trigger: "iiint", replacement: "\\iiint", options: "mA" },
    { trigger: "oinf", replacement: "\\int_{0}^{\\infty} $0 \\, \\mathrm{d}${1:x} $2", options: "mA" },
    { trigger: "infi", replacement: "\\int_{-\\infty}^{\\infty} $0 \\, \\mathrm{d}${1:x} $2", options: "mA" },
]