//// -------------------- Completing the Game--------------------
// document.getElementById('up').addEventListener('click', () => moveUp())
// document.getElementById('right').addEventListener('click', () => moveRight())
// document.getElementById('down').addEventListener('click', () => moveDown())
// document.getElementById('left').addEventListener('click', () => moveLeft())

// const moveUp = () => {
//     const block = document.getElementById("block")
//     let down = parseInt(block.style.bottom) || 0
//     down += 15
//     block.style.bottom = down + "px"
// }

// const moveRight = () => {
//     const block = document.getElementById("block")
//     let left = parseInt(block.style.left) || 0
//     left += 15
//     block.style.left = left + "px"
// }
// const moveDown = () => {
//     const block = document.getElementById("block")
//     let up = parseInt(block.style.top) || 0
//     up += 15
//     block.style.top = up + "px"
// }
// const moveLeft = () => {
//     const block = document.getElementById("block")
//     let right = parseInt(block.style.right) || 0
//     right += 15
//     block.style.right = right + "px"
// }



//// -------------------- Reservations--------------------
// const reservations = {
//     Bob: { claimed: false },
//     Ted: { claimed: true }
// }
// const isReserved = function () {
//     const name = document.getElementById('name').value
//     const reply = document.createElement('div')
//     if (reservations[name]) {
//         if (reservations[name].claimed) {
//             reply.innerHTML = "Hmm, someone already claimed this reservation";
//             document.getElementById('container').appendChild(reply)
//         } else {
//             reply.innerHTML = `Welcome, ${name}`;
//             document.getElementById('container').appendChild(reply)
//         }
//     } else {
//         reply.innerHTML = "You have no reservation"
//         document.getElementById('container').appendChild(reply)
//     }
// }
