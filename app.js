'use strict';//always at top of javascript

var userPoints = 0;

var user = prompt('You\'re here because you want to know if you\'re a good friend. What is your name?');

  alert('Hi '+user+'.');

  alert(user+' most would agree a mark of a good friend (or journalist) is the ability to listen. So, before we move on, let us tell you about a person named,\"Caitlin Sweeney\".' );

  alert('Caitlin is best known for her eccentric behavior. Her journey has taken her all over the United States. Caitlin is jealous of people who grew up in one community their whole childhood.');

  alert('Caitlin is grateful for her posse of animals. She gets to come home to two dogs, two cats, and two aquariums at the end of the day.');

  alert(' She hopes to remain in the Pacific Northwest fo a considerable time and looks forward to becoming more involved in her community.');


var answer = prompt('Do you remember who we just learned about? Was it Caitlin Smith? Type yes or no.').toLowerCase();// first question, modifier added for more efficient Boolean statements

 console.log('User knows name from story: '+ answer);

    while( answer !== 'yes' && answer !== 'y' && answer !== 'no' && answer !== 'n'){

        var answer = prompt ('Only yes or no answers can be evaluated. Do you remember who we just learned about? Was it Caitlin Smith?').toLowerCase();

        console.log('answer from while loop: '+ answer);

    }
if (answer=== ('no'||'n'||'yes'||'y')){

  if (answer==='no'||'n'){

   alert('We\'re off to a good start!');

   userPoints = userPoints + 1;

   console.log(user + ' earned 1 point for the first question. '+userPoints+':total.');

 }
 else

    alert('Names can be hard I know, but we actually learned about Caitlin Sweeney.')

    console.log(user+ ' earned 0 points for the first question. Current user points: '+ userPoints);

}

var answer1 = prompt('Does Caitlin plan on making the Pacific Northwest her home? Type yes or no.').toLowerCase();// first question, modifier added for more efficient Boolean statements

  console.log('Does user know Caitlin will make the Pacific Northwest her home? : '+ answer1);

    while( answer1 !== 'yes' && answer1 !== 'y' && answer1 !== 'no' && answer1 !== 'n'){

        var answer1 = prompt ('Only yes or no answers can be evaluated. Does Caitlin plan on making the Pacific Northwest her home?').toLowerCase();

        console.log('answer1 from while loop : '+ answer1);

    }

if(answer1 === ('no'||'n'||'yes'||'y')){

  if (answer1 ==='yes'||'y'){

    alert('Correct, I\'m impressed. I\'m starting to think you could be a great listener!');

    userPoints = userPoints + 1;

    console.log(user + ' earned 1 point for the second question. '+userPoints+':total.');

  }
   else

     alert('Not everyone is good at memorizing written information. You still have more opportunities for correct answers.');

     console.log(user+ ' earned 0 points for the second question.'+ userPoints+':total.');

 }

var answer2 = prompt('Caitlin has more than two types of animal companions. Type yes for true or no for false.').toLowerCase();// first question, modifier added for more efficient Boolean statements


    console.log('User knows Caitlin has more than two types of animals. : '+ answer2);


      while( answer2 !== 'yes' && answer2 !== 'y' && answer2 !== 'no' && answer2 !== 'n'){

          var answer2 = prompt ('Only yes or no answers can be evaluated. Caitlin has more than two types of animal companions. Type yes for true or no for false.').toLowerCase();

          console.log('answer2 from while loop: '+ answer2);

      }

if(answer2 === ('no'||'n'||'yes'||'y')){

  if (answer2 ==='yes'||'y'){

     alert('Are you an elephant? Your memory is impressive.');

     userPoints = userPoints + 1;

     console.log(user + ' earned 1 point for the third question. '+userPoints+':total.');

   }
   else

      alert('Names can be hard I know, but we actually learned about Caitlin Sweeney.');

      console.log(user+ ' earned 0 points for the third question.'+ userPoints);

}

var answer3 = prompt ('Could Caitlin be described as eccentric? Please answer yes or no.');


  console.log('User knows Caitlin is eccentric : '+answer3);


    while( answer3 !== 'yes' && answer3 !== 'y' && answer3 !== 'no' && answer3 !== 'n'){

      var answer3 = prompt ('Only yes or no answers can be evaluated. Could Caitlin be described as eccentric?').toLowerCase();

      console.log('answer3 from while loop: '+ answer3);

    }

if(answer3 === ('no'||'n'||'yes'||'y')){

    if (answer3 === 'yes'||'y'){

      alert('That\'s correct. Only one more question left!');

      userPoints = userPoints + 1;

      console.log(user + ' earned 1 point for the first question. '+userPoints+':total.');

    }
      else

       alert('If you\'re saying no to be kind, don\'t worry eccentric is a good thing!')

       console.log(user+ ' earned 0 points for the fourth question.'+ userPoints +' : total.');;

   }

var answer4 = prompt('Caitlin pities the people that never left their home town? Type yes or no.').toLowerCase();// first question, modifier added for more efficient Boolean statements

    console.log('User knows Caitlin envies hometown folks : '+ answer4);

        while( answer4 !== 'yes' && answer4 !== 'y' && answer4 !== 'no' && answer4 !== 'n'){

          var answer4 = prompt ('Only yes or no answers can be evaluated. Caitlin pities the people that never left their home town?');

          console.log('answer4 from while loop: '+ answer4);

     }

if(answer4 === ('no'||'n'||'yes'||'y')){
     if (answer4 === 'no'||'n'){

       alert('Yes! Infact Caitlin envies those who have strong roots.');

       userPoints = userPoints + 1;

       console.log(user + ' earned 1 point for the first question. '+ userPoints +':total.');

     }
      else
        alert('Caitlin actually envies those with stong roots, she would never pity them!')

        console.log(user + ' earned 0 points for the fifth question.'+ userPoints +' : total.');

    }

      alert('If you lost count, you\'ve answered '+ userPoints+' correctly and have earned '+ userPoints+ ' points.')

      if (userPoints === 5){
        alert('I wish you were my friend! You\'ve answered every question with precision!');
      }
      if (userPoints < 5 && userPoints>=3){
        alert('It\'s clear you\'ve made an effort. Maybe just an off day but you\'ve missed one or two questions.' );
      }
      if(userPoints <3 && userPoints>0){
        alert('This test is not conclusive, but your listening skills may need practice.');
      }
