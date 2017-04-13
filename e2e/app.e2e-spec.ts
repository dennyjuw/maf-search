import { MafSearchPage } from './app.po';

describe('maf-search App', () => {
  let page: MafSearchPage;

  beforeEach(() => {
    page = new MafSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
