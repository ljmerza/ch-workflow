import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

import { selectSettings, SettingsState } from './../../../core/settings';

@Injectable()
export class EntriesService {
	private unsubscribe$: Subject<void> = new Subject<void>();
	settings: SettingsState;

	constructor(private httpClient: HttpClient, private store: Store<{}>) {
		store.pipe(select(selectSettings), takeUntil(this.unsubscribe$)).subscribe((settings) => (this.settings = settings));
	}

	getEntries(): Observable<any> {
		return this.httpClient.get(`api/toggl/entries`, {
			headers: {
				Authorization: `Basic ${this.settings.tgToken}`,
			},
		});
	}
}
