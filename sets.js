[
    { trigger: "and", replacement: "\\cap", options: "mA" },
    { trigger: "orr", replacement: "\\cup", options: "mA" },
    { trigger: "inn", replacement: "\\in", options: "mA" },
    { trigger: "notin", replacement: "\\not\\in", options: "mA" },
    { trigger: "\\\\\\", replacement: "\\setminus", options: "mA" },
    { trigger: "sub=", replacement: "\\subseteq", options: "mA" },
    { trigger: "sup=", replacement: "\\supseteq", options: "mA" },
    { trigger: "eset", replacement: "\\emptyset", options: "mA" },
    { trigger: "set", replacement: "\\{$0\\}$1", options: "mA" },
    { trigger: "xist", replacement: "\\exists", options: "mA", priority: 1 },
    { trigger: "nxist", replacement: "\\nexists", options: "mA", priority: 1 },

    { trigger: "LL", replacement: "\\mathcal{L}", options: "mA" },
    { trigger: "HH", replacement: "\\mathcal{H}", options: "mA" },
    { trigger: "CC", replacement: "\\mathbb{C}", options: "mA" },
    { trigger: "RR", replacement: "\\mathbb{R}", options: "mA" },
    { trigger: "ZZ", replacement: "\\mathbb{Z}", options: "mA" },
    { trigger: "NN", replacement: "\\mathbb{N}", options: "mA" },

    { trigger: "Re", replacement: "\\mathrm{Re}", options: "mA" },
    { trigger: "Im", replacement: "\\mathrm{Im}", options: "mA" },
]