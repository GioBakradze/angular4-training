import { TddProjectPage } from './app.po';

describe('tdd-project App', () => {
  let page: TddProjectPage;

  beforeEach(() => {
    page = new TddProjectPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
