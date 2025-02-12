[
    {
        trigger: /(!|N|n|c|C|x|X)?(L|l|;|u|d)(lr|l|r)a/, replacement: (match) => {
            let cancel = match[1];
            let style = match[2];
            let direction = match[3];
            let cancel_prefix;
            let cancel_suffix;

            switch (cancel) {
                case "!": case "N": case "n": case "c": case "C": {
                    cancel_prefix = "$\\cancel{ ";
                    cancel_suffix = " }$ ";
                    break;
                }
                case "x": case "X": {
                    cancel_prefix = "$\\xcancel{ ";
                    cancel_suffix = " }$ ";
                    break;
                }
                default: {
                    cancel_prefix = "$";
                    cancel_suffix = "$ ";
                }
            }

            switch (direction) {
                case "lr": { direction = "leftright"; break; }
                case "l": { direction = "left"; break; }
                case "r": { direction = "right"; break; }
            }

            switch (style) {
                case "L": { style = "\\Long"; break; }
                case "l": { style = "\\long"; break; }
                case ";": { style = "\\"; break; }
                case "u": {
                    if (direction == "right") { style = "\\ne"; direction = ""; }
                    if (direction == "left") { style = "\\nw"; direction = ""; }
                    if (direction == "leftright") style = "\\";
                    break;
                }
                case "d": {
                    if (direction == "right") { style = "\\se"; direction = ""; }
                    if (direction == "left") { style = "\\sw"; direction = ""; }
                    if (direction == "leftright") style = "\\";
                    break;
                }
            }

            return cancel_prefix + style + direction + "arrow" + cancel_suffix;

        }, options: "rtA"
    },

    {
        trigger: /(!|N|n|c|C|x|X)?(L|l|;|u|d)(lr|l|r)a/, replacement: (match) => {
            let cancel = match[1];
            let style = match[2];
            let direction = match[3];
            let cancel_prefix;
            let cancel_suffix;

            switch (cancel) {
                case "!": case "N": case "n": case "c": case "C": {
                    cancel_prefix = "\\cancel{ ";
                    cancel_suffix = " }";
                    break;
                }
                case "x": case "X": {
                    cancel_prefix = "\\xcancel{ ";
                    cancel_suffix = " }";
                    break;
                }
                default: {
                    cancel_prefix = "";
                    cancel_suffix = "";
                }
            }

            switch (direction) {
                case "lr": { direction = "leftright"; break; }
                case "l": { direction = "left"; break; }
                case "r": { direction = "right"; break; }
            }

            switch (style) {
                case "L": { style = "\\Long"; break; }
                case "l": { style = "\\long"; break; }
                case ";": { style = "\\"; break; }
                case "u": {
                    if (direction == "right") { style = "\\ne"; direction = ""; }
                    if (direction == "left") { style = "\\nw"; direction = ""; }
                    if (direction == "leftright") style = "\\";
                    break;
                }
                case "d": {
                    if (direction == "right") { style = "\\se"; direction = ""; }
                    if (direction == "left") { style = "\\sw"; direction = ""; }
                    if (direction == "leftright") style = "\\";
                    break;
                }
            }

            return cancel_prefix + style + direction + "arrow" + cancel_suffix;

        }, options: "rmA"
    },
]