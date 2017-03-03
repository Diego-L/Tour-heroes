import { TourHeroesPage } from './app.po';

describe('tour-heroes App', () => {
  let page: TourHeroesPage;

  beforeEach(() => {
    page = new TourHeroesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
