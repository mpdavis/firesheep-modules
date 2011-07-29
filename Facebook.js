// Authors:
//   Eric Butler <eric@codebutler.com>
// Edited:
//   Michael Davis <mike.philip.davis@gmail.com>
register({
  name: 'Facebook',
  url: 'http://www.facebook.com/home.php',
  domains: [ 'facebook.com' ],
  sessionCookieNames: [ 'xs', 'c_user' ],

  identifyUser: function () {
    var resp = this.httpGet(this.siteUrl);
    this.userName   = resp.body.querySelector('#navAccountName').innerHTML;
    this.userAvatar = resp.body.querySelector('#navAccountPic img').src;
  }
});