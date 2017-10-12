'use strict';//always at top of javascript
//
var userPoints = 0;
//
var user = prompt('You\'re here because you want to know if you\'re a good friend. What is your name?');
//
  alert('Hi '+user+'.');

  alert(user+' most would agree a mark of a good friend (or journalist) is the ability to listen. So, before we move on, let us tell you about a person named,\"Caitlin Sweeney\".' );

  alert('Caitlin is best known for her eccentric behavior. Her journey has taken her all over the United States. Caitlin is jealous of people who grew up in one community their whole childhood.');

  alert('Caitlin is grateful for her posse of animals. She gets to come home to two dogs, two cats, and two aquariums at the end of the day.');

  alert(' She hopes to remain in the Pacific Northwest fo a considerable time and looks forward to becoming more involved in her community.');


  var  q = 'Do you remember who we just learned about? Was it Caitlin Smith? Type yes or no.'
  var  q1 = 'Does Caitlin plan on making the Pacific Northwest her home? Type yes or no.'
  var  q2 = 'Caitlin has more than two types of animal companions. Type yes for true or no for false.'
  var  q3 = 'Could Caitlin be described as eccentric? Please answer yes or no.'
  var  q4 = 'Caitlin pities the people that never left their home town? Type yes or no.'
  var questions = [ q, q1, q2, q3, q4];

  var answers = ['no','yes','yes','yes','no'];

  var  ra = 'We\'re off to a good start!';
  var  ra1 = 'Correct, I\'m impressed. I\'m starting to think you could be a great listener!';
  var  ra2 = 'Are you an elephant? Your memory is impressive.';
  var  ra3 = 'That\'s correct. Only one more question left!';
  var  ra4 = 'Yes! Infact Caitlin envies those who have strong roots.';
  var rightAnsweralert = [ra , ra1, ra2, ra3, ra4];


  var  wa = 'Names can be hard I know, but we actually learned about Caitlin Sweeney.';
  var  wa1 = 'Not everyone is good at memorizing written information. You still have more opportunities for correct answers.';
  var  wa2 = 'That was a hard one. Unfortunately the correct answer was yes.'
  var  wa3 = 'If you\'re saying no to be kind, don\'t worry eccentric is a good thing!'
  var  wa4 = 'Caitlin actually envies those with stong roots, she would never pity them!'
  var wrongAnsweralert = [ wa, wa1, wa2, wa3, wa4];

  var i=0;

  for( ; i<questions.length; i++){

    var answer = askQuestion(questions,answers);

    console.log(answer);

    if ( answer === true) {

      alert(rightAnsweralert[i]);

      userPoints = userPoints + 1;

      console.log('Alert for question \"' + questions[i]+ '\":' + rightAnsweralert[i] +'. ' + userPoints + ':total points.');

    }
    //if ( answer === false) {
    else {

    alert(wrongAnsweralert[i]);

    console.log('Alert for question \"' + questions[i] + '\":' + wrongAnsweralert[i]+'. ' + userPoints + ':total points.');
  }
  // }
}

  alert('If you lost count, you\'ve answered '+ userPoints+' correctly and have earned '+ userPoints + ' points.')

  if (userPoints === 5){
    alert('I wish you were my friend! You\'ve answered every question with precision!');
  }
  if (userPoints < 5 && userPoints>=3){
    alert('It\'s clear you\'ve made an effort. Maybe just an off day but you\'ve missed one or two questions.' );
  }
  if(userPoints <3 && userPoints>0){
    alert('This test is not conclusive, but your listening skills may need practice.');
  }


function askQuestion(array , array1){

var questions = array;

var answers = array1;

var response = prompt('Please respond with a yes or no response. '+ questions[i]).toLowerCase();


console.log('User is on question '+ questions[i] + '- answer is:' + response);

  while( response !== 'yes' && response !== 'y' && response !== 'no' && response !== 'n'){

        response = prompt (questions[i] +' Only yes or no answers can be evaluated.').toLowerCase();

        console.log('answer from while loop: '+ response);

    }
// need something to connect answers and questions
    if (response === answers[i]){

    return true;

    }
      else

      return false;

}
