module.exports.default = async (println, nextInt) => {
  println("The game starts here");
  while (true) {
    const num = await nextInt();
    println(`You said ${num}`)
  }
}