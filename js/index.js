

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



