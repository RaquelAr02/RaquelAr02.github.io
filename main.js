let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #c695f5;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #c695f5 ;">A punto de ser ING. en mantenimiento con curiosidad de la programación.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
