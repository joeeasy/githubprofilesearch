import { GitHubProfileSearchPage } from './app.po';

describe('git-hub-profile-search App', () => {
  let page: GitHubProfileSearchPage;

  beforeEach(() => {
    page = new GitHubProfileSearchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
