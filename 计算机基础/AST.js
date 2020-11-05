//一个解析简单表达式的编译器 age >= 45

function walker(expression = "") {
  if (typeof expression !== "string") {
    return;
  }
  let cursor = 0;
  return function() {
    if (cursor < expression.length) {
      return expression[cursor++];
    } else {
      return "end";
    }
  };
}

function initState(ch) {
  let state = "init";
  let tokenText = "";
  let tokenType = "";
  if (/^[a-zA-Z]$/.test(ch)) {
    state = "Id";
    tokenType = "Identifier";
    tokenText += ch;
  } else if (ch === ">") {
    state = "GT";
    tokenType = "GT";
    tokenText += ch;
  } else if (/^[0-9]$/.test(ch)) {
    state = "int";
    tokenType = "Int";
    tokenText += ch;
  } else if(ch === 'end') {
    state = "end";
  }
  return {
    state,
    tokenType,
    tokenText
  };
}

function compile(str) {
  let walk = walker(str);
  let ch = walk();
  let flag = true;
  let state = "init";
  let token = [];
  let tokenText = "";
  let tokenType = "";
  // init
  const res = initState(ch);
  state = res.state;

  while (flag) {
    switch (state) {
      case "init":
        const res = initState(ch);
        state = res.state;
        // stop walk
        if(state === 'end') {
          flag = false;
        }
        tokenType = res.tokenType;
        tokenText = res.tokenText;
        console.log('state change', res);
        break;
      case "Id":
        if (/^[a-zA-Z]$/.test(ch) || typeof ch === "number") {
          state = "Id";
          tokenType = "Identifier";
          tokenText += ch;
        } else {
          token.push({
            token: tokenType,
            text: tokenText
          });
          state = "init";
        }
        break;
      case "int":
        // || typeof +ch === "number")
        if (/^[0-9]$/.test(ch)) {
          state = "int";
          tokenType = "Int";
          tokenText += ch;
        } else {
          token.push({
            token: tokenType,
            text: tokenText
          });
          state = "init";
        }
        break;
      case "GT":
        if (ch === "=") {
          tokenType = "GE";
          state = "GT";
          tokenText += ch;
        } else {
          token.push({
            token: tokenType,
            text: tokenText
          });
          state = "init";
        }
        break;
      case "Ge":
        token.push({
          token: tokenType,
          text: tokenText
        });
        state = "init";
        break;
      case 'end':
          token.push({
            token: tokenType,
            text: tokenText
          });
          break;

      default:
        break;
    }
    // go to next char
    ch = walk();
    console.log('ch', ch);

  }
  console.log("token", token);
  return token;
}

compile('money > 145');


