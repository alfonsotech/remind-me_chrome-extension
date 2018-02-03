window.onload = function() {
  var reminder1 = prompt("Are you doing this to avoid something stressful irl? Just type \"yes\" or \"no\" below.");
  if (reminder1 == null || reminder1 == "") {
      var reminder2 = confirm("Do you maybe wanna deal with that instead of getting on Twitter right now?");
      if (reminder1 == null || reminder1 == "") {
          alert("Okay, suit yourself.");
          document.write('Ooops, twitter is gone? What happened? Did I do that? ');
      }

  } else if(reminder1 == "yes") {
      var reminder3 = prompt("Do you hate yourself, is that it?? Just type \"yes\" or \"no\" below.");

      if (reminder3 == null || reminder3 == "") {
          var reminder4 = confirm("I said: Do you hate yourself, is that it?", "Yes but I hate myself? Just type \"yes\" or \"no\" below.");

          if (reminder3 == null || reminder3 == "") {
              var reminder4 = confirm("I give up. Do what you like.");
              document.write('Ooops, twitter is gone? What happened? Did I do that?');
          } else if (reminder4 == "no") {
              alert("Not even a little bit? Okay then, enjoy Twitter.");
              document.write('Ooops, twitter is gone? What happened? Did I do that? ');
          } else {
              alert("It's okay hon, humans are self-loathing creatures. It's not your fault. Enjoy Twitter.");
          }

      } else if (reminder3 == "no") {
          alert("Not even a little bit? Okay then, enjoy Twitter.");
          document.write('Ooops, twitter is gone? Did I do that?')
      } else {
          alert("It's okay hon, humans are self-loathing creatures. It's not your fault. Enjoy Twitter.");
      }

  } else {
    alert("Okay, suit yourself.");
    document.write('Ooops, twitter is gone? What happened? Did I do that? ');
  }

}
