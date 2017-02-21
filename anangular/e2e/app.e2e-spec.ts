import { AnangularPage } from './app.po';

describe('anangular App', function() {
  let page: AnangularPage;

  beforeEach(() => {
    page = new AnangularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
