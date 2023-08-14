// FETCH and READ the json disk file
fetch('./composers.json')
  .then(response => response.json())
  .then(composer => {
    // Loop through the array
    composer.forEach(composer => {
      console.log(`${composer.Fname} ${composer.Lname} is a famous composer from the ${composer.Era} era.`);
    });


    // 1. function death_Age(i) determines the age of the composer when they died and formats it into a string.
    function death_Age(i) {
      if(composer[i].DeathYear != null) {
        DeathAge = composer[i].DeathYear - composer[i].BirthYear;
        DeathString = `${composer[i].Lname} died at the age of ${DeathAge}.`
        return DeathString;
      }
      else {
        DeathString = "Composer is still alive!";
        return DeathString;
      };
    };

    console.log(death_Age(3));
    document.getElementById("deathage1").innerHTML = death_Age(3);
    console.log(death_Age(4));
    document.getElementById("deathage2").innerHTML = death_Age(4);
    

    // 2. function age_Today(i) determines the age that the composer is today OR it determines the age that the composer would be today if they were still alive.

    const currYear = new Date(2023);

    function composer_Age(i) {

      if(composer[i].DeathYear == null) { 
        // still alive
        Age = currYear - new Date(composer[i].BirthYear)
        AgeString = `${composer[i].Fname} ${composer[i].Lname} is still alive and is ${Age} years old!`
        return AgeString;
      }
      else {
        // composer is dead
        Age = currYear - new Date(composer[i].BirthYear)
        AgeString = `If ${composer[i].Fname} ${composer[i].Lname} were still alive today, he would be ${Age} years of age!`
        return AgeString;
      };
    };

    console.log(composer_Age(1));
    document.getElementById("compage1").innerHTML = composer_Age(1);
    console.log(composer_Age(6));
    document.getElementById("compage2").innerHTML = composer_Age(6);

    // 3. function notable_Works(i) lists all the composer's notable works in a nicely formatted string.

    function notable_Works(i) {
      Works = `Five amazing works by famous composer ${composer[i].Fname} ${composer[i].Lname} are: "${composer[i].NotableWorks[0]}", "${composer[i].NotableWorks[1]}", "${composer[i].NotableWorks[2]}", "${composer[i].NotableWorks[3]}", and "${composer[i].NotableWorks[4]}."`
      return Works;
    };

    console.log(notable_Works(2));
    document.getElementById("notableworks1").innerHTML = notable_Works(2);
    console.log(notable_Works(5));
    document.getElementById("notableworks2").innerHTML = notable_Works(5);

  })
  .catch(error => {
    // Handle any errors that occur while fetching the file
    console.error(error);
  });

  