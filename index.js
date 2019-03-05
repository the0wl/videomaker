var readLine = require('readline-sync')

function main() {
    
    const videoSearchContent = {}
    const videoSearchPrefix = ['What is', 'Who is']

    videoSearchContent.word = readLine.question('Word to search? ')
    videoSearchContent.prefix = readLine.keyInSelect(videoSearchPrefix, 'Prefix for search:')

    console.log(videoSearchPrefix[videoSearchContent.prefix] + ' ' + videoSearchContent.word)
}

main()