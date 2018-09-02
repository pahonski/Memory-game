// $.ajax({
//   url: 'https://fe.it-academy.by/AjaxStringStorage2.php',
//   type: 'POST',
//   cache: false,
//   dataType: 'json',
//   data: {
//     f: 'INSERT', n: 'KUZNIATSOU_MEMORY_RATING', v: ''
//   },
//   success: hello,
//   error: this.ajaxErr
// });
//
// function hello(callback) {
//   console.log(callback.result)
// }
// let password;
//
// function updateProfiles() {
//   password = Math.random();
//   $.ajax({
//     url: 'https://fe.it-academy.by/AjaxStringStorage2.php',
//     type: 'POST',
//     cache: false,
//     dataType: 'json',
//     data: {
//       f: 'LOCKGET', n: 'KUZNIATSOU_MEMORY_RATING', p: password
//     },
//     success: updateProfilesReady,
//     error: this.ajaxErr
//   })
// }
//
// function updateProfilesReady() {
//   $.ajax({
//     url: 'https://fe.it-academy.by/AjaxStringStorage2.php',
//     type: 'POST',
//     cache: false,
//     dataType: 'json',
//     data: {
//       f: 'UPDATE', n: 'KUZNIATSOU_MEMORY_RATING', v: "{}", p: password
//     },
//     success: updateReady,
//     error: this.ajaxErr
//   })
// }
//
// function updateReady(callresult) {
//   console.log(callresult, 'UPDATE');
//   if (callresult.error != undefined)
//     alert(callresult.error);
// }
//
// updateProfiles();

const config = new ChangeConfig();

const soundPlayer = new SoundPlayer();

const stopwatch = new Stopwatch();
const confirmDialog = new ConfirmDialog();

const storage = new Storage();
const router = new Router();

const controller = new Controller(storage, router);

const moduleProfiles = new ModuleProfiles(controller);
const moduleNavbar = new ModuleNavbar(controller, moduleProfiles);

const gameArea = new GameArea(controller);
const moduleSettings = new ModuleSettings(controller, gameArea);

const moduleRating = new ModuleRating(controller);




// const configWrappers = {
//   "blade runner": {
//     wrapperLink: "url('./images/blade runner/wrapper.jpg')",
//     frontSideLinks: [
//       "url('./images/blade runner/runner1.jpg')",
//       "url('./images/blade runner/runner2.jpg')",
//       "url('./images/blade runner/runner3.jpg')",
//       "url('./images/blade runner/runner4.jpg')",
//       "url('./images/blade runner/runner5.jpg')",
//     ],
//     backgroundImageLink: "url('./images/blade runner/bg.jpg')",
//   },
//   "warcraft": {
//     wrapperLink: "url('./images/warcraft/wrapper.jpg')",
//     frontSideLinks: [
//       "url('./images/warcraft/warcraft1.jpg')",
//       "url('./images/warcraft/warcraft2.jpg')",
//       "url('./images/warcraft/warcraft3.jpg')",
//       "url('./images/warcraft/warcraft4.jpg')",
//       "url('./images/warcraft/warcraft5.jpg')",
//       "url('./images/warcraft/warcraft6.jpg')",
//       "url('./images/warcraft/warcraft7.jpg')",
//       "url('./images/warcraft/warcraft8.jpg')",
//     ],
//     backgroundImageLink: "url('./images/warcraft/bg.jpg')",
//   },
//   "suicide squad": {
//     wrapperLink: "url('./images/suicide squad/wrapper.jpg')",
//     frontSideLinks: [
//       "url('./images/suicide squad/suicide squad1.jpg')",
//       "url('./images/suicide squad/suicide squad2.jpg')",
//       "url('./images/suicide squad/suicide squad3.jpg')",
//       "url('./images/suicide squad/suicide squad4.jpg')",
//       "url('./images/suicide squad/suicide squad5.jpg')",
//       "url('./images/suicide squad/suicide squad6.jpg')",
//     ],
//     backgroundImageLink: "url('./images/suicide squad/bg.jpg')",
//   },
//   "league of justice": {
//     wrapperLink: "url('./images/league of justice/wrapper.jpg')",
//     frontSideLinks: [
//       "url('./images/league of justice/justice1.jpg')",
//       "url('./images/league of justice/justice2.jpg')",
//       "url('./images/league of justice/justice3.jpg')",
//       "url('./images/league of justice/justice4.jpg')",
//       "url('./images/league of justice/justice5.jpg')",
//       "url('./images/league of justice/justice6.jpg')",
//     ],
//     backgroundImageLink: "url('./images/league of justice/bg.jpg')",
//   },
//   "girls": {
//     wrapperLink: "url('./images/girls/wrapper.jpg')",
//     frontSideLinks: [
//       "url('./images/girls/girl1.jpg')",
//       "url('./images/girls/girl2.jpg')",
//       "url('./images/girls/girl3.jpg')",
//       "url('./images/girls/girl4.jpg')",
//       "url('./images/girls/girl5.jpg')",
//       "url('./images/girls/girl6.jpg')",
//       "url('./images/girls/girl7.jpg')",
//       "url('./images/girls/girl8.jpg')",
//     ],
//   },
//   "guardians": {
//     wrapperLink: "url('./images/guardians the galaxy/wrapper.jpg')",
//     frontSideLinks: [
//       "url('./images/guardians the galaxy/guardian1.jpg')",
//       "url('./images/guardians the galaxy/guardian2.jpg')",
//       "url('./images/guardians the galaxy/guardian3.jpg')",
//       "url('./images/guardians the galaxy/guardian4.jpg')",
//       "url('./images/guardians the galaxy/guardian5.jpg')",
//       "url('./images/guardians the galaxy/guardian6.jpg')",
//       "url('./images/guardians the galaxy/guardian7.jpg')",
//       "url('./images/guardians the galaxy/guardian8.jpg')",
//     ],
//     backgroundImageLink: "url('./images/guardians the galaxy/bg.jpg')",
//   }
// };



