[
    // enter Display Math mode with a tag and a ^ thingy attached to it
    // { trigger: "tdm", replacement: "$\n$1\n\\tag{$0}$$\n^$0", options: "tA" },
    // add a tag (will replace "tag" in math mode with "\tag{type here}"
    { trigger: "tag", replacement: "\\tag{$0}$1", options: "mA" },
    // add an equivalent to a tag in text mode (will just type "(number)" and add a ^ thingy to it)
    // { trigger: "((\\d)+)tg", replacement: "$([[0]])$^[[0]]", options: "rA" },
    // easily link tags (will create a link to a ^ thingy)
    // { trigger: "((\\d)+)lk", replacement: "\[\[#^[[0]]\]\]", options: "rA" },
    { trigger: "((\\d)+)tg", replacement: "([[0]])", options: "rA" },
]