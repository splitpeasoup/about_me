'use strict';//always at top of javascript

var userPoints = 0;

var user = prompt('You\'re here because you want to know if you\'re a good friend. What is your name?');

  alert('Hi '+user+'.');

  alert(user+'most would agree mark of a good friend (or journalist) is the ability to listen. Before we move on, let us tell you about a person named,\"Caitlin Sweeney\".' );

  alert('Caitlin is best known for her eccentric behavior. Her journey has taken her all over the United States. Caitlin is jealous of people who grew up in one community their whole childhood.');

  alert('Caitlin is grateful for her posse of animals. She gets to come home to two dogs, two cats, and two aquariums at the end of the day.');

  alert(' She hopes to remain in the Pacific Northwest fo a considerable time and looks forward to becoming more involved in the community.');



 var answer = prompt('Do you remember who we just learned about? Was it Caitlin Smith? Type yes or no.').toLowerCase();// first question, modifier added for more efficient Boolean statements

 console.log('Does user know subject\'s name(no = true): '+answer);


 var answer4 = prompt('Caitlin pities the people that never left their home town? Type yes or no.').toLowerCase();// first question, modifier added for more efficient Boolean statements

 console.log('User knows Caitlin envies hometown folks. (no = true): '+answer4);

 if (answer===no|n){
   alert('We\'re off to a good start!');

   userPoints = userPoints++;
   console.log(user + ' earned 1 point for the first question. '+userPoints+':total.');

 }
  if (answer===yes|y){
    alert('Names can be hard I know, but we actually learned about Caitlin Sweeney.')

    console.log(user+ ' earned 0 points for the first question. Current user points: '+ userPoints);


  }

var answer1 = prompt('Does Caitlin plan on making the Pacific Northwest her home? Type yes or no.').toLowerCase();// first question, modifier added for more efficient Boolean statements

console.log('Does user know Caitlin will make the Pacific Northwest her home? (yes = true): '+answer1);

  if (answer1===yes|y){
    alert('Correct, I\'m impressed. I\'m starting to think you could be a great listener!');

    userPoints = userPoints++;
    console.log(user + ' earned 1 point for the second question. '+userPoints+':total.');

  }
   if (answer1===no|n){
     alert('Not everyone is good at memorizing written information. You still have more opportunities for correct answers.');

     console.log(user+ ' earned 0 points for the second question.'+ userPoints+':total.');
   }

var answer2 = prompt('Caitlin has more than two types of animal companions. Type yes for true or no for false.').toLowerCase();// first question, modifier added for more efficient Boolean statements

console.log('User knows Caitlin has more than two types of animals. (yes = true): '+answer2);


   if (answer2===no|n){
     alert('We\'re off to a good start!');

     userPoints = userPoints++;
     console.log(user + ' earned 1 point for the first question. '+userPoints+':total.');

   }
    if (answer2===yes|y){
      alert('Names can be hard I know, but we actually learned about Caitlin Sweeney.')

      console.log(user+ ' earned 0 points for the third question.'+ userPoints);

var answer3 = prompt('Could Caitlin be described as eccentric? Type a yes or no response.').toLowerCase();// first question, modifier added for more efficient Boolean statements

console.log('User knows Caitlin is eccentric. (yes = true): '+answer3);

    }if (answer3===no|n){
      alert('We\'re off to a good start!');

      userPoints = userPoints++;
      console.log(user + ' earned 1 point for the first question. '+userPoints+':total.');

    }
     if (answer3===yes|y){
       alert('Names can be hard I know, but we actually learned about Caitlin Sweeney.')

       console.log(user+ ' earned 0 points for the fourth question.'+ userPoints);
     }if (answer4===no|n){
       alert('We\'re off to a good start!');

       userPoints = userPoints++;
       console.log(user + ' earned 1 point for the first question. '+userPoints+':total.');

     }
      if (answer4===yes|y){
        alert('Names can be hard I know, but we actually learned about Caitlin Sweeney.')

        console.log(user+ ' earned 0 points for the fifth question.'+ userPoints);
      }

      alert('If you lost count, you\'ve answered '+ userPoints+' correctly and have earned '+ userPoints+ '.')

      if (userPoints=== 5){
        alert('I wish you were my friend! You\'ve answered every question with precision!');
      }
      if (userPoints< 5 && userPoints>=3){
        alert('It\'s clear you\'ve made an effort. Maybe just an off day but you\'ve missed one or two questions.' );
      }
      if(userPoints<3 && userPoints>0){
        alert('This test is not conclusive, but your listening skills may need practice.');
      }
