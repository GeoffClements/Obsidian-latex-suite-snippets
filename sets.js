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

    // repeat upper-case letters trigger mathbb or mathcal
    { trigger: /([A-GI-KM-Z])\1/, replacement: "\\mathbb{[[0]]}", options: "mA" },
    { trigger: "LL", replacement: "\\mathcal{L}", options: "mA" },
    { trigger: "HH", replacement: "\\mathcal{H}", options: "mA" },

    { trigger: "bb", replacement: "\\mathbb{$0}", options: "mA" },
    { trigger: "cal", replacement: "\\mathcal{$0}", options: "mA" },


    { trigger: "Re", replacement: "\\mathrm{Re}", options: "mA" },
    { trigger: "Im", replacement: "\\mathrm{Im}", options: "mA" },
]