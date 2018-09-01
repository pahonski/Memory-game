class Storage {
  constructor() {
    this.listProfiles = [];
    this.usersRating = [];
    this.listSubscribers = [];
    this.currentProfileId = null;

    this.serverUrl = 'https://fe.it-academy.by/AjaxStringStorage2.php';
    this.profilesStorage = 'KUZNIATSOU_MEMORY_PROFILES';
    this.usersRatingStorage = 'KUZNIATSOU_MEMORY_RATING';


    this.loadData();
  }

  loadProfilesFromServer() {
    $.ajax({
      url: this.serverUrl,
      type: 'POST',
      cache: false,
      dataType: 'json',
      data: {
        f: 'READ', n: this.profilesStorage
      },
      success: this.loadProfilesFromServerReady,
      error: this.ajaxErr
    })
  }

  loadProfilesFromServerReady(callback) {
    if(callback.error !== undefined) {
      console.log(callback.error);
    }

    if(callback.result === '') {
      console.log('База пуста!');
    }

    if(callback.result !== '') {

    }
  }

  loadRatingFromServer() {
    $.ajax({
      url: this.serverUrl,
      type: 'POST',
      cache: false,
      dataType: 'json',
      data: {
        f: 'READ', n: this.usersRatingStorage
      },
      success: this.loadRatingFromServerReady,
      error: this.ajaxErr
    })
  }

  loadRatingFromServerReady(callback) {
    if(callback.error !== undefined) {
      console.log(callback.error);
    }

    if(callback.result === '') {
      console.log('База пуста!');

    }

    if(callback.result !== '') {

    }
  }

  updateReady(callresult) {
    console.log(callresult, 'UPDATE');
    if (callresult.error != undefined)
      alert(callresult.error);
  };

  ajaxErr(jqXHR, statusStr, errorStr) {
    console.log(statusStr + ' ' + errorStr);
  };

  updateProfilesData() {
    localStorage.setItem("listProfiles", JSON.stringify(this.listProfiles));
  }

  updateRatingData() {
    console.log(this.usersRating);
    localStorage.setItem("usersRating", JSON.stringify(this.usersRating));

    this.notifySubscribers("update-rating");
  }

  loadData() {
    const loadedProfiles = JSON.parse(localStorage.getItem('listProfiles'));
    this.listProfiles = loadedProfiles ? loadedProfiles : [];

    const loadedRating = JSON.parse(localStorage.getItem('usersRating'));
    this.usersRating = loadedRating ? loadedRating : {
      'E': [],
      'M': [],
      'H': [],
    };
  }

  notifySubscribers(action) {
    for (let index = 0; index < this.listSubscribers.length; index++) {

      const subscriber = this.listSubscribers[index];

      if (subscriber["action"] === "update-rating") {
        subscriber['heandler']({
          "action": "update-rating",
          "notice": "updated users rating",
        });
      }

    }
  }

  subscribeToNotifications(action, heandler) {
    this.listSubscribers.push({
      'action': action,
      'heandler': heandler,
    })
  }

  isPlayerExist(player) {
    for (let index = 0; index < this.listProfiles.length; index++) {
      if (this.listProfiles[index].email === player.email) {
        return true;
      }
    }

    return false;
  }

  addNewProfile(player) {
    if (this.isPlayerExist(player)) {
      return false;
    } else {
      this.listProfiles.push(player);
      localStorage.setItem("listProfiles", JSON.stringify(this.listProfiles));
      return true;
    }

  }

  selectAllProfiles() {
    return this.listProfiles.slice();
  }

  getAllRatingByLevel(level) {
    return this.usersRating[level].slice();
  }

  setCurrentProfile(userId) {
    this.currentProfileId = userId;
  }

  getCopyCurrentProfile() {
    var clone = {}; // новый пустой объект

    for (var key in this.listProfiles[this.currentProfileId]) {
      clone[key] = this.listProfiles[this.currentProfileId][key];
    }
    return clone;
  }

  compareTimeGlobalRating(gameTime, level) {
    const ratingByLevel = this.usersRating[level];

    const timeRez = {
      firstName: this.listProfiles[this.currentProfileId]['firstName'],
      lastName: this.listProfiles[this.currentProfileId]['lastName'],
      wrapper: this.listProfiles[this.currentProfileId].gameSettings['wrapper'],
      time: gameTime,
    };

    this.usersRating[level].push(timeRez);

    function compareByLevel(usersA, usersB) {
      return usersA.time - usersB.time;
    }

    this.usersRating[level].sort(compareByLevel);

    if (this.usersRating[level].length > 10) {
      this.usersRating[level] = this.usersRating[level].slice(0, 10);
    }

    this.updateRatingData();
  }

  compareGameTimesByLevel(gameTime, level) {
    const currentScores = this.listProfiles[this.currentProfileId].topScores;

    if (currentScores[level] === 0) {

      console.log("set first game time!");
      this.setProfileScoreByLevel(gameTime, level);

    } else if (gameTime < currentScores[level]) {

      console.log("new your record!");
      this.setProfileScoreByLevel(gameTime, level);

    } else {
      console.log("Бывало и лучше!");
    }
  }

  setProfileScoreByLevel(gameTime, level) {
    this.listProfiles[this.currentProfileId].topScores[level] = gameTime;
    this.compareTimeGlobalRating(gameTime, level);
  }

  setProfileGameWrapper(wrapperKey) {
    this.listProfiles[this.currentProfileId].gameSettings.wrapper = wrapperKey;
    this.updateProfilesData();
  }

  setProfileGameLevel(level) {
    this.listProfiles[this.currentProfileId].gameSettings.level = level;
    this.updateProfilesData();
  }

  getCurrentProfileSettings() {
    return this.listProfiles[this.currentProfileId].gameSettings;
  }

  getCurrentProfileName() {
    return this.listProfiles[this.currentProfileId].firstName;
  }

  getCurrentProfileLevel() {
    return this.listProfiles[this.currentProfileId].gameSettings.level;
  }

}