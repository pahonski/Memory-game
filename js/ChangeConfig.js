const configWrappers = {
  "starcraft": {
    wrapperLink: "url('./images/starcraft/wrapper.jpg')",
    frontSideLinks: [
      "url('./images/starcraft/starcraft1.jpg')",
      "url('./images/starcraft/starcraft2.jpg')",
      "url('./images/starcraft/starcraft3.jpg')",
      "url('./images/starcraft/starcraft4.jpg')",
      "url('./images/starcraft/starcraft5.jpg')",
    ],
    backgroundImageLink: "url('./images/starcraft/bg.jpg')",
  },
  "warcraft": {
    wrapperLink: "url('./images/warcraft/wrapper.jpg')",
    frontSideLinks: [
      "url('./images/warcraft/warcraft1.jpg')",
      "url('./images/warcraft/warcraft2.jpg')",
      "url('./images/warcraft/warcraft3.jpg')",
      "url('./images/warcraft/warcraft4.jpg')",
      "url('./images/warcraft/warcraft5.jpg')",
      "url('./images/warcraft/warcraft6.jpg')",
      "url('./images/warcraft/warcraft7.jpg')",
      "url('./images/warcraft/warcraft8.jpg')",
    ],
    backgroundImageLink: "url('./images/warcraft/bg.jpg')",
  },
  "overwatch": {
    wrapperLink: "url('./images/overwatch/wrapper.jpg')",
    frontSideLinks: [
      "url('./images/overwatch/over1.jpg')",
      "url('./images/overwatch/over2.jpg')",
      "url('./images/overwatch/over3.jpg')",
      "url('./images/overwatch/over4.jpg')",
      "url('./images/overwatch/over5.jpg')",
      "url('./images/overwatch/over6.jpg')",
    ],
    backgroundImageLink: "url('./images/overwatch/bg.jpg')",
  },
  "diablo": {
    wrapperLink: "url('./images/diablo/wrapper.jpg')",
    frontSideLinks: [
      "url('./images/diablo/diablo1.jpg')",
      "url('./images/diablo/diablo2.jpg')",
      "url('./images/diablo/diablo3.jpg')",
      "url('./images/diablo/diablo4.jpg')",
      "url('./images/diablo/diablo5.jpg')",
      "url('./images/diablo/diablo6.jpg')",
      "url('./images/diablo/diablo7.jpg')",
    ],
    backgroundImageLink: "url('./images/diablo/bg.jpg')",
  }
};

class ChangeConfig{
  constructor() {
    this.serverUrl = 'https://fe.it-academy.by/AjaxStringStorage2.php';
    this.configWrappers = '';
    this.stringConfig = 'KUZNIATSOU_MEMORY_CONFIG';
    this.profilesStorage = 'KUZNIATSOU_MEMORY_PROFILES';
    this.usersRatingStorage = 'KUZNIATSOU_MEMORY_RATING';
    this.password = '';
    this.serverDataString = '';




    // this.updateConfig();
    // this.updateProfiles()

  }

  addServerString(string, valueNotString) {
    $.ajax({
      url: this.serverUrl,
      type: 'POST',
      cache: false,
      dataType: 'json',
      data: {
        f: 'INSERT', n: string, v: JSON.stringify(valueNotString)
      },
      success: this.addServerStringReady,
      error: this.ajaxError
    });
  }

  addServerStringReady(callback) {
    console.log(callback.result);
  }

  readFromServer(string) {
    $.ajax({
      url: this.serverUrl,
      type: 'POST',
      cache: false,
      dataType: 'json',
      data: {
        f: 'READ', n: string
      },
      success: this.readReady,
      error: this.ajaxError
    });
  }

  readReady(callback) {
    console.log(callback, 'READ');
    if (callback.error !== undefined) {
      alert(callback.error);
    }

    if(callback.result === '') {
      console.log('String not found');
    }

    if(callback.result !== '') {
      this.configWrappers = callback.result;
    }

  }

  updateConfig() {
    this.password = Math.random();
    let that = this;
    $.ajax({
      url: this.serverUrl,
      type: 'POST',
      cache: false,
      dataType: 'json',
      data: {
        f: 'LOCKGET', n: that.stringConfig, p: that.password
      },
      success: that.updateConfigReady.bind(that),
      error: that.ajaxErr
    })
  }

  updateConfigReady(response) {
    let that = this;
    if (response.error !== undefined)
      alert(response.error);
    else {
      $.ajax({
        url: this.serverUrl,
        type: 'POST',
        cache: false,
        dataType: 'json',
        data: {
          f: 'UPDATE', n: that.stringConfig, v: JSON.stringify(configWrappers), p: that.password
        },
        success: that.updateReady,
        error: that.ajaxErr
      })
    }
  }

  updateProfiles() {
    this.password = Math.random();
    let that = this;
    $.ajax({
      url: this.serverUrl,
      type: 'POST',
      cache: false,
      dataType: 'json',
      data: {
        f: 'LOCKGET', n: that.profilesStorage, p: that.password
      },
      success: that.updateProfilesReady.bind(that),
      error: that.ajaxErr
    })
  }

  updateProfilesReady(response) {
    let that = this;
    if (response.error !== undefined)
      alert(response.error);
    else {
      $.ajax({
        url: this.serverUrl,
        type: 'POST',
        cache: false,
        dataType: 'json',
        data: {
          f: 'UPDATE', n: that.profilesStorage, v: JSON.stringify([]), p: that.password
        },
        success: that.updateReady,
        error: that.ajaxErr
      })
    }
  }

  updateReady(response) {
    console.log(response.result, 'Base refresh');
  }

  ajaxError(jqXHR, statusStr, errorStr) {
    console.log(statusStr + ' ' + errorStr);
  }

  getConfigData() {
    return this.configWrappers;
  }
}



