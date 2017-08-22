import { Ver1Page } from './app.po';

describe('ver1 App', () => {
  let page: Ver1Page;

  beforeEach(() => {
    page = new Ver1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
