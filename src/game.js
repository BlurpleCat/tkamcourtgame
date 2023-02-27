module.exports.default = async (println, nextInt) => {
  // Introduction to the game
  println("Welcome to the To Kill A Mockingbird court case game!");
  println("You will play as Atticus Finch, a lawyer defending a black man named Tom Robinson.");
  println("Your goal is to prove Tom Robinson's innocence in court.");
  println("You will face challenges and make decisions throughout the trial that may affect the outcome of the case.");
  println("Let's begin!\n");
  
  // Variables for the game
  let evidence = 0; // number of pieces of evidence collected
  let witness1 = 0; // witness testimony for Mayella Ewell
  let witness2 = 0; // witness testimony for Tom Robinson
  let verdict = false; // true if Tom Robinson is found innocent
  
  // First challenge: Collect evidence
  println("Your first challenge is to collect evidence to prove Tom Robinson's innocence.");
  println("You can choose to visit the scene of the crime, talk to witnesses, or gather physical evidence.\n");
  println("What will you do?\n");
  
  // Collect evidence options
  println("1. Gather physical evidence");
  println("2. Talk to witnesses\n");
  
  // User input for collecting evidence
  let evidenceChoice = await nextInt();
  if (evidenceChoice == 1) {
      println("\nYou gather physical evidence, including a bruise on Mayella Ewell's face that looks like it came from a left-handed person. You also find footprints that don't match Tom Robinson's.");
      evidence++;
      evidence++;
  } else if (evidenceChoice == 2) {
      println("\nYou talk to Mayella Ewell and she changes her story multiple times.");
      println("You also talk to Tom Robinson, who maintains his innocence.");
      witness1++;
      witness2++;
  }
  
  // Second challenge: Cross-examine witnesses
  println("\nNow that you have collected evidence, it's time to cross-examine the witness in court.");
  println("Mayella Ewell is the prosecution's witness. How will you question her?\n");
  
  // Cross-examination options for Mayella Ewell
  println("1. Ask about the bruises on her face");
  println("2. Ask about her relationship with Tom Robinson");
  println("3. Ask about her father, Bob Ewell\n");
  
  // User input for cross-examining Mayella Ewell
  let mayellaChoice = await nextInt();
  if (mayellaChoice == 1) {
      println("Mayella Ewell becomes defensive and says she got the bruises from falling down.\n");
  } else if (mayellaChoice == 2) {
      println("Mayella Ewell becomes angry and denies having any relationship with Tom Robinson.\n");
      witness1--;
  } else if (mayellaChoice == 3) {
      println("Mayella Ewell becomes evasive and refuses to answer questions about her father.\n");
      witness1--;
  }
  
  // Third challenge: Defend Tom Robinson
  println("Next, it's time to defend Tom Robinson.");
  println("You can choose to present evidence or call witnesses to the stand.");
  println("What will you do?\n");
  
  // Defend Tom Robinson options
  println("1. Present evidence");
  println("2. Call witnesses\n");
  
  // User input for defending Tom Robinson
  let defendChoice = await nextInt();
  if (defendChoice == 1) {
      println("You present the footprints and the bruise on Mayella Ewell's face as evidence that Tom Robinson is innocent.\n");
      evidence++;
  } else if (defendChoice == 2) {
      println("You call Tom Robinson to the stand and he tells his side of the story.\n");
      witness2++;
  }
  
  // Final challenge: Closing argument
  println("\nIt's time for your closing argument. What will you say?\n");
  
  // Closing argument options
  println("1. Appeal to the jury's sense of justice");
  println("2. Point out the inconsistencies in the prosecution's case");
  println("3. Emphasize the importance of the rule of law\n");
  
  // User input for closing argument
  let argumentChoice = await nextInt();
  if (argumentChoice == 1) {
      println("You appeal to the jury's sense of justice and ask them to do the right thing.\n");
  } else if (argumentChoice == 2) {
      println("You point out the inconsistencies in the prosecution's case and ask the jury to consider the evidence.\n");
  } else if (argumentChoice == 3) {
      println("You emphasize the importance of the rule of law and remind the jury that everyone deserves a fair trial.\n");
  }
  
  // Verdict
  println("The jury has reached a verdict...");
  if (witness1 <= 0 && witness2 > 0 && evidence >= 2) {
      println("Tom Robinson is found guilty.");
      verdict = false;
  } else {
      println("Tom Robinson is found guilty.");
  }
  
  // End of game
  if (verdict) {
      println("It's 1930s Alabama where racial prejudice runs wild did you really expect to win?");
  } else {
      println("It's 1930s Alabama where racial prejudice runs wild did you really expect to win?");
  }
  println("\nThank you for playing!");
}