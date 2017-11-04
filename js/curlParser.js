var curlParser = function(curlOptions){
    var splitArgumentsIntoCurlOptions = function(args){
        var options = [],
            isStillFlags = true,
            option = null,
            isOptionDisabled = false,
            newOption = null,
            config = null,
            isFirstIteration = true;

        for (var i = 0; i < args.length; i++) {
            var argument = args[i];

            if (argument === '--') {
                options.push({'name': '--', 'long': '--'});
                isStillFlags = false;
                continue;
            }

            if (isStillFlags && isLongOption(argument)) {
                argument = argument.toLowerCase();
                isOptionDisabled = isNegation(argument);
                option = argument.slice(isOptionDisabled ? 5 : 2);
                newOption = {'name': argument, 'long': option};

                if (curlOptions.long[option] === undefined) {
                    newOption.error = 'Option does not exist';
                } else {
                    config = curlOptions.long[option];
                    if (isOptionDisabled && config.type !== 'bool') {
                        newOption.error = 'Negation form is not possible for this option';
                        if (config.type == 'string') {
                            newOption.value = args[++i];
                        }
                    } else if (isOptionDisabled) {
                        newOption.isNegation = true;
                    } else if (config.type == 'string') {
                        newOption.value = args[++i];
                    }
                }
                options.push(newOption);

                continue;
            }

            if (isStillFlags && isShortOption(argument)) {
                // skip dash
                for (var j = 1; j < argument.length; j++) {
                    config = null;
                    isFirstIteration = j == 1;

                    option = argument[j];
                    if (argument[j+1] !== undefined) {
                        if (curlOptions.short[option + argument[j + 1]] !== undefined) {
                            option += argument[j + 1];
                            j++;
                        }
                    }

                    newOption = {'name': '-' + option};

                    if (curlOptions.short[option] === undefined) {
                        newOption.error = 'Option does not exist';
                        options.push(newOption);
                    } else {
                        newOption.long = curlOptions.short[option];

                        config = curlOptions.long[curlOptions.short[option]];
                        if (config.type == 'string') {
                            if (!isFirstIteration) {
                                newOption.error = 'Options with arguments cannot be used next to each other';
                            } else if (argument[j+1] !== undefined) {
                                newOption.value = argument.slice(j+1);
                            } else {
                                newOption.value = args[++i];
                            }
                        }

                        options.push(newOption);
                        if (config.type !== undefined && config.type == 'string') {
                            break;
                        }
                    }
                }

                continue;
            }

            options.push({'name' : '--url', 'value': argument, 'long': 'url'});
        }

        return options;
    };

    var isLongOption = function(argument){
        return argument[0] == '-' && argument[1] == '-';
    };

    var isNegation = function(argument){
        return isLongOption(argument) && argument.slice(2,5) === 'no-';
    };

    var isShortOption = function(argument){
        return argument[0] == '-' && argument[1] != '-';
    };

    return {
        parse: function(text){
            var result = {'error': false};

            var args = bashCommandParser().splitInputIntoArgs(text);
            if (!Array.isArray(args)) {
                result.error = args;
            } else if (args.shift() !== 'curl') {
                result.error = 'Not curl command';
            } else {
                result.options = splitArgumentsIntoCurlOptions(args);
            }

            return result;
        }
    };
};
