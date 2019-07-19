import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { WorkSpaceInterface } from './interfaces';
import { TogglApiService } from '../api';

@Injectable()
export class WorkSpaceService {
	constructor(private readonly apiService: TogglApiService) {}

	getWorkSpaces(authKey): Observable<WorkSpaceInterface[]> {
		return this.apiService.getData('me/workspaces', authKey).pipe(map(response => response.data));
	}
}
