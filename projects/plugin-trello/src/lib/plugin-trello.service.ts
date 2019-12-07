import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams, HttpBackend } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { TRELLO_API_KEY, TRELLO_AUTH_SECRET } from '../lib/injector-tokens';

@Injectable({
  providedIn: 'root'
})
export class PluginTrelloService {

  http: HttpClient;

  apiKey: string;
  authSecret: string;

  $cardAction = new Subject();

  constructor(
    private backend: HttpBackend,
    @Inject(TRELLO_API_KEY) apiKey: string,
    @Inject(TRELLO_AUTH_SECRET) authSecret: string
  ) {
    this.http = new HttpClient(backend);

    this.apiKey = apiKey;
    this.authSecret = authSecret;
  }

  getAuthToken() {
    return '540fe6b3a9f187e58748f529ea8e5d78be979cee7a0e68094a9266c85a0c3ca8';
  }

  getBoards(): Observable<any> {
    return this.http.get('https://api.trello.com/1/members/me/boards', {
      params: this.getParams({
        memberships: 'all'
      })
    });
  }

  getBoardById(id): Observable<any> {
    return this.http.get(`https://api.trello.com/1/boards/${id}`, {
      params: this.getParams({
        members: 'all'
      })
    });
  }

  getBoardLists(id): Observable<any> {
    return this.http.get(`https://api.trello.com/1/boards/${id}/lists`, {
      params: this.getParams()
    });
  }

  getListCards(listId): Observable<any> {
    return this.http.get(`https://api.trello.com/1/lists/${listId}/cards`, {
      params: this.getParams({
        members: true
      })
    });
  }

  addCardToList(listId, name): Observable<any> {
    return this.http.post('https://api.trello.com/1/cards', null, {
      params: this.getParams({
        name,
        idList: listId
      })
    });
  }

  editCard(cardId, data): Observable<any> {
    return this.http.put(`https://api.trello.com/1/cards/${cardId}`, null, {
      params: this.getParams(data)
    });
  }

  deleteCard(cardId): Observable<any> {
    return this.http.delete(`https://api.trello.com/1/cards/${cardId}`, {
      params: this.getParams()
    });
  }

  getParams(extra = {}): HttpParams {
    let params = new HttpParams()
      .set('key', this.apiKey)
      .set('token', this.getAuthToken());

    Object.keys(extra).forEach(k => {
      params = params.set(k, extra[k]);
    });

    return params;
  }
}
