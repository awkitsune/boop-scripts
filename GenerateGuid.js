/**
  {
    "api":1,
    "name":"Generate UUID",
    "description":"Generates NOT crypto-safe UUID",
    "author":"awkitsune",
    "icon":"kebab",
    "tags":"generate,guid,uuid"
  }
**/

function main(state) {
  let date = new Date().getTime()

  var guid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (char) => {
    let res = Math.random() * 16

    res = Math.floor((date + res) % 16)
    date = Math.floor(date / 16)

    return (char == "x" ? res : Math.floor(res / 4 + 8)).toString(16)
  })

  try {
    state.insert(`${guid}\n`)
    //state.postInfo(`UUID generated`)
  } catch (error) {
    state.postError(`${error}`)
  }
}
