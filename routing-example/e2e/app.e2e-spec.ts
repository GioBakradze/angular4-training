import { RoutingExamplePage } from './app.po';

describe('routing-example App', () => {
  let page: RoutingExamplePage;

  beforeEach(() => {
    page = new RoutingExamplePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
