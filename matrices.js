[
    { trigger: /([^\\])(det)/, replacement: "[[0]]\\[[1]]", options: "rmA" },
    { trigger: "trace", replacement: "\\mathrm{Tr}", options: "mA" },

    // block math
    { trigger: "pmat", replacement: "\\begin{pmatrix}\n$0\n\\end{pmatrix}", options: "MA" },
    { trigger: "bmat", replacement: "\\begin{bmatrix}\n$0\n\\end{bmatrix}", options: "MA" },
    { trigger: "Bmat", replacement: "\\begin{Bmatrix}\n$0\n\\end{Bmatrix}", options: "MA" },
    { trigger: "vmat", replacement: "\\begin{vmatrix}\n$0\n\\end{vmatrix}", options: "MA" },
    { trigger: "Vmat", replacement: "\\begin{Vmatrix}\n$0\n\\end{Vmatrix}", options: "MA" },
    { trigger: "matrix", replacement: "\\begin{matrix}\n$0\n\\end{matrix}", options: "MA" },

    // inline
    { trigger: "pmat", replacement: "\\begin{pmatrix}$0\\end{pmatrix}", options: "nA" },
    { trigger: "bmat", replacement: "\\begin{bmatrix}$0\\end{bmatrix}", options: "nA" },
    { trigger: "Bmat", replacement: "\\begin{Bmatrix}$0\\end{Bmatrix}", options: "nA" },
    { trigger: "vmat", replacement: "\\begin{vmatrix}$0\\end{vmatrix}", options: "nA" },
    { trigger: "Vmat", replacement: "\\begin{Vmatrix}$0\\end{Vmatrix}", options: "nA" },
    { trigger: "matrix", replacement: "\\begin{matrix}$0\\end{matrix}", options: "nA" },

    //identity
    {
        trigger: /iden(\d)/, replacement: (match) => {
            const n = match[1];

            let arr = [];
            for (let j = 0; j < n; j++) {
                arr[j] = [];
                for (let i = 0; i < n; i++) {
                    arr[j][i] = (i === j) ? 1 : 0;
                }
            }

            let output = arr.map(el => el.join(" & ")).join(" \\\\\n");
            output = `\\begin{pmatrix}\n${output}\n\\end{pmatrix}`;
            return output;
        }, options: "mA", description: "N x N identity matrix"
    },

    // expand block math
    {
        trigger: /(\d)(\d)([p|b|B|v|V]?)mat/,
        replacement: (match) => {
            const n = match[1], m = match[2], c = match[3];

            let arr = [];
            for (let j = 0; j < n; j++) {
                arr[j] = [];
                for (let i = 0; i < m; i++) {
                    arr[j][i] = `\${${i + j * m}:${String.fromCharCode(97 + i + j * m)}}`;
                }
            }

            let output = arr.map((el) => el.join(" & ")).join(" \\\\\n");
            output = `\\begin{${c}matrix}\n${output} \n\\end{${c}matrix}`;
            return output;
        },
        options: "MA",
        description: "N x M matrix",
    },

    // expand inline
    {
        trigger: /(\d)(\d)([p|b|B|v|V]?)mat/,
        replacement: (match) => {
            const n = match[1], m = match[2], c = match[3];

            let arr = [];
            for (let j = 0; j < n; j++) {
                arr[j] = [];
                for (let i = 0; i < m; i++) {
                    arr[j][i] = `\${${i + j * m}:${String.fromCharCode(97 + i + j * m)}}`;
                }
            }

            let output = arr.map((el) => el.join(" & ")).join(" \\\\ ");
            output = `\\begin{${c}matrix} ${output} \\end{${c}matrix}`;
            return output;
        },
        options: "nA",
        description: "N x M matrix",
    },
]