// Author: Michael Davis
register({
  name: 'Reddit',
  domains: ['www.reddit.com'],
  sessionCookieNames: ['reddit_session'],
  identifyUser: function ()
  {
    var resp = this.httpGet(this.siteUrl);
    this.userName = resp.body.querySelectorAll('.user a')[0].textContent;
    this.userAvatar = 'http://www.reddit.com/static/self_default.png';
  }
});