import { TestBed } from '@angular/core/testing';

import { PluginTrelloService } from './plugin-trello.service';

describe('PluginTrelloService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PluginTrelloService = TestBed.get(PluginTrelloService);
    expect(service).toBeTruthy();
  });
});
