const str = `
010-1234-5678
thesecon@gmail.com
https://www.naver.com/?apiKey=asdasc60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
동해물과_백두산이_마르고_닳도록
`


// const regexp = new RegExp('the','gi');
// const regexp =/the/gi

const h =`  the hello  world        !

`

console.log(str.match(/(?<=@).{1,}/g))