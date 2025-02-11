[
    {
        trigger: "tayl",
        replacement: "${0:f}(${1:x} + ${2:h}) = ${0:f}(${1:x}) + ${0:f}'(${1:x})${2:h} + ${0:f}''(${1:x}) \\frac{${2:h}^{2}}{2!} + \\dots$3",
        options: "mA",
        description: "Taylor expansion"
    },
    {
        trigger: "binom",
        replacement: "(${0:a}+${1:b})^{${3:n}}={^${3:n}}C_{0}\\,${0:a}^{${3:n}}+{^${3:n}}C_{1}\\,${0:a}^{${3:n}-1}${1:b}+\\ldots+{^${3:n}}C_{${3:n}-1}\\,${0:a}${1:b}^{${3:n}-1}+{^${3:n}}C_{${3:n}}\\,b^{${3:n}}",
        options: "mA",
        description: "Binomial expansion"
    },
]