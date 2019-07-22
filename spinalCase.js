function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  let reg = /[\s_]+|(?=[A-Z])/g // split the string where space, underscore or any upperCase alphabet comes and the join with '-'
  return str.split(reg).join('-').toLowerCase()
}

console.log(spinalCase("thisIsSpinalTap")) // logs out this-is-spinal-tap

console.log(spinalCase("AllThe-small Things")) // logs out all-the-small-things
