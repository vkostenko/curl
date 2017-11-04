var bashCommandParser = function(){
    var isWhitespace = function(char){
        return /\s/.test(char);
    };

    return {
        splitInputIntoArgs: function(text){
            text = text.trim();
            var argStart = null,
                args = [],
                insideQuote = null,
                isEscaped = false;

            for (var i = 0; i < text.length; i++) {
                var char = text[i];

                if (char == '\\') {
                    if (insideQuote) {
                        isEscaped = !isEscaped;
                    }

                    continue;
                }

                if (isWhitespace(char)) {
                    if (!insideQuote && argStart !== null) {
                        args.push(text.slice(argStart, i));
                        argStart = null;
                    }
                } else if (!isEscaped && (char === '"' || char === "'")) {
                    if (!insideQuote) {
                        insideQuote = char;
                        argStart = i;
                    } else if (insideQuote === char) {
                        insideQuote = null;
                        args.push(text.slice(argStart, i));
                        argStart = null;
                    }
                } else if (!insideQuote && argStart === null) {
                    argStart = i;
                }

                isEscaped = false;
            }

            if (argStart !== null) {
                args.push(text.slice(argStart))
            }

            return args;
        }
    };
};