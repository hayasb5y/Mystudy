const torahack = 'torahack'
const charahack = 'charahack'
const regex = RegExp('tora*')

// console.log(regex.test(torahack))
// console.log(regex.test(charahack))

const istora = regex.test(torahack)

if(istora) {
    console.log("I am torahack")
} else {
        console.log("I am not torahack")
    }
