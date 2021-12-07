let str = `'Hello world 'aren't''`
str = str.replace(/\B'|'\B/g, "\"");
console.log(str);
