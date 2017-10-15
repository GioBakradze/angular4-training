import { SamplesPage } from './app.po';

describe('samples App', () => {
  let page: SamplesPage;

  beforeEach(() => {
    page = new SamplesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
