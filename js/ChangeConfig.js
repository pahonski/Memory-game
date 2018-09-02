const configWrappers = {
  "blade runner": {
    wrapperLink: "url('./images/blade runner/wrapper.jpg')",
    frontSideLinks: [
      "url('./images/blade runner/runner1.jpg')",
      "url('./images/blade runner/runner2.jpg')",
      "url('./images/blade runner/runner3.jpg')",
      "url('./images/blade runner/runner4.jpg')",
      "url('./images/blade runner/runner5.jpg')",
    ],
    backgroundImageLink: "url('./images/blade runner/bg.jpg')",
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
  "suicide squad": {
    wrapperLink: "url('./images/suicide squad/wrapper.jpg')",
    frontSideLinks: [
      "url('./images/suicide squad/suicide squad1.jpg')",
      "url('./images/suicide squad/suicide squad2.jpg')",
      "url('./images/suicide squad/suicide squad3.jpg')",
      "url('./images/suicide squad/suicide squad4.jpg')",
      "url('./images/suicide squad/suicide squad5.jpg')",
      "url('./images/suicide squad/suicide squad6.jpg')",
    ],
    backgroundImageLink: "url('./images/suicide squad/bg.jpg')",
  },
  "league of justice": {
    wrapperLink: "url('./images/league of justice/wrapper.jpg')",
    frontSideLinks: [
      "url('./images/league of justice/justice1.jpg')",
      "url('./images/league of justice/justice2.jpg')",
      "url('./images/league of justice/justice3.jpg')",
      "url('./images/league of justice/justice4.jpg')",
      "url('./images/league of justice/justice5.jpg')",
      "url('./images/league of justice/justice6.jpg')",
    ],
    backgroundImageLink: "url('./images/league of justice/bg.jpg')",
  },
  "girls": {
    wrapperLink: "url('./images/girls/wrapper.jpg')",
    frontSideLinks: [
      "url('./images/girls/girl1.jpg')",
      "url('./images/girls/girl2.jpg')",
      "url('./images/girls/girl3.jpg')",
      "url('./images/girls/girl4.jpg')",
      "url('./images/girls/girl5.jpg')",
      "url('./images/girls/girl6.jpg')",
      "url('./images/girls/girl7.jpg')",
      "url('./images/girls/girl8.jpg')",
    ],
  },
  "guardians": {
    wrapperLink: "url('./images/guardians the galaxy/wrapper.jpg')",
    frontSideLinks: [
      "url('./images/guardians the galaxy/guardian1.jpg')",
      "url('./images/guardians the galaxy/guardian2.jpg')",
      "url('./images/guardians the galaxy/guardian3.jpg')",
      "url('./images/guardians the galaxy/guardian4.jpg')",
      "url('./images/guardians the galaxy/guardian5.jpg')",
      "url('./images/guardians the galaxy/guardian6.jpg')",
      "url('./images/guardians the galaxy/guardian7.jpg')",
      "url('./images/guardians the galaxy/guardian8.jpg')",
    ],
    backgroundImageLink: "url('./images/guardians the galaxy/bg.jpg')",
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
  }
};

class ChangeConfig{
  constructor() {
    this.serverUrl = 'https://fe.it-academy.by/AjaxStringStorage2.php';
    this.configWrappers = '';
    this.stringConfig = 'KUZNIATSOU_MEMORY_CONFIG';
    this.password = '';
    this.serverDataString = '';

    // this.updateConfig();

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



